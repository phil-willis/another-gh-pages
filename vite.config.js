import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/another-gh-pages/",
  plugins: [react()],
  build: {
    outDir: "build",
  },
});
