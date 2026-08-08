import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: `base` must exactly match your repo name, with both slashes.
// Repo github.com/devlinmacpherson/prerelease-sim  ->  base: "/prerelease-sim/"
// Deploying to a user site (devlinmacpherson.github.io) instead? Use base: "/"
// Wrong value = blank white page and 404s on the JS bundle.
export default defineConfig({
  plugins: [react()],
  base: "/prerelease-sim/",
});
