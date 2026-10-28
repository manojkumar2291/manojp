import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Vite exposes only explicitly opted-in VITE_ variables to the browser.
export default defineConfig({ plugins: [react(), tailwindcss()] });
