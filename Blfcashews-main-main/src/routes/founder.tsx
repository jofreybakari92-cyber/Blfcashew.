import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { CartProvider } from "@/components/cart/CartContext";
import { Founder } from "@/components/sections/Founder";
import { Footer } from "@/components/sections/Footer";

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
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Founder />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
