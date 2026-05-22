import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tanstackStart from "@tanstack/react-start/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: {
        entry: "src/server.ts",
      },
    }),
    tailwindcss(),
    react({
      jsxImportSource: "react",
    }),
    tsConfigPaths(),
  ],
  server: {
    middlewareMode: false,
    hmr: {
      protocol: "ws",
      host: "localhost",
      port: 5173,
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    target: "ES2022",
  },
});
