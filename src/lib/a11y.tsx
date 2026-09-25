import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ContrastMode = "normal" | "inverted" | "dark" | "light";
export type TextSize = "normal" | "large" | "xlarge" | "xxl";
export type CursorMode = "default" | "large" | "contrast";

export interface A11ySettings {
  contrast: ContrastMode;
  contrastLevel: number;
  textSize: TextSize;
  dyslexiaFont: boolean;
  textSpacing: number;
  lineHeight: number;
  readAloud: boolean;
  volume: number;
  highlightLinks: boolean;
  pauseAnimations: boolean;
  hideImages: boolean;
  cursor: CursorMode;
  captions: boolean;
  autoAlt: boolean;
  altOverrides: Record<string, string>;
}

export const defaultA11ySettings: A11ySettings = {
  contrast: "normal",
  contrastLevel: 0,
  textSize: "normal",
  dyslexiaFont: false,
  textSpacing: 0,
  lineHeight: 0,
  readAloud: false,
  volume: 0.8,
  highlightLinks: false,
  pauseAnimations: false,
  hideImages: false,
  cursor: "default",
  captions: false,
  autoAlt: true,
  altOverrides: {},
};

const STORAGE_KEY = "blf-a11y";

interface A11yContextType {
  settings: A11ySettings;
  update: (patch: Partial<A11ySettings>) => void;
  reset: () => void;
  speak: (text: string) => void;
  stopSpeaking: () => void;
  speaking: boolean;
}

const A11yContext = createContext<A11yContextType>({
  settings: defaultA11ySettings,
  update: () => {},
  reset: () => {},
  speak: () => {},
  stopSpeaking: () => {},
  speaking: false,
});

const TEXT_SIZE_SCALE: Record<TextSize, string> = {
  normal: "100%",
  large: "112.5%",
  xlarge: "125%",
  xxl: "150%",
};

function readStored(): A11ySettings {
  if (typeof window === "undefined") return defaultA11ySettings;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultA11ySettings;
    return { ...defaultA11ySettings, ...(JSON.parse(raw) as Partial<A11ySettings>) };
  } catch {
    return defaultA11ySettings;
  }
}

export function A11yProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<A11ySettings>(defaultA11ySettings);
  const [speaking, setSpeaking] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setSettings(readStored());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // storage unavailable, settings stay session-only
    }
  }, [settings, hydrated]);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.contrast = settings.contrast;
    root.dataset.textSize = settings.textSize;
    root.dataset.cursor = settings.cursor;
    root.style.setProperty("--a11y-font-scale", TEXT_SIZE_SCALE[settings.textSize]);
    root.style.setProperty("--a11y-contrast", String(1 + settings.contrastLevel / 100));
    root.style.setProperty("--a11y-letter-spacing", `${settings.textSpacing / 50}em`);
    root.style.setProperty("--a11y-word-spacing", `${settings.textSpacing / 25}em`);
    root.style.setProperty("--a11y-line-height", String(1.5 + settings.lineHeight / 100));
    root.toggleAttribute("data-dyslexia", settings.dyslexiaFont);
    root.toggleAttribute("data-highlight-links", settings.highlightLinks);
    root.toggleAttribute("data-pause-animations", settings.pauseAnimations);
    root.toggleAttribute("data-hide-images", settings.hideImages);
    root.toggleAttribute("data-captions", settings.captions);
  }, [settings, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    const images = Array.from(document.querySelectorAll("img"));
    images.forEach((img) => {
      const src = img.getAttribute("src") ?? "";
      const override = settings.altOverrides[src];
      if (override !== undefined) {
        img.alt = override;
        return;
      }
      if (!settings.autoAlt) return;
      if (img.getAttribute("alt") === null) {
        const hint = img.getAttribute("data-alt") || img.getAttribute("title");
        if (hint) {
          img.alt = hint;
          return;
        }
        const name = src.split("/").pop()?.split(/[?#]/)[0] ?? "";
        const humanized = name
          .replace(/\.[a-z0-9]+$/i, "")
          .replace(/[-_]+/g, " ")
          .trim();
        if (humanized && !/^(img|image|dsc|screenshot|photo)/i.test(humanized)) {
          img.alt = `Photo: ${humanized}`;
        }
      }
    });
    document.querySelectorAll("video").forEach((video) => {
      const label = video.getAttribute("data-video-label");
      if (label) video.setAttribute("aria-label", label);
    });
  }, [hydrated, settings.autoAlt, settings.altOverrides]);

  useEffect(() => {
    if (!settings.pauseAnimations) return;
    const videos = Array.from(document.querySelectorAll("video"));
    videos.forEach((video) => video.pause());
    return () => {
      videos.forEach((video) => {
        if (video.src) void video.play().catch(() => undefined);
      });
    };
  }, [settings.pauseAnimations]);

  const stopSpeaking = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }, []);

  const speak = useCallback(
    (text: string) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
      const clean = text.replace(/\s+/g, " ").trim();
      if (!clean) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(clean.slice(0, 600));
      utterance.volume = Math.min(Math.max(settings.volume, 0), 1);
      utterance.rate = 1;
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);
      setSpeaking(true);
      window.speechSynthesis.speak(utterance);
    },
    [settings.volume],
  );

  useEffect(() => {
    if (!settings.readAloud) {
      stopSpeaking();
      return;
    }
    const onOver = (event: Event) => {
      const target = (event.target as HTMLElement | null)?.closest("a, button, [data-speak]");
      if (!target) return;
      const label = target.getAttribute("aria-label") || target.textContent || "";
      speak(label);
    };
    document.addEventListener("mouseover", onOver);
    return () => document.removeEventListener("mouseover", onOver);
  }, [settings.readAloud, speak, stopSpeaking]);

  useEffect(() => () => stopSpeaking(), [stopSpeaking]);

  const update = useCallback((patch: Partial<A11ySettings>) => {
    setSettings((prev) => ({ ...prev, ...patch }));
  }, []);

  const reset = useCallback(() => setSettings(defaultA11ySettings), []);

  const value = useMemo(
    () => ({ settings, update, reset, speak, stopSpeaking, speaking }),
    [settings, update, reset, speak, stopSpeaking, speaking],
  );

  return <A11yContext.Provider value={value}>{children}</A11yContext.Provider>;
}

export function useA11y() {
  return useContext(A11yContext);
}
