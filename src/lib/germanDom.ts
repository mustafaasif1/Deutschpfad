import { onSpeechChange, speak, type SpeechState } from "@/lib/speech";

const SPEAK_SVG =
  '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M3 10v4h4l5 5V5L7 10H3zm13.5 2a4.5 4.5 0 0 0-2.3-3.9v7.8A4.5 4.5 0 0 0 16.5 12zM14 3.2v2.1A7.8 7.8 0 0 1 19.8 12 7.8 7.8 0 0 1 14 18.7v2.1A9.9 9.9 0 0 0 21.9 12 9.9 9.9 0 0 0 14 3.2z"/></svg>';
const STOP_SVG =
  '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6 6h12v12H6z"/></svg>';

let speechUiBound = false;

function syncSpeakButton(btn: HTMLElement, state: SpeechState): void {
  const on = state.speaking && btn.getAttribute("data-speak") === state.text;
  const was = btn.classList.contains("is-playing");
  if (on === was) return;
  btn.classList.toggle("is-playing", on);
  btn.title = on ? "Stop audio" : "Speak German";
  btn.setAttribute("aria-label", on ? "Stop audio" : "Speak German");
  btn.setAttribute("aria-pressed", on ? "true" : "false");
  btn.innerHTML = on ? STOP_SVG : SPEAK_SVG;
}

function bindSpeechUi(): void {
  if (speechUiBound) return;
  speechUiBound = true;
  onSpeechChange((state) => {
    document.querySelectorAll<HTMLElement>(".speak-btn[data-speak]").forEach((btn) => {
      syncSpeakButton(btn, state);
    });
  });
}

export function wrapTables(root: ParentNode | null): void {
  if (!root || !("querySelectorAll" in root)) return;
  root.querySelectorAll("table").forEach((t) => {
    if (t.parentElement && t.parentElement.classList.contains("table-scroll")) return;
    const w = document.createElement("div");
    w.className = "table-scroll";
    t.parentNode?.insertBefore(w, t);
    w.appendChild(t);
  });
}

export function enhanceGerman(root: ParentNode | null): void {
  if (!root) return;
  bindSpeechUi();
  root.querySelectorAll(".de").forEach((el) => {
    const node = el as HTMLElement;
    node.setAttribute("lang", "de");
    if (node.closest("button, a.card, a[href^='/'], a[href^='#']")) return;
    if (node.closest(".speak-wrap") && node.parentElement?.classList.contains("speak-wrap") && node.parentElement.querySelector(".speak-btn")) return;
    if (node.querySelector(".speak-btn")) return;
    const text = (node.textContent || "").replace(/\s+/g, " ").trim();
    if (!text || text.length < 2 || text.length > 400) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "speak-btn";
    btn.setAttribute("data-speak", text);
    btn.title = "Speak German";
    btn.setAttribute("aria-label", "Speak German");
    btn.setAttribute("aria-pressed", "false");
    btn.innerHTML = SPEAK_SVG;
    const block = /^(DIV|P|LI|TD|H1|H2|H3|DT|DD)$/.test(node.tagName);
    if (block) {
      if (node.querySelector(":scope > .speak-btn")) return;
      node.appendChild(btn);
    } else {
      const wrap = document.createElement("span");
      wrap.className = "speak-wrap";
      node.parentNode?.insertBefore(wrap, node);
      wrap.appendChild(node);
      wrap.appendChild(btn);
    }
  });
  root.querySelectorAll("[data-speak]").forEach((b) => {
    const btn = b as HTMLElement;
    if (btn.getAttribute("data-speak-bound") === "1") return;
    btn.setAttribute("data-speak-bound", "1");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const t = btn.getAttribute("data-speak");
      if (t) void speak(t);
    });
  });
  wrapTables(root);
}
