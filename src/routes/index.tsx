import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { CartProvider } from "@/components/cart/CartContext";
import { CartDrawer } from "@/components/cart/Cart";
import { ContactFab } from "@/components/WhatsAppButton";
import { BackToTopButton } from "@/components/BackToTopButton";
import { Contact } from "@/components/sections/Contact";
import { AppAvailability } from "@/components/sections/AppAvailability";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { AIRecommendations } from "@/components/ai/AIRecommendations";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BLF Cashews — Premium Tanzanian Cashew Nuts" },
      {
        name: "description",
        content:
          "Pure Tanzanian premium cashews. Natural goodness, unforgettable crunch. Order roasted, salted, honey & raw cashews on WhatsApp.",
      },
      { property: "og:title", content: "BLF Cashews — Premium Tanzanian Cashew Nuts" },
      {
        property: "og:description",
        content: "Natural goodness, unforgettable crunch. Taste happiness in every bite.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useI18n();
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar />
        <main id="main" tabIndex={-1} aria-label={t("nav.mainContent")}>
          <Hero />
          <About />
          <Products />
          <AIRecommendations />
          <WhyUs />
          <Testimonials />
          <FAQ />
          <Contact />
          <AppAvailability />
        </main>
        <Footer />
        <ContactFab />
        <BackToTopButton />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
