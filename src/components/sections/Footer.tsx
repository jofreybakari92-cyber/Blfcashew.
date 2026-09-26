import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ExternalLink,
  Sprout,
} from "lucide-react";
import { waLink } from "../WhatsAppButton";
import logoImg from "@/assets/blf logo.jpg";
import { useI18n } from "../../lib/i18n";

const relatedLinks = [
  {
    name: "Ministry of Agriculture (Kilimo)",
    href: "https://www.kilimo.go.tz/",
    note: "Tanzania",
  },
  {
    name: "Tanzania Agricultural Research Institute (TARI)",
    href: "https://www.tari.go.tz/",
    note: "TARI",
  },
  {
    name: "Tanzania Bureau of Standards (TBS)",
    href: "https://www.tbs.go.tz/",
    note: "TBS",
  },
  {
    name: "Sokoine University of Agriculture (SUA)",
    href: "https://sua.ac.tz/",
    note: "SUA",
  },
  {
    name: "World Food Programme / OCHA",
    href: "https://www.unocha.org/",
    note: "UN",
  },
  {
    name: "World Health Organization (WHO)",
    href: "https://www.who.int/",
    note: "WHO",
  },
  {
    name: "World Bank Agriculture",
    href: "https://www.worldbank.org/",
    note: "World Bank",
  },
  {
    name: "Mfumo wa Kielektroniki wa Kutuma, Kupokea na Kufuatilia Malalamiko, Mapendekezo, Maulizo na Pongezi (e-mrejesho)",
    href: "https://emrejesho.gov.go.tz/",
    note: "e-mrejesho",
  },
  {
    name: "Huduma za Serikali kwa DijITALI",
    href: "https://huduma.serikali.go.tz/",
    note: "Serikali",
  },
];

export function Footer() {
  const { t } = useI18n();

  return (
    <footer id="site-footer" className="relative overflow-hidden bg-foreground text-background">
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
                {
                  i: Instagram,
                  href: "https://www.instagram.com/blf_cashewnuts/",
                  className: "social-instagram",
                },
                { i: Facebook, href: "#", className: "social-facebook" },
                { i: Mail, href: "mailto:faustergilbert6@gmail.com", className: "social-email" },
                { i: MessageCircle, href: waLink("Hello BLF Cashews, I would like to order."), className: "social-whatsapp" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link ${s.className}`}
                  aria-label="Social media link"
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

        <section
          aria-labelledby="footer-related-title"
          className="mt-16 rounded-3xl border border-background/10 bg-background/5 p-6 md:p-8"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h4
                id="footer-related-title"
                className="flex items-center gap-2 font-display text-lg font-bold"
              >
                <Sprout aria-hidden="true" className="h-5 w-5 text-gold" />
                {t("footer.relatedTitle")}
              </h4>
              <p className="mt-2 max-w-2xl text-sm opacity-70">{t("footer.relatedDesc")}</p>
            </div>
            <span className="w-fit rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold">
              {t("footer.relatedBadge")}
            </span>
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-start justify-between gap-3 rounded-2xl border border-background/10 bg-background/5 px-4 py-3 text-left transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-background/10"
                >
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold leading-snug group-hover:text-gold">
                      {link.name}
                    </span>
                    <span className="mt-1 block truncate text-xs opacity-60">{link.note}</span>
                  </span>
                  <ExternalLink
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 opacity-50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold group-hover:opacity-100"
                  />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

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
        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 9999px;
          color: white;
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
        }

        .social-link:hover {
          transform: translateY(-2px) scale(1.04);
          filter: brightness(1.08);
        }

        .social-instagram {
          background: linear-gradient(135deg, #f58529 0%, #dd2a7b 45%, #8134af 70%, #515bd4 100%);
        }

        .social-facebook {
          background: linear-gradient(135deg, #1877f2, #0a63d8);
        }

        .social-email {
          background: linear-gradient(135deg, #d946ef, #f97316);
        }

        .social-whatsapp {
          background: linear-gradient(135deg, #25d366, #128c7e);
        }

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
