import { useEffect, useRef, useState } from "react";
import {
  Accessibility,
  Contrast,
  Type,
  Volume2,
  Square,
  RotateCcw,
  Eye,
  Link2,
  Languages,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Slider } from "./ui/slider";
import { useA11y, type ContrastMode, type CursorMode, type TextSize } from "../lib/a11y";
import { useKeyboardNavigation, shortcuts } from "../hooks/useKeyboardNavigation";
import { AltTextManager } from "./AltTextManager";
import { useI18n, useTheme } from "../lib/i18n";

const contrastOptions: { value: ContrastMode; label: string }[] = [
  { value: "normal", label: "Normal" },
  { value: "inverted", label: "Inverted" },
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
];

const textSizeOptions: { value: TextSize; label: string }[] = [
  { value: "normal", label: "Normal" },
  { value: "large", label: "Large" },
  { value: "xlarge", label: "XL" },
  { value: "xxl", label: "XXL" },
];

const themeOptions = [
  { value: "system" as const, label: "System" },
  { value: "light" as const, label: "Light" },
  { value: "dark" as const, label: "Dark" },
];

const cursorOptions: { value: CursorMode; label: string }[] = [
  { value: "default", label: "Default" },
  { value: "large", label: "Large" },
  { value: "contrast", label: "High contrast" },
];

export function AccessibilityMenu() {
  const { settings, update, reset, speak, stopSpeaking, speaking } = useA11y();
  const { lang, setLang } = useI18n();
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const [themeChoice, setThemeChoice] = useState<"system" | "light" | "dark">(() => {
    if (typeof window === "undefined") return "system";
    return (window.localStorage.getItem("theme-choice") as "system" | "light" | "dark") ?? "system";
  });
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      window.localStorage.setItem("theme-choice", themeChoice);
    } catch {
      // ignore unavailable storage
    }
  }, [themeChoice]);

  useEffect(() => {
    if (themeChoice !== "system") {
      setTheme(themeChoice);
      return;
    }
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => setTheme(media.matches ? "dark" : "light");
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [themeChoice, setTheme]);

  useKeyboardNavigation(
    () => setOpen(true),
    () => setShortcutsOpen(true),
  );

  useEffect(() => {
    if (settings.cursor === "default") return;
    const node = cursorRef.current;
    if (!node) return;
    const onMove = (event: MouseEvent) => {
      node.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [settings.cursor, open]);

  const readPage = () => {
    const main = document.getElementById("main");
    speak(main?.textContent ?? document.body.textContent ?? "");
  };

  return (
    <>
      {settings.cursor !== "default" && (
        <div
          ref={cursorRef}
          aria-hidden="true"
          className={`no-invert pointer-events-none fixed left-0 top-0 z-[300] -translate-x-1/2 -translate-y-1/2 rounded-full ${
            settings.cursor === "large"
              ? "h-6 w-6 border-2 border-gold bg-gold/30"
              : "h-8 w-8 border-4 border-black bg-yellow-300 mix-blend-difference"
          }`}
        />
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            type="button"
            aria-label="Open accessibility menu"
            className="group fixed bottom-24 left-8 z-[110] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-navy text-navy-foreground shadow-soft transition-all duration-300 hover:scale-110 hover:bg-copper hover:text-copper-foreground active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Accessibility aria-hidden="true" className="h-5 w-5" />
          </button>
        </DialogTrigger>

        <DialogContent className="max-h-[85vh] overflow-y-auto border-border bg-background p-0 sm:max-w-md">
          <DialogHeader className="border-b border-border px-6 py-5">
            <DialogTitle className="font-display text-xl">Accessibility</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Customize the site for easier reading, hearing and navigation.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 px-6 py-5">
            <Group icon={Languages} title="Language & theme">
              <div className="grid grid-cols-2 gap-2">
                {themeOptions.map((option) => (
                  <Segment
                    key={option.value}
                    active={themeChoice === option.value}
                    onClick={() => setThemeChoice(option.value)}
                    label={option.label}
                  />
                ))}
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Segment active={lang === "en"} onClick={() => setLang("en")} label="English" />
                <Segment active={lang === "sw"} onClick={() => setLang("sw")} label="Kiswahili" />
              </div>
            </Group>

            <Group icon={Contrast} title="Contrast">
              <div className="grid grid-cols-4 gap-2">
                {contrastOptions.map((option) => (
                  <Segment
                    key={option.value}
                    active={settings.contrast === option.value}
                    onClick={() => {
                      update({ contrast: option.value });
                      if (option.value === "dark") setTheme("dark");
                      if (option.value === "light") setTheme("light");
                    }}
                    label={option.label}
                    compact
                  />
                ))}
              </div>
              <Range
                label="Custom contrast"
                value={settings.contrastLevel}
                min={0}
                max={60}
                step={5}
                onChange={(value) => update({ contrastLevel: value })}
                readout={settings.contrastLevel === 0 ? "Subtle" : `${settings.contrastLevel}%`}
              />
            </Group>

            <Group icon={Type} title="Reading">
              <div className="grid grid-cols-4 gap-2">
                {textSizeOptions.map((option) => (
                  <Segment
                    key={option.value}
                    active={settings.textSize === option.value}
                    onClick={() => update({ textSize: option.value })}
                    label={option.label}
                    compact
                  />
                ))}
              </div>
              <Toggle
                label="Dyslexia friendly font"
                checked={settings.dyslexiaFont}
                onChange={(checked) => update({ dyslexiaFont: checked })}
              />
              <Range
                label="Text spacing"
                value={settings.textSpacing}
                min={0}
                max={12}
                step={1}
                onChange={(value) => update({ textSpacing: value })}
                readout={settings.textSpacing === 0 ? "Default" : `+${settings.textSpacing}`}
              />
              <Range
                label="Line height"
                value={settings.lineHeight}
                min={0}
                max={100}
                step={10}
                onChange={(value) => update({ lineHeight: value })}
                readout={(1.5 + settings.lineHeight / 100).toFixed(1)}
              />
            </Group>

            <Group icon={Volume2} title="Read aloud">
              <Toggle
                label="Read links on hover"
                checked={settings.readAloud}
                onChange={(checked) => update({ readAloud: checked })}
              />
              <Range
                label="Volume"
                value={settings.volume}
                min={0}
                max={1}
                step={0.1}
                onChange={(value) => update({ volume: value })}
                readout={`${Math.round(settings.volume * 100)}%`}
                disabled={!settings.readAloud}
              />
              <div className="flex gap-2">
                <ActionButton onClick={readPage} icon={Volume2} label="Read this page" />
                <ActionButton
                  onClick={stopSpeaking}
                  icon={Square}
                  label="Stop"
                  disabled={!speaking}
                />
              </div>
            </Group>

            <Group icon={Eye} title="Interaction">
              <Toggle
                label="Highlight links"
                checked={settings.highlightLinks}
                onChange={(checked) => update({ highlightLinks: checked })}
              />
              <Toggle
                label="Pause animations"
                checked={settings.pauseAnimations}
                onChange={(checked) => update({ pauseAnimations: checked })}
              />
              <Toggle
                label="Hide images"
                checked={settings.hideImages}
                onChange={(checked) => update({ hideImages: checked })}
              />
              <Toggle
                label="Video captions & transcripts"
                checked={settings.captions}
                onChange={(checked) => update({ captions: checked })}
              />
              <Toggle
                label="Auto alt text for images"
                checked={settings.autoAlt}
                onChange={(checked) => update({ autoAlt: checked })}
              />
              <AltTextManager />
              <div>
                <span className="text-xs font-medium text-muted-foreground">Custom cursor</span>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {cursorOptions.map((option) => (
                    <Segment
                      key={option.value}
                      active={settings.cursor === option.value}
                      onClick={() => update({ cursor: option.value })}
                      label={option.label}
                      compact
                    />
                  ))}
                </div>
              </div>
            </Group>

            <button
              type="button"
              onClick={reset}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium transition-all hover:border-destructive/50 hover:text-destructive"
            >
              <RotateCcw aria-hidden="true" className="h-4 w-4" />
              Reset all settings
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={shortcutsOpen} onOpenChange={setShortcutsOpen}>
        <DialogContent className="border-border bg-background sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Keyboard shortcuts</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Navigate the whole site without a mouse.
            </DialogDescription>
          </DialogHeader>
          <ul className="space-y-2">
            {shortcuts.map((shortcut) => (
              <li
                key={shortcut.keys}
                className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card px-3 py-2.5 text-sm"
              >
                <span className="text-foreground/80">{shortcut.label}</span>
                <kbd className="rounded-md border border-border bg-muted px-2 py-1 font-mono text-xs font-semibold">
                  {shortcut.keys}
                </kbd>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setShortcutsOpen(false)}
            className="mt-2 w-full rounded-full border border-border px-4 py-2.5 text-sm font-medium transition-all hover:border-copper/50"
          >
            Close
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
}

function Group({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Link2;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h3 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
        <Icon aria-hidden="true" className="h-4 w-4 text-copper" />
        {title}
      </h3>
      {children}
    </section>
  );
}

function Segment({
  active,
  onClick,
  label,
  compact,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3 transition-all duration-200 ${
        compact ? "py-1.5 text-xs" : "py-2 text-sm"
      } ${
        active
          ? "border-copper bg-copper text-copper-foreground"
          : "border-border bg-card text-foreground hover:border-copper/50"
      }`}
    >
      {label}
    </button>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex w-full items-center justify-between gap-3 rounded-xl border border-border bg-card px-3 py-2.5 text-left text-sm transition-all hover:border-copper/50"
    >
      {label}
      <span
        aria-hidden="true"
        className={`relative h-5 w-9 shrink-0 rounded-full transition-colors duration-200 ${
          checked ? "bg-copper" : "bg-muted"
        }`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform duration-200 ${
            checked ? "translate-x-4.5" : "translate-x-0.5"
          }`}
        />
      </span>
    </button>
  );
}

function Range({
  label,
  value,
  min,
  max,
  step,
  onChange,
  readout,
  disabled,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  readout: string;
  disabled?: boolean;
}) {
  return (
    <div className={disabled ? "opacity-50" : undefined}>
      <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
        <span>{label}</span>
        <span className="font-semibold text-foreground">{readout}</span>
      </div>
      <Slider
        className="mt-2"
        value={[value]}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onValueChange={(next) => onChange(next[0])}
        aria-label={label}
      />
    </div>
  );
}

function ActionButton({
  onClick,
  icon: Icon,
  label,
  disabled,
}: {
  onClick: () => void;
  icon: typeof Square;
  label: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-all hover:border-copper/50 disabled:pointer-events-none disabled:opacity-50"
    >
      <Icon aria-hidden="true" className="h-4 w-4" />
      {label}
    </button>
  );
}
