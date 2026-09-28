import { Bell, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "../../lib/i18n";
import { AccentRule } from "../AccentRule";
import { newsItems } from "./newsData";

export function NewsDetail({ slug }: { slug: string }) {
  const { t } = useI18n();
  const item = newsItems.find((n) => n.slug === slug);

  if (!item) {
    return (
      <section className="relative bg-background py-24 text-foreground md:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h1 className="font-display text-4xl font-bold">{t("news.notFoundTitle")}</h1>
          <p className="mt-4 text-foreground/70">{t("news.notFoundText")}</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-background"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("news.backToNews")}
          </Link>
        </div>
      </section>
    );
  }

  const idx = newsItems.indexOf(item);
  const prev = newsItems[idx - 1];
  const next = newsItems[idx + 1];

  return (
    <article className="relative bg-background py-24 text-foreground md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("news.backToNews")}
        </Link>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
          <Bell className="h-3 w-3" />
          {item.tag}
        </div>
        <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
          {item.title}
        </h1>
        <div className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          {item.date}
        </div>
        <AccentRule className="mt-6 max-w-[16rem]" />

        <div className="mt-8 overflow-hidden rounded-3xl border border-border">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-10 space-y-4 text-base leading-relaxed text-foreground/85">
          <p>{item.summary}</p>
          <p>
            BLF Cashews is proud to bring you this update. We work directly with farming families
            across Mtwara and Lindi, ensuring fair prices and peak-ripeness at harvest. Every batch
            is hand-picked and naturally processed for exceptional taste and quality.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <div>
            {prev && (
              <Link
                to="/news/$slug"
                params={{ slug: prev.slug }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-gold"
              >
                <ArrowLeft className="h-4 w-4" />
                {prev.title}
              </Link>
            )}
          </div>
          <div>
            {next && (
              <Link
                to="/news/$slug"
                params={{ slug: next.slug }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold"
              >
                {next.title}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
