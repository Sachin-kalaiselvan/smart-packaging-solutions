import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
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
    rollupOptions: {
      output: {
        manualChunks: {
          radix: [/@radix-ui/],
          vendor: ["react", "react-dom"],
        },
      },
    },
    chunkSizeWarningLimit: 1500,
  },
});
