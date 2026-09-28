import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { CartProvider } from "@/components/cart/CartContext";
import { CartDrawer } from "@/components/cart/Cart";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | BLF Cashews — Premium Tanzanian Cashew Nuts" },
      {
        name: "description",
        content:
          "Get in touch with BLF Cashews. Order premium Tanzanian cashews via WhatsApp, email, or phone. Arusha, Tanzania.",
      },
      { property: "og:title", content: "Contact | BLF Cashews" },
      {
        property: "og:description",
        content: "Get in touch with BLF Cashews — WhatsApp, email, or phone.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar />
        <main id="main" tabIndex={-1} aria-label={t("nav.mainContent")}>
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}