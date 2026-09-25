import { useCallback, useEffect } from "react";

export interface Shortcut {
  keys: string;
  label: string;
}

export const shortcuts: Shortcut[] = [
  { keys: "J", label: "Move to the next section" },
  { keys: "K", label: "Move to the previous section" },
  { keys: "A", label: "Open the accessibility menu" },
  { keys: "?", label: "Show this shortcut list" },
  { keys: "Esc", label: "Close menus and dialogs" },
  { keys: "Tab", label: "Move focus forward, Shift+Tab backward" },
];

const SECTION_IDS = ["top", "about", "products", "why", "reviews", "faq", "contact"];

function isTypingTarget(target: EventTarget | null) {
  const el = target as HTMLElement | null;
  if (!el) return false;
  const tag = el.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
}

function focusSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return false;
  section.scrollIntoView({ behavior: "smooth", block: "start" });
  const target = section.querySelector<HTMLElement>("h1, h2, h3") ?? section;
  if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
  target.focus({ preventScroll: true });
  return true;
}

export function useKeyboardNavigation(onOpenA11y: () => void, onOpenShortcuts: () => void) {
  const move = useCallback((direction: 1 | -1) => {
    const scrollY = window.scrollY + 80;
    const current = [...SECTION_IDS].reverse().find((id) => {
      const el = document.getElementById(id);
      if (!el) return false;
      return el.getBoundingClientRect().top + window.scrollY <= scrollY;
    });
    const currentIndex = current ? SECTION_IDS.indexOf(current) : -1;
    const nextIndex = Math.min(Math.max(currentIndex + direction, 0), SECTION_IDS.length - 1);
    const nextId = SECTION_IDS[nextIndex];
    if (nextId && nextId !== current) focusSection(nextId);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (isTypingTarget(event.target)) return;

      if (event.key === "j" || event.key === "J") {
        event.preventDefault();
        move(1);
        return;
      }
      if (event.key === "k" || event.key === "K") {
        event.preventDefault();
        move(-1);
        return;
      }
      if (event.key === "a" || event.key === "A") {
        event.preventDefault();
        onOpenA11y();
        return;
      }
      if (event.key === "?") {
        event.preventDefault();
        onOpenShortcuts();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [move, onOpenA11y, onOpenShortcuts]);
}
