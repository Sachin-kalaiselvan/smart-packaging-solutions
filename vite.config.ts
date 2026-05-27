import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  root: "src",
  plugins: [
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
  ssr: {
    noExternal: ["leaflet"],
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1500,
  },
});
