import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackStartVite } from "@tanstack/react-start/vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    TanStackStartVite({
      server: {
        entry: "src/server.ts",
      },
    }),
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
          'radix': [/@radix-ui/],
          'vendor': ['react', 'react-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1500,
  },
});
