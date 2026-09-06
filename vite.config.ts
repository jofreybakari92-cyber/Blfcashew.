import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
    output: {
      dir: ".vercel/output",
      serverDir: ".vercel/output/functions/index.func",
      publicDir: ".vercel/output/static",
    },
  },
  vite: {
    server: {
      allowedHosts: ["blfcashews-main.onrender.com", "localhost", "127.0.0.1"],
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
