import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { waLink } from "../WhatsAppButton";
import logoImg from "@/assets/blf logo.jpg";
import { useI18n } from "../../lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer id="contact" className="relative overflow-hidden bg-foreground text-background">
      <div className="stars-layer" aria-hidden="true">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <img
                src={logoImg}
                alt="BLF Cashews"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="leading-none">
                <div className="font-display text-lg font-bold">BLF</div>
                <div className="text-[10px] tracking-[0.25em] opacity-60">CASHEWS</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed opacity-70">
              {t("footer.desc")} 🍃
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { i: Instagram, href: "https://www.instagram.com/blf_cashewnuts/" },
                { i: Facebook, href: "#" },
                { i: Mail, href: "mailto:faustergilbert6@gmail.com" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-gold hover:text-gold-foreground"
                >
                  <s.i className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-bold">{t("footer.explore")}</h4>
            <ul className="mt-4 space-y-2 text-sm opacity-70">
              {[
                { label: t("footer.about"), href: "#about" },
                { label: t("footer.products"), href: "#products" },
                { label: t("footer.whyUs"), href: "#why" },
                { label: t("footer.reviews"), href: "#reviews" },
                { label: t("footer.faq"), href: "#faq" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-bold">{t("footer.getInTouch")}</h4>
            <ul className="mt-4 space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  +255 760 016 527
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href="mailto:faustergilbert6@gmail.com" className="hover:text-gold">
                  faustergilbert6@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>Arusha,Njiro Tanzania</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 text-xs opacity-60 md:flex-row">
          <p>
            © {new Date().getFullYear()} BLF Cashews. {t("footer.rights")}
          </p>
          <p>
            {t("footer.madeWith")} 🍃 {t("footer.tanzania")}
          </p>
        </div>
      </div>

      <style>{`
        .stars-layer {
          position: absolute;
          inset: 0;
          overflow: hidden;
          opacity: 0.5;
          pointer-events: none;
        }

        #stars,
        #stars2,
        #stars3 {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
        }

        #stars {
          background: transparent;
          background-image: radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.9), transparent);
          background-size: 250px 250px;
          animation: stars 60s linear infinite;
        }

        #stars2 {
          background: transparent;
          background-image: radial-gradient(2px 2px at 40% 80%, rgba(255,255,255,0.6), transparent);
          background-size: 300px 300px;
          animation: stars 90s linear infinite;
        }

        #stars3 {
          background: transparent;
          background-image: radial-gradient(1.5px 1.5px at 70% 40%, rgba(255,255,255,0.7), transparent);
          background-size: 350px 350px;
          animation: stars 120s linear infinite;
        }

        @keyframes stars {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(20px);
          }
        }
      `}</style>
    </footer>
  );
}
