import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      jsxImportSource: "react",
    }),
    tsConfigPaths(),
  ],
  server: {
    middlewareMode: false,
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
