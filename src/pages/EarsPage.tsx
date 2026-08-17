import { useEffect, useRef, useState } from "react";
import { AppLink } from "@/components/ui/AppLink";
import { useApp } from "@/context/AppContext";
import { progressStore } from "@/state/progress";
import { noteFinished } from "@/state/session";
import { hoerenMeta, officialTelcUrl } from "@/lib/exam";
import { formatClock } from "@/lib/dates";
import { useCountdown, useDocumentTitle } from "@/hooks/useUi";

export function EarsPage() {
  const { pack, meta, levelId, toast } = useApp();
  const hm = hoerenMeta(levelId);
  const [fileName, setFileName] = useState("");
  const urlRef = useRef<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const clock = useCountdown(hm.minutes * 60, () => toast("Listening time is up. Mark the official paper."));
  useDocumentTitle(meta ? `Official ears · ${meta.title}` : "Official ears · Deutschpfad");

  useEffect(() => {
    return () => {
      if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    };
  }, []);

  if (!pack || !meta || !levelId) return null;

  return (
    <>
      <h1>Official exam ears</h1>
      <p className="lead">
        <strong>Required before exam day.</strong> Browser TTS only trains the question type. The real paper is a room, a
        loudspeaker, and one play for Teil 1. Download the official {meta.title} sample from telc, then play the MP3 here
        — it never leaves this device. People who skip this often fail Hören.
      </p>
      <div className="warn">
        <span className="label-s">Do not skip</span> We cannot ship telc’s audio. The Modelltest PDF + MP3 on telc.net is
        the acoustics drill. Tick this only after a full sitting with no pause on Teil 1.
      </div>
      <div className="card">
        <h3>Do this in weeks 7–8</h3>
        <ol>
          <li>
            Open <AppLink to={officialTelcUrl(pack.examFormat, levelId)}>telc.net · {meta.title}</AppLink> and download the
            Modelltest PDF + MP3.
          </li>
          <li>
            Print or screenshot the Hören questions. Sit ~{hm.minutes} minutes. Do not pause Teil 1.
          </li>
          <li>Load the MP3 below and start the timer. Mark answers on the official paper, not on this site.</li>
        </ol>
      </div>
      <div className="exam-player" style={{ marginTop: "1rem" }}>
        <p className="kicker">Local MP3</p>
        <p className={`exam-status exam-clock${clock.left <= 120 ? " is-low" : ""}`}>{formatClock(clock.left)}</p>
        <p className="exam-sub">{fileName || "No file yet."}</p>
        <input
          type="file"
          accept="audio/*"
          onChange={(ev) => {
            const file = ev.target.files?.[0];
            if (!file) return;
            if (urlRef.current) URL.revokeObjectURL(urlRef.current);
            urlRef.current = URL.createObjectURL(file);
            setFileName(file.name);
            if (audioRef.current) audioRef.current.src = urlRef.current;
          }}
        />
        <audio ref={audioRef} controls style={{ width: "100%", marginTop: "0.7rem" }} />
        <div className="btn-row">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              clock.start();
              audioRef.current?.play().catch(() => {});
            }}
          >
            Start {hm.minutes} min
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => {
              progressStore.markDone("official-ears");
              noteFinished(progressStore, "/exam/ears");
              toast("Official ears ticked. Repeat if under 80% on the sample.");
            }}
          >
            Mark ears practice done
          </button>
        </div>
      </div>
      <div className="btn-row">
        <AppLink className="btn" to="/exam/hoeren">
          Back to method papers
        </AppLink>
      </div>
    </>
  );
}
