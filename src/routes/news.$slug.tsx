import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { CartProvider } from "@/components/cart/CartContext";
import { CartDrawer } from "@/components/cart/Cart";
import { Footer } from "@/components/sections/Footer";
import { NewsDetail } from "@/components/sections/NewsDetail";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/news/$slug")({
  head: () => ({
    meta: [
      { title: "BLF Cashews — News" },
      {
        name: "description",
        content:
          "Read the latest from BLF Cashews — new launches, farm stories, and updates from Tanzania.",
      },
      { property: "og:title", content: "BLF Cashews — News" },
      {
        property: "og:description",
        content: "The latest from BLF Cashews — new launches, farm stories, and updates.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  const { t } = useI18n();
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar />
        <main id="main" tabIndex={-1} aria-label={t("nav.mainContent")}>
          <NewsDetail slug={Route.useParams().slug} />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
