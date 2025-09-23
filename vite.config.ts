import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allows access via LAN/public tunnels
    allowedHosts: [
      "damianportfolio.loca.lt", // your chosen LocalTunnel subdomain
    ],
  },
});
