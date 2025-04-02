import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import process from 'process';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  tailwindcss()
],
define: {
  'process.env': process.env,
},
})
