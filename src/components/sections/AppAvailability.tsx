import webMockup from "@/assets/web-mockup.webp";
import mobileMockup from "@/assets/mobile-mockup.webp";
import { useI18n } from "../../lib/i18n";
import { waLink } from "../WhatsAppButton";

export function AppAvailability() {
  const { t } = useI18n();
  const notifyLink = waLink("Hello BLF Cashews! Tell me when the mobile app is available.");

  return (
    <section
      id="app"
      aria-labelledby="app-title"
      className="relative overflow-hidden bg-primary px-6 py-12 text-primary-foreground sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-20 -top-40 h-[700px] w-[700px] rounded-full border border-primary-foreground/10" />
        <div className="absolute right-20 top-20 h-[500px] w-[500px] rounded-full border border-primary-foreground/10" />

        <div className="absolute left-10 top-16 text-2xl text-primary-foreground/10">+</div>
        <div className="absolute left-24 top-24 text-xl text-primary-foreground/10">+</div>
        <div className="absolute left-[17%] top-4 h-4 w-4 rounded-full border-2 border-primary-foreground/10" />
        <div className="absolute left-[8%] top-[40%] h-4 w-4 rounded-full border-2 border-primary-foreground/10" />
        <div className="absolute left-[20%] bottom-[20%] text-2xl text-primary-foreground/10">
          +
        </div>

        <div className="absolute left-0 bottom-0 h-32 w-64 opacity-30">
          <div className="grid grid-cols-8 gap-4">
            {Array.from({ length: 48 }).map((_, index) => (
              <span key={index} className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[500px] max-w-[1500px] items-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-20 max-w-[700px]">
            <h2
              id="app-title"
              className="font-display text-4xl font-bold leading-[1.15] sm:text-5xl lg:text-[52px]"
            >
              {t("app.title")} {t("app.titleAccent")}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
              {t("app.subtitle")}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href={notifyLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("app.appleLabel")}
                className="flex h-[74px] w-full max-w-[280px] items-center rounded-[24px] bg-black px-5 transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:h-[102px] sm:max-w-[385px] sm:rounded-[30px] sm:px-7"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] bg-[#12b9ef] sm:h-16 sm:w-16">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-8 w-8 fill-white sm:h-11 sm:w-11"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.01a4.83 4.83 0 0 1 4.08-2.48c1.28-.02 2.5.87 3.27.87.77 0 2.21-1.08 3.72-.92.63.03 2.4.26 3.54 1.98-.09.06-2.12 1.23-2.1 3.68.03 2.93 2.57 3.9 2.6 3.91-.02.07-.4 1.36-1.1 2.45ZM14 3.5c.69-.83 1.15-2 1.02-3.16-1 .04-2.2.67-2.92 1.5-.64.74-1.2 1.92-1.05 3.04 1.11.09 2.25-.56 2.95-1.38Z" />
                  </svg>
                </span>

                <span className="ml-4 leading-none sm:ml-5">
                  <span className="block text-[13px] text-white sm:text-[19px]">
                    {t("app.availableOn")}
                  </span>
                  <span className="mt-1 block text-[22px] font-medium text-white sm:text-[31px]">
                    {t("app.appleStore")}
                  </span>
                </span>
              </a>

              <a
                href={notifyLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("app.playLabel")}
                className="flex h-[74px] w-full max-w-[280px] items-center rounded-[24px] bg-black px-5 transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:h-[102px] sm:max-w-[385px] sm:rounded-[30px] sm:px-7"
              >
                <span className="flex shrink-0 items-center justify-center">
                  <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12 sm:h-16 sm:w-16">
                    <path
                      fill="#4285F4"
                      d="M6 4.8v38.4c0 1.1.9 2 2 2 .4 0 .8-.1 1.1-.3L30 24 9.1 3.1C8.7 2.9 8.4 2.8 8 2.8c-1.1 0-2 .9-2 2Z"
                    />
                    <path
                      fill="#34A853"
                      d="m30 24 6.7 6.7-21.4 12.2c-.5.3-1 .4-1.5.4-.8 0-1.5-.4-2-1L30 24Z"
                    />
                    <path
                      fill="#FBBC04"
                      d="m30 24 6.7-6.7-21.4-12.2c-.5-.3-1-.4-1.5-.4-.8 0-1.5.4-2 1L30 24Z"
                    />
                    <path
                      fill="#EA4335"
                      d="m36.7 17.3 4.8 2.7c1.4.8 1.4 2.8 0 3.6l-4.8 2.7L30 24l6.7-6.7Z"
                    />
                  </svg>
                </span>

                <span className="ml-4 leading-none sm:ml-5">
                  <span className="block text-[13px] font-medium text-white sm:text-[18px]">
                    {t("app.getItOn")}
                  </span>
                  <span className="mt-1 block text-[22px] font-medium text-white sm:text-[31px]">
                    {t("app.playStore")}
                  </span>
                </span>
              </a>
            </div>

            <p className="mt-4 text-xs text-primary-foreground/60">{t("app.availableNote")}</p>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[620px]">
            <div className="relative z-10 w-[94%] max-w-[850px] sm:w-[92%]">
              <img
                src={webMockup}
                width={1560}
                height={863}
                alt={t("app.webAlt")}
                loading="lazy"
                decoding="async"
                className="w-full drop-shadow-2xl"
              />
            </div>

            <img
              src={mobileMockup}
              width={576}
              height={1181}
              alt={t("app.mobileAlt")}
              loading="lazy"
              decoding="async"
              className="absolute right-0 bottom-0 z-30 w-[130px] rotate-[1deg] drop-shadow-2xl sm:right-[-5px] sm:top-[18%] sm:bottom-auto sm:w-[175px] lg:right-[-15px] lg:w-[205px]"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gold" aria-hidden="true" />
    </section>
  );
}
