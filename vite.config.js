import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ruslan-pastika-portfolio/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
