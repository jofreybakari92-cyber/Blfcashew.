        import { useForm, ValidationError } from "@formspree/react";
import { useI18n } from "../../lib/i18n";
import { Mail, Phone, Send, Instagram, Facebook, MessageCircle } from "lucide-react";
import contactImg from "@/assets/contact blf.png";

export function Contact() {
  const { t } = useI18n();
  const [state, handleSubmit] = useForm("xlgvlgqg");

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="relative bg-background py-24 text-foreground md:py-32 overflow-hidden"
      >
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <div className="font-display text-4xl font-bold text-gradient-gold">
            {t("contact.successTitle")}
          </div>
          <p className="mt-4 text-foreground/80">{t("contact.successText")}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 rounded-full bg-linear-to-r from-gold to-gold/80 px-6 py-3 text-sm font-bold uppercase tracking-wider text-background"
          >
            {t("contact.sendAnother")}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="relative bg-background py-24 text-foreground md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain opacity-10" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            {t("contact.badge")}
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            {t("contact.title1")} <span className="text-gradient-gold">{t("contact.title2")}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
            {t("contact.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-3xl font-bold">
                <span className="text-gradient-gold">{t("contact.title1")} </span>
                {t("contact.title2")}
                <span className="ml-2">â†’</span>
              </h3>
              <p className="text-foreground/70">
                {t("contact.supportTitle")} {t("contact.supportDesc")}
              </p>
            </div>

            <div className="space-y-4">
              {[
                { key: "contact.supportItem1" },
                { key: "contact.supportItem2" },
                { key: "contact.supportItem3" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-foreground/90">
                  <span className="text-gold font-bold">âœ”</span>
                  <span>{t(item.key)}</span>
                </div>
              ))}
            </div>

            {/* Contact image */}
            <div className="pt-6">
              <div className="card contact-image-card">
                <button
                  className="mail"
                  onClick={() => window.location.href = "mailto:faustergilbert6@gmail.com"}
                  aria-label="Email BLF Cashews"
                  type="button"
                >
                  <Mail className="h-5 w-5" />
                </button>

                <div className="profile-pic">
                  <img src={contactImg} alt="BLF Cashews contact profile" />
                </div>

                <div className="bottom">
                  <div className="content">
                    <span className="name">BLF Cashews</span>
                    <span className="about-me">Premium Tanzanian cashews and trusted service.</span>
                  </div>

                  <div className="bottom-bottom">
                    <div className="social-links-container">
                      <a href="https://www.instagram.com/blf_cashewnuts/" target="_blank" rel="noreferrer" aria-label="Instagram BLF Cashews" className="contact-social contact-instagram">
                        <Instagram className="h-4 w-4" />
                      </a>
                      <a href="#" aria-label="Facebook BLF Cashews" className="contact-social contact-facebook">
                        <Facebook className="h-4 w-4" />
                      </a>
                      <a href="mailto:faustergilbert6@gmail.com" aria-label="Email BLF Cashews" className="contact-social contact-email">
                        <Mail className="h-4 w-4" />
                      </a>
                      <a href="https://wa.me/255760016527" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="contact-social contact-whatsapp">
                        <MessageCircle className="h-4 w-4" />
                      </a>
                    </div>

                    <button
                      type="button"
                      className="button"
                      onClick={() => window.open("https://wa.me/255760016527", "_blank", "noopener,noreferrer")}
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <style>{`
              .contact-image-card {
                width: min(100%, 320px);
                height: 320px;
                background: var(--card);
                border-radius: 32px;
                padding: 3px;
                position: relative;
                box-shadow: 0 30px 40px -25px color-mix(in oklab, var(--gold) 30%, transparent);
                transition: all 0.5s ease-in-out;
                margin: 0 auto;
                border: 1px solid color-mix(in oklab, var(--gold) 28%, transparent);
              }

              .contact-image-card .mail {
                position: absolute;
                right: 1.25rem;
                top: 1rem;
                background: transparent;
                border: none;
                z-index: 4;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                color: var(--gold);
                cursor: pointer;
              }

              .contact-image-card .mail:hover {
                color: var(--primary);
              }

              .contact-image-card .profile-pic {
                position: absolute;
                width: calc(100% - 6px);
                height: calc(100% - 6px);
                top: 3px;
                left: 3px;
                border-radius: 29px;
                z-index: 1;
                overflow: hidden;
                transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
              }

              .contact-image-card .profile-pic img {
                object-fit: cover;
                width: 100%;
                height: 100%;
                transition: all 0.5s ease-in-out 0s;
                display: block;
              }

              .contact-image-card .bottom {
                position: absolute;
                bottom: 3px;
                left: 3px;
                right: 3px;
                background: linear-gradient(180deg, color-mix(in oklab, var(--gold) 84%, white), var(--gold));
                top: 80%;
                border-radius: 29px;
                z-index: 2;
                box-shadow: inset 0 5px 8px rgba(0,0,0,0.08);
                overflow: hidden;
                transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
              }

              .contact-image-card .bottom .content {
                position: absolute;
                bottom: 0;
                left: 1.5rem;
                right: 1.5rem;
                height: 160px;
              }

              .contact-image-card .bottom .content .name {
                display: block;
                font-size: 1.2rem;
                color: white;
                font-weight: 700;
              }

              .contact-image-card .bottom .content .about-me {
                display: block;
                font-size: 0.9rem;
                color: white;
                margin-top: 0.9rem;
                line-height: 1.5;
              }

              .contact-image-card .bottom .bottom-bottom {
                position: absolute;
                bottom: 1rem;
                left: 1.5rem;
                right: 1.5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 0.75rem;
              }

              .contact-image-card .bottom .bottom-bottom .social-links-container {
                display: flex;
                gap: 0.55rem;
                align-items: center;
              }

              .contact-image-card .bottom .bottom-bottom .contact-social {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 2rem;
                height: 2rem;
                border-radius: 9999px;
                color: white;
                box-shadow: 0 8px 18px rgba(0,0,0,0.12);
                transition: transform 0.2s ease, filter 0.2s ease;
              }

              .contact-image-card .bottom .bottom-bottom .contact-social:hover {
                transform: translateY(-2px) scale(1.05);
                filter: brightness(1.08);
              }

              .contact-instagram {
                background: linear-gradient(135deg, #f58529 0%, #dd2a7b 45%, #8134af 70%, #515bd4 100%);
              }

              .contact-facebook {
                background: linear-gradient(135deg, #1877f2, #0a63d8);
              }

              .contact-email {
                background: linear-gradient(135deg, #d946ef, #f97316);
              }

              .contact-whatsapp {
                background: linear-gradient(135deg, #25d366, #128c7e);
              }

              .contact-image-card .bottom .bottom-bottom .button {
                background: white;
                color: var(--primary);
                border: none;
                border-radius: 20px;
                font-size: 0.65rem;
                font-weight: 700;
                padding: 0.45rem 0.75rem;
                box-shadow: 0 6px 12px color-mix(in oklab, var(--gold) 18%, transparent);
                cursor: pointer;
              }

              .contact-image-card .bottom .bottom-bottom .button:hover {
                background: var(--primary);
                color: var(--primary-foreground);
              }

              .contact-image-card:hover {
                border-top-left-radius: 55px;
              }

              .contact-image-card:hover .bottom {
                top: 20%;
                border-radius: 80px 29px 29px 29px;
                transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
              }

              .contact-image-card:hover .profile-pic {
                width: 100px;
                height: 100px;
                top: 10px;
                left: 10px;
                border-radius: 50%;
                z-index: 3;
                border: 7px solid var(--gold);
                box-shadow: 0 8px 14px color-mix(in oklab, var(--gold) 22%, transparent);
                transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
              }

              .contact-image-card:hover .profile-pic img {
                transform: scale(2.5);
                object-position: 0px 25px;
                transition: all 0.5s ease-in-out 0.5s;
              }

              @media (max-width: 640px) {
                .contact-image-card {
                  width: min(100%, 290px);
                  height: 290px;
                }
              }
            `}</style>

            {/* Contact details cards */}
            <div className="grid grid-cols-1 gap-4 pt-6">
              <a
                href="mailto:faustergilbert6@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-gold/20 bg-foreground/5 p-5 transition-all hover:border-gold/60 hover:bg-foreground/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 text-gold">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t("contact.cardEmail")}</div>
                  <div className="text-sm text-foreground/60">faustergilbert6@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+255760016527"
                className="flex items-center gap-4 rounded-2xl border border-gold/20 bg-foreground/5 p-5 transition-all hover:border-gold/60 hover:bg-foreground/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 text-gold">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t("contact.cardPhone")}</div>
                  <div className="text-sm text-foreground/60">+255 760 016 527</div>
                </div>
              </a>

              <a
                href="https://wa.me/255760016527"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-gold/20 bg-foreground/5 p-5 transition-all hover:border-gold/60 hover:bg-foreground/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 text-gold">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t("contact.cardWhatsApp")}</div>
                  <div className="text-sm text-foreground/60">+255 760 016 527</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="rounded-3xl border border-gold/20 bg-foreground/5 p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-foreground/60">
                    {t("contact.formName")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder={t("contact.formNamePlaceholder")}
                    className="mt-2 w-full rounded-xl border border-foreground/10 bg-foreground/10 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                    required
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-foreground/60">
                    {t("contact.formEmail")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("contact.formEmailPlaceholder")}
                    className="mt-2 w-full rounded-xl border border-foreground/10 bg-foreground/10 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium uppercase tracking-wider text-foreground/60">
                  {t("contact.formMessage")}
                </label>
                <textarea
                  name="message"
                  placeholder={t("contact.formMessagePlaceholder")}
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-foreground/10 bg-foreground/10 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all resize-vertical"
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {state.errors && (
                <div className="text-sm text-destructive">{t("contact.errorTitle")}</div>
              )}

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full rounded-full bg-linear-to-r from-gold to-gold/80 px-6 py-4 text-sm font-bold uppercase tracking-wider text-background transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/25 disabled:opacity-50"
              >
                {state.submitting ? t("contact.submitting") : t("contact.submit")}
              </button>

              {/* Arusha Map */}
              <div className="rounded-2xl border border-gold/20 bg-foreground/5 p-1 shadow-inner">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=36.5,-3.5,37.0,-3.2&layer=mapnik&marker=-3.3869,36.6830"
                  width="100%"
                  height="260"
                  className="block w-full rounded-xl overflow-hidden"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Arusha, Tanzania"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

