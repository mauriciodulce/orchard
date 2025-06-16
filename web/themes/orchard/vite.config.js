import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const port = 5173;
const origin = `${process.env.DDEV_PRIMARY_URL}:${port}`;

export default defineConfig({
  plugins: [tailwindcss()],
  esbuild: {
  legalComments: 'none'
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: [
        path.resolve(__dirname, "./src/css/main.css"),
        path.resolve(__dirname, "./src/js/main.js")
      ]
    },
  },
  server: {
    host: "0.0.0.0",
    port: port,
    strictPort: true,
    origin: origin,
    cors: {
      origin: /https?:\/\/([A-Za-z0-9\-\.]+)?(\.ddev\.site)(?::\d+)?$/,
    },
  },
});
