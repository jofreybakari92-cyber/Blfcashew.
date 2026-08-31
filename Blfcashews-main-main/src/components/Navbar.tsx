import { useEffect, useState } from "react";
import { CartButton } from "./cart/Cart";
import { useCart } from "./cart/CartContext";
import { useI18n, useTheme } from "../lib/i18n";
import { Sun, Moon, Globe, Menu, X } from "lucide-react";
import blfLogo from "@/assets/blf logo.jpg";

const links = [
  { href: "#about", labelKey: "nav.about" },
  { href: "#products", labelKey: "nav.products" },
  { href: "#why", labelKey: "nav.whyUs" },
  { href: "#reviews", labelKey: "nav.reviews" },
  { href: "#faq", labelKey: "nav.faq" },
  { href: "/founder", labelKey: "nav.founder" },
  { href: "#contact", labelKey: "nav.contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => setLang(lang === "en" ? "sw" : "en");

  return (
    <>
      <nav className="fixed top-4 left-0 flex justify-center z-50 w-screen">
        <div
          className={`${
            scrolled ? "w-[25vw]" : "w-[45vw]"
          } min-w-fit gap-16 flex items-center justify-between bg-amber-900/90 dark:bg-amber-950/90 backdrop-blur-xl border border-amber-800/30 px-6 py-2.5 rounded-full shadow-2xl transition-all duration-300 ease-in-out`}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center bg-amber-50 px-4 py-1.5 rounded-full hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img src={blfLogo} alt="BLF Logo" className="h-6 w-auto" />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  if (l.href.startsWith("#")) {
                    e.preventDefault();
                    document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-sm font-medium text-amber-50/90 transition-colors hover:text-amber-200"
              >
                {t(l.labelKey)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <CartButton />
            <label className="theme-switch" aria-label={t("nav.toggleTheme")}>
              <span className="sun">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <g fill="var(--gold)">
                    <circle r="5" cy="12" cx="12" />
                    <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z" />
                  </g>
                </svg>
              </span>
              <span className="moon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
                  <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" fill="var(--background)" />
                </svg>
              </span>
              <input
                type="checkbox"
                className="input"
                checked={theme === "dark"}
                onChange={toggleTheme}
                aria-label={t("nav.toggleTheme")}
              />
              <span className="slider" />
            </label>
            <button
              onClick={toggleLang}
              aria-label="Switch language"
              className="flex h-10 w-10 items-center justify-center rounded-full text-amber-50/70 transition-colors hover:bg-amber-800/30 hover:text-amber-50"
            >
              <Globe className="h-4 w-4" />
              <span className="ml-1 text-[10px] font-bold uppercase">{lang}</span>
            </button>
            <OrderCta />

            <button
              onClick={() => setOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-amber-50 md:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-18 z-40 border-t border-amber-800/30 bg-amber-950/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  if (l.href.startsWith("#")) {
                    e.preventDefault();
                    document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
                  }
                  setOpen(false);
                }}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-amber-50/80 hover:bg-amber-800/30 hover:text-amber-50"
              >
                {t(l.labelKey)}
              </a>
            ))}
            <OrderCta mobile onClick={() => setOpen(false)} />
          </div>
        </div>
      )}

      <style>{`
        .theme-switch {
          font-size: 17px;
          position: relative;
          display: inline-block;
          width: 64px;
          height: 34px;
          flex-shrink: 0;
        }

        .theme-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .theme-switch .slider {
          position: absolute;
          cursor: pointer;
          inset: 0;
          background: linear-gradient(135deg, var(--gold), color-mix(in oklab, var(--gold) 68%, white));
          transition: 0.4s ease;
          border-radius: 30px;
          box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--primary) 20%, transparent);
        }

        .theme-switch .slider:before {
          position: absolute;
          content: "";
          height: 30px;
          width: 30px;
          border-radius: 20px;
          left: 2px;
          bottom: 2px;
          z-index: 2;
          background: linear-gradient(135deg, var(--background), color-mix(in oklab, var(--background) 80%, var(--gold)));
          transition: 0.4s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        }

        .theme-switch .sun,
        .theme-switch .moon {
          position: absolute;
          width: 24px;
          height: 24px;
          top: 5px;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .theme-switch .sun {
          left: 34px;
        }

        .theme-switch .moon {
          left: 5px;
        }

        .theme-switch .sun svg,
        .theme-switch .moon svg {
          width: 20px;
          height: 20px;
          display: block;
        }

        .theme-switch .sun svg {
          animation: rotate 15s linear infinite;
        }

        .theme-switch .moon svg {
          animation: tilt 5s linear infinite;
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes tilt {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }

        .theme-switch input:checked + .slider {
          background: linear-gradient(135deg, var(--primary), color-mix(in oklab, var(--primary) 78%, var(--gold)));
        }

        .theme-switch input:focus + .slider {
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--gold) 40%, transparent);
        }

        .theme-switch input:checked + .slider:before {
          transform: translateX(30px);
        }
      `}</style>
    </>
  );
}

function OrderCta({ mobile, onClick }: { mobile?: boolean; onClick?: () => void }) {
  const { count, setOpen } = useCart();
  const { t } = useI18n();
  const label = count > 0 ? `${t("nav.viewOrder")} (${count})` : t("nav.orderNow");
  const handle = () => {
    onClick?.();
    if (count > 0) setOpen(true);
    else document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      onClick={handle}
      className={
        mobile
          ? "mt-2 rounded-full bg-amber-700 px-5 py-3 text-center text-sm font-medium text-amber-50"
          : "hidden rounded-full bg-amber-700 px-5 py-2.5 text-sm font-medium text-amber-50 shadow-sm transition-all hover:bg-amber-600 hover:shadow-md md:inline-flex"
      }
    >
      {label}
    </button>
  );
}
