import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Change `base` if deploying to GitHub Pages, e.g. '/repo-name/'
  base: "/",
  plugins: [react()],
});
