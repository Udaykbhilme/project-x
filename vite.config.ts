import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// No more lovable-tagger here
export default defineConfig({
  base: "project-x", // This is IMPORTANT for GitHub Pages
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
