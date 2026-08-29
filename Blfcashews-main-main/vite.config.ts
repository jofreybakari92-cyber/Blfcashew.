import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
  },
  vite: {
    server: {
      host: "0.0.0.0",
      allowedHosts: ["blfcashews-main.onrender.com", "localhost", "127.0.0.1"],
    },
    resolve: {
      alias: {
        "node:events": "/src/compat/events.js",
      },
    },
    worker: {
      format: "es",
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes("?worker")) {
              return "worker";
            }
          },
        },
      },
    },
  },
});
