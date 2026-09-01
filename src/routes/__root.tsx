import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { I18nProvider, ThemeProvider } from "../lib/i18n";

import appCss from "../styles.css?url";
import faviconUrl from "../assets/blf logo.jpg?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "BLF Cashews" },
      { property: "og:title", content: "BLF Cashews" },
      { name: "twitter:title", content: "BLF Cashews" },
      {
        name: "description",
        content:
          "Premium Tanzanian cashews, naturally delicious. Hand-picked from the rich soils of Tanzania.",
      },
      {
        property: "og:description",
        content:
          "Premium Tanzanian cashews, naturally delicious. Hand-picked from the rich soils of Tanzania.",
      },
      {
        name: "twitter:description",
        content:
          "Premium Tanzanian cashews, naturally delicious. Hand-picked from the rich soils of Tanzania.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: faviconUrl, type: "image/jpeg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsBooting(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <I18nProvider>
          <div className="relative min-h-screen bg-background text-foreground">
            {isBooting && (
              <div className="fixed inset-0 z-[999] flex items-center justify-center bg-background/95 backdrop-blur-sm transition-opacity duration-500">
                <div className="flex flex-col items-center gap-5 text-center">
                  <div className="flex items-center justify-center rounded-full border border-gold/30 bg-gold/10 p-5 shadow-[0_0_40px_rgba(177,130,47,0.25)]">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-gold/20 border-t-gold" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold tracking-[0.18em] text-gold">
                      BLF
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.5em] text-foreground/60">
                      Cashews
                    </div>
                  </div>
                  <div className="text-xs uppercase tracking-[0.35em] text-foreground/50">
                    Loading
                  </div>
                </div>
              </div>
            )}
            <Outlet />
          </div>
        </I18nProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
