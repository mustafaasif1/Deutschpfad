import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/source-sans-3/latin-400.css";
import "@fontsource/source-sans-3/latin-400-italic.css";
import "@fontsource/source-sans-3/latin-600.css";
import "@fontsource/source-sans-3/latin-700.css";
import "@fontsource/source-serif-4/latin-500.css";
import "@fontsource/source-serif-4/latin-500-italic.css";
import "@fontsource/source-serif-4/latin-600.css";
import "@fontsource/fraunces/latin-600.css";
import "@fontsource/fraunces/latin-700.css";
import "@/styles/app.css";
import App from "@/App";
import { migrateLegacyLocation } from "@/lib/href";

migrateLegacyLocation();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
