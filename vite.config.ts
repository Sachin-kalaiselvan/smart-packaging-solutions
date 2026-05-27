import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  root: "src",
  plugins: [
    tanstackStart(),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
  ssr: {
    noExternal: ["leaflet"],
  },
  build: {
    outDir: "../dist/client",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1500,
  },
});
