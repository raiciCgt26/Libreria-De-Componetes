import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwind()],
  resolve: {
    alias: {
      // 2. Define que '@' apunta a la carpeta 'src'
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
