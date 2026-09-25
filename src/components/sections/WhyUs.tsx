import { useRef } from "react";
import {
  Heart,
  Brain,
  Shield,
  Dumbbell,
  Moon,
  Sparkles,
  Leaf,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useI18n } from "../../lib/i18n";
import { AccentRule } from "../AccentRule";

const benefits = [
  {
    icon: Heart,
    titleKey: "whyUs.benefit1Title",
    descKey: "whyUs.benefit1Desc",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    icon: Brain,
    titleKey: "whyUs.benefit2Title",
    descKey: "whyUs.benefit2Desc",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Shield,
    titleKey: "whyUs.benefit3Title",
    descKey: "whyUs.benefit3Desc",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Dumbbell,
    titleKey: "whyUs.benefit4Title",
    descKey: "whyUs.benefit4Desc",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Moon,
    titleKey: "whyUs.benefit5Title",
    descKey: "whyUs.benefit5Desc",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
];

const promiseStats = [
  { key: "whyUs.stat1", icon: Leaf },
  { key: "whyUs.stat2", icon: Sparkles },
  { key: "whyUs.stat3", icon: Sparkles },
  { key: "whyUs.stat4", icon: Leaf },
];

export function WhyUs() {
  const { t } = useI18n();
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-snap-item]");
    const step = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section id="why" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            {t("whyUs.badge")}
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
            {t("whyUs.title")}{" "}
            <span className="text-gradient-gold">{t("whyUs.titleAccent")}</span>
          </h2>
          <div className="mt-6 flex justify-center">
            <AccentRule className="max-w-[16rem]" />
          </div>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("whyUs.subtitle")}
          </p>
        </div>

        <div className="relative mt-16">
          <div
            ref={trackRef}
            aria-label={t("whyUs.benefitsTrack")}
            className="snap-track lg:grid lg:grid-cols-5 lg:gap-6"
          >
            {benefits.map((b, idx) => (
              <div
                key={b.titleKey}
                data-snap-item
                className="group card-lift w-[16rem] rounded-2xl border border-border bg-card p-6 lg:w-auto lg:animate-slide-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${b.bg} ${b.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <b.icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{t(b.titleKey)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(b.descKey)}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous benefits"
            className="absolute -left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition-all hover:scale-110 hover:border-gold/50 active:scale-95 lg:flex"
          >
            <ChevronLeft aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next benefits"
            className="absolute -right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition-all hover:scale-110 hover:border-gold/50 active:scale-95 lg:flex"
          >
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="animate-slide-in-left">
            <div className="relative overflow-hidden rounded-2rem border border-border shadow-soft">
              <div className="aspect-4/3 bg-linear-to-br from-primary/20 via-gold/10 to-primary/20 flex flex-col items-center justify-center p-8">
                <div className="text-7xl mb-3 drop-shadow-sm">🌰</div>
                <div className="font-display text-2xl font-bold text-primary">
                  100% Tanzanian
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Grown with love, harvested with care
                </div>

                <div className="mt-8 grid w-full max-w-xs grid-cols-2 gap-3">
                  {promiseStats.map((s) => (
                    <div
                      key={s.key}
                      className="flex items-center gap-2 rounded-xl border border-border/60 bg-card/80 px-3 py-2 text-xs font-medium text-foreground"
                    >
                      <s.icon className="h-3.5 w-3.5 text-gold" />
                      <span>{t(s.key)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center animate-slide-in-right">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              {t("whyUs.promiseBadge")}
            </div>
            <h3 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
              {t("whyUs.storyTitle")}
            </h3>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>{t("whyUs.storyText1")}</p>
              <p>{t("whyUs.storyText2")}</p>
            </div>

            <blockquote className="mt-8 rounded-2xl border-l-4 border-gold bg-gold/5 px-5 py-4 font-display text-base italic leading-relaxed text-foreground/90 md:text-lg">
              “{t("whyUs.promise")}”
            </blockquote>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "whyUs.benefit1Title",
                "whyUs.benefit2Title",
                "whyUs.benefit3Title",
                "whyUs.benefit4Title",
                "whyUs.benefit5Title",
              ].map((key) => (
                <span
                  key={key}
                  className="rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold"
                >
                  ✓ {t(key)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}