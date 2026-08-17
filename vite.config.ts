import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vitest/config";
import react from "@vitejs/plugin-react";

const root = path.dirname(fileURLToPath(import.meta.url));
const EMPTY_LEGAL = "window.SITE_LEGAL = window.SITE_LEGAL || {};\n";

function legalConfigFallback(): Plugin {
  return {
    name: "legal-config-fallback",
    transformIndexHtml(html) {
      if (html.includes('src="/legal-config.js"')) return html;
      return html.replace("</head>", '    <script src="/legal-config.js"></script>\n  </head>');
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0];
        if (url !== "/legal-config.js") {
          next();
          return;
        }
        const file = path.resolve(root, "public/legal-config.js");
        if (fs.existsSync(file)) {
          next();
          return;
        }
        res.setHeader("Content-Type", "application/javascript; charset=utf-8");
        res.end(EMPTY_LEGAL);
      });
    },
    closeBundle() {
      const dest = path.resolve(root, "dist/legal-config.js");
      if (!fs.existsSync(dest)) {
        fs.writeFileSync(dest, EMPTY_LEGAL);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), legalConfigFallback()],
  resolve: {
    alias: {
      "@": path.resolve(root, "src"),
    },
  },
  server: {
    port: 8765,
  },
  preview: {
    port: 8765,
  },
  test: {
    environment: "happy-dom",
    include: ["src/**/*.test.ts"],
  },
});
