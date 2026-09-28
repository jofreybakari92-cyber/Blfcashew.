import { Bell, Calendar, ArrowRight, Newspaper } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "../../lib/i18n";
import { AccentRule } from "../AccentRule";
import { newsItems } from "./newsData";

function NewsCard({ n, idx }: { n: (typeof newsItems)[0]; idx: number }) {
  return (
    <article
      className="group card-lift overflow-hidden rounded-3xl border border-border bg-card animate-slide-in-up"
      style={{ animationDelay: `${idx * 0.12}s` }}
    >
      <div className="relative aspect-16/10 overflow-hidden">
        <img
          src={n.image}
          alt={n.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gold/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy">
          <Bell className="h-3 w-3" />
          {n.tag}
        </div>
        <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
          <Calendar className="h-3 w-3" />
          {n.date}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
          {n.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{n.summary}</p>
        <Link
          to="/news/$slug"
          params={{ slug: n.slug }}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-gold"
        >
          Read more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

export function News() {
  const { t } = useI18n();

  return (
    <section
      id="news"
      className="relative bg-secondary/30 py-24 md:py-32"
      aria-labelledby="news-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-primary">
            <Newspaper className="h-3.5 w-3.5" />
            {t("news.badge")}
          </div>
          <h2
            id="news-title"
            className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl"
          >
            {t("news.title")} <span className="text-gradient-gold">{t("news.titleAccent")}</span>
          </h2>
          <div className="mt-6 flex justify-center">
            <AccentRule className="max-w-[16rem]" />
          </div>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("news.subtitle")}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {newsItems.map((n, idx) => (
            <NewsCard key={n.title} n={n} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
