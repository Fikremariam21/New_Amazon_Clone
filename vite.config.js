import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
const isProduction = process.env.NODE_ENV === "production";
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  base: isProduction ? "/New_Amazon_Clone/" : "/",
  // base: "/New_Amazon_Clone/",
})
