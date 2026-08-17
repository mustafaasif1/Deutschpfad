import { useLayoutEffect, useRef, type ReactNode } from "react";
import { speak } from "@/lib/speech";
import { enhanceGerman } from "@/lib/germanDom";
import { useSpeechState } from "@/hooks/useUi";

const SPEAK_PATH =
  "M3 10v4h4l5 5V5L7 10H3zm13.5 2a4.5 4.5 0 0 0-2.3-3.9v7.8A4.5 4.5 0 0 0 16.5 12zM14 3.2v2.1A7.8 7.8 0 0 1 19.8 12 7.8 7.8 0 0 1 14 18.7v2.1A9.9 9.9 0 0 0 21.9 12 9.9 9.9 0 0 0 14 3.2z";
const STOP_PATH = "M6 6h12v12H6z";

export function SpeakButton({ text }: { text: string }) {
  const speech = useSpeechState();
  const playing = speech.speaking && speech.text === text;
  return (
    <button
      type="button"
      className={`speak-btn${playing ? " is-playing" : ""}`}
      title={playing ? "Stop audio" : "Speak German"}
      aria-label={playing ? "Stop audio" : "Speak German"}
      aria-pressed={playing}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        void speak(text);
      }}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="currentColor" d={playing ? STOP_PATH : SPEAK_PATH} />
      </svg>
    </button>
  );
}

export function German({ children, as: Tag = "span" }: { children: ReactNode; as?: "span" | "p" | "div" | "li" | "strong" }) {
  const text = typeof children === "string" ? children : "";
  return (
    <Tag className="de" lang="de">
      {children}
      {text ? <SpeakButton text={text} /> : null}
    </Tag>
  );
}

export function LessonHtml({ html, className }: { html: string; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    enhanceGerman(ref.current);
  }, [html]);
  return <article ref={ref} className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function EnhanceRoot({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    enhanceGerman(ref.current);
  }, []);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
