import { useEffect, useState } from "react";
import { Globe, Smartphone, Link2, Check, MessageCircle, Share2 } from "lucide-react";
import { useI18n } from "../../lib/i18n";
import { waLink } from "../WhatsAppButton";
import { AccentRule } from "../AccentRule";

export function AccessGuide() {
  const { t } = useI18n();
  const [origin, setOrigin] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const copyLink = () => {
    const url = origin || window.location.href;
    navigator.clipboard?.writeText(url).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      () => setCopied(false),
    );
  };

  const steps = ["access.step1", "access.step2", "access.step3"];

  return (
    <section
      id="access"
      aria-labelledby="access-title"
      className="relative overflow-hidden border-t border-border bg-secondary/30 py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            {t("access.badge")}
          </div>

          <h2
            id="access-title"
            className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl"
          >
            {t("access.title")}{" "}
            <span className="text-gradient-gold">{t("access.titleAccent")}</span>
          </h2>

          <div className="mt-6 flex justify-center">
            <AccentRule className="max-w-[14rem]" />
          </div>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {t("access.subtitle")}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="card-lift rounded-3xl border border-border bg-card p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 text-navy">
                <Globe aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-bold">{t("access.webTitle")}</h3>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t("access.webDesc")}
            </p>

            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {t("access.webPoint1")}
              </li>
              <li className="flex items-start gap-2">
                <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {t("access.webPoint2")}
              </li>
              <li className="flex items-start gap-2">
                <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {t("access.webPoint3")}
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground transition-all hover:scale-[1.03] hover:bg-copper hover:text-copper-foreground active:scale-95"
              >
                <Link2 aria-hidden="true" className="h-4 w-4" />
                {t("access.openSite")}
              </a>
              <button
                type="button"
                onClick={copyLink}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold transition-all hover:border-copper/60 hover:text-copper active:scale-95"
              >
                {copied ? (
                  <Check aria-hidden="true" className="h-4 w-4" />
                ) : (
                  <Share2 aria-hidden="true" className="h-4 w-4" />
                )}
                {copied ? t("access.copied") : t("access.copyLink")}
              </button>
            </div>

            {origin && (
              <p className="mt-3 truncate text-xs text-muted-foreground" title={origin}>
                {origin}
              </p>
            )}
          </article>

          <article className="card-lift rounded-3xl border border-border bg-card p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper/15 text-copper">
                <Smartphone aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-bold">{t("access.mobileTitle")}</h3>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t("access.mobileDesc")}
            </p>

            <ol className="mt-4 space-y-3 text-sm text-foreground/80">
              {steps.map((key, index) => (
                <li key={key} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-navy-foreground">
                    {index + 1}
                  </span>
                  {t(key)}
                </li>
              ))}
            </ol>

            <a
              href={waLink("Hello BLF Cashews! I found you on the website and want to order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.03] hover:brightness-110 active:scale-95"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              {t("access.whatsappCta")}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
