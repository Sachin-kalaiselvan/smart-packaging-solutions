import { defineConfig } from "@tanstack/react-start/config";

export default defineConfig({
  vite: {
    ssr: {
      external: ["@tanstack/react-start"],
    },
  },
});
