import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export function useFocusHeading(dep?: unknown) {
  const location = useLocation();
  useEffect(() => {
    const h = document.querySelector<HTMLElement>("#view h1");
    if (!h) return;
    h.setAttribute("tabindex", "-1");
    try {
      h.focus({ preventScroll: true });
    } catch {
      h.focus();
    }
  }, [location.pathname, dep]);
}

export function useCountdown(seconds: number | null, onEnd?: () => void) {
  const [left, setLeft] = useState(seconds ?? 0);
  const [running, setRunning] = useState(false);
  const onEndRef = useRef(onEnd);
  const endedRef = useRef(false);
  onEndRef.current = onEnd;

  useEffect(() => {
    setLeft(seconds ?? 0);
    setRunning(false);
    endedRef.current = false;
  }, [seconds]);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setLeft((n) => Math.max(0, n - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  useEffect(() => {
    if (!running || left > 0 || endedRef.current) return;
    endedRef.current = true;
    setRunning(false);
    onEndRef.current?.();
  }, [left, running]);

  return {
    left,
    running,
    start: () => {
      endedRef.current = false;
      setRunning(true);
    },
    pause: () => setRunning(false),
    stop: () => {
      setRunning(false);
    },
    setLeft,
  };
}
