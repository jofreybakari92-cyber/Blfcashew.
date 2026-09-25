import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useI18n } from "../lib/i18n";

export function BackToTopButton() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t("contact.backToTop")}
      className={`group fixed left-8 bottom-8 z-[100] flex h-[50px] w-[50px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary text-primary-foreground shadow-soft ring-4 ring-primary/25 transition-all duration-300 ease-out hover:w-[140px] hover:rounded-[50px] hover:bg-gold hover:text-gold-foreground hover:ring-gold/40 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="pointer-events-none flex flex-col items-center">
        <ArrowUp
          className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-[200%]"
          strokeWidth={3}
          aria-hidden="true"
        />
        <span className="mt-8 whitespace-nowrap text-[13px] font-semibold transition-transform duration-300 group-hover:translate-y-[-32px]">
          {t("contact.backToTop")}
        </span>
      </span>
    </button>
  );
}
