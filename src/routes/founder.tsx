import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { CartProvider } from "@/components/cart/CartContext";
import { CartDrawer } from "@/components/cart/Cart";
import { Founder } from "@/components/sections/Founder";
import { Footer } from "@/components/sections/Footer";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Founder | BLF Cashews — Premium Tanzanian Cashew Nuts" },
      {
        name: "description",
        content:
          "Meet Ms Niexy, founder of BLF Cashews. Learn about our vision, mission, and commitment to premium quality cashews.",
      },
      { property: "og:title", content: "Founder | BLF Cashews" },
      {
        property: "og:description",
        content: "Meet the founder and learn about BLF Cashews' vision and mission.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: FounderPage,
});

function FounderPage() {
  const { t } = useI18n();
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar />
        <main id="main" tabIndex={-1} aria-label={t("nav.mainContent")}>
          <Founder />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
