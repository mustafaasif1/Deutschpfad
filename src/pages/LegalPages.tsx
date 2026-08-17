import { NavLink } from "react-router-dom";
import { getLegalConfig, legalFilled, type LegalConfig } from "@/lib/legal";
import { useDocumentTitle } from "@/hooks/useUi";

function Mail({ c }: { c: LegalConfig }) {
  const e = c.email.trim();
  if (!e) return <em>E-Mail-Adresse noch nicht hinterlegt</em>;
  return <a href={`mailto:${e}`}>{e}</a>;
}

function Address({ c }: { c: LegalConfig }) {
  if (!legalFilled(c)) {
    return (
      <p>
        <em>
          Name, postalische Anschrift und E-Mail fehlen noch. Tragen Sie sie in <code>public/legal-config.js</code> ein.
        </em>
      </p>
    );
  }
  return (
    <p>
      {c.operatorName}
      <br />
      {c.street}
      <br />
      {c.postalCode} {c.city}
      <br />
      {c.country || "Deutschland"}
      <br />
      E-Mail: <Mail c={c} />
      {c.phone.trim() ? (
        <>
          <br />
          Telefon: {c.phone}
        </>
      ) : null}
    </p>
  );
}

function LegalShell({ title, children }: { title: string; children: React.ReactNode }) {
  const c = getLegalConfig();
  useDocumentTitle(`${title} — ${c.siteName || "Deutschpfad"}`);
  return (
    <div className="legal-body">
      <main className="legal-wrap">
        <div className="legal-doc">
          <p className="kicker">{c.siteName || "Deutschpfad"} · Rechtliches</p>
          <h1>{title}</h1>
          <nav className="legal-nav" aria-label="Rechtliches">
            <NavLink to="/impressum">Impressum</NavLink>
            <NavLink to="/datenschutz">Datenschutz</NavLink>
            <NavLink to="/nutzung">Nutzung &amp; Haftung</NavLink>
            <NavLink to="/">Zur Lernseite</NavLink>
          </nav>
          {!legalFilled(c) ? (
            <div className="warn legal-warn">
              <strong>Impressum unvollständig.</strong> Bevor Sie Deutschpfad öffentlich in Deutschland anbieten, müssen
              Name, Anschrift und E-Mail des Anbieters in <code>public/legal-config.js</code> stehen. Das verlangt § 5 DDG.
              Ein Platzhalter schützt nicht vor einer Abmahnung.
            </div>
          ) : null}
          {children}
          <p className="tiny legal-note">
            Diese Seiten sind eine Orientierung für eine private Lernseite und ersetzen keine Rechtsberatung. Stand: August
            2026.
          </p>
        </div>
      </main>
    </div>
  );
}

export function ImpressumPage() {
  const c = getLegalConfig();
  const commercial: React.ReactNode[] = [];
  if (c.isCommercial) {
    if (c.vatId) commercial.push(<p key="vat">Umsatzsteuer-ID: {c.vatId}</p>);
    if (c.registerCourt && c.registerNumber) {
      commercial.push(
        <p key="reg">
          Registereintrag: {c.registerCourt}, {c.registerNumber}
        </p>,
      );
    }
  }
  const responsible = (c.responsibleContent || c.operatorName || "").trim();
  return (
    <LegalShell title="Impressum">
      <p>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG; früher § 5 TMG).</p>
      <h2>Anbieter</h2>
      <Address c={c} />
      {commercial.length ? (
        <>
          <h2>Weitere Angaben (geschäftsmäßig)</h2>
          {commercial}
        </>
      ) : null}
      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        Verantwortlich nach § 18 Abs. 2 MStV:{" "}
        {responsible ? responsible : <em>wie Anbieter, sobald der Name hinterlegt ist</em>}.
      </p>
      <h2>Kontakt</h2>
      <p>
        E-Mail: <Mail c={c} />
      </p>
      <h2>English</h2>
      <p>
        This is the legally required provider notice for a website offered in Germany: who runs Deutschpfad, where they can
        be reached by post and email. It is not an official telc page.
      </p>
    </LegalShell>
  );
}

export function DatenschutzPage() {
  const c = getLegalConfig();
  const host = c.hostingName.trim();
  const hostCountry = c.hostingCountry.trim();
  return (
    <LegalShell title="Datenschutzerklärung">
      <p>
        Diese Erklärung informiert Sie nach Art. 13, 14 DSGVO, welche personenbezogenen Daten beim Nutzen von Deutschpfad
        verarbeitet werden.
      </p>
      <h2>1. Verantwortlicher</h2>
      <Address c={c} />
      <h2>2. Was diese Seite nicht tut</h2>
      <ul>
        <li>Kein Nutzerkonto, keine Registrierung, kein Newsletter.</li>
        <li>Kein Google Analytics, kein Facebook-Pixel, keine Werbenetzwerke.</li>
        <li>Keine Drittanbieter-Schriftarten (keine Google Fonts). Schriften kommen vom Gerät oder aus dem App-Bundle.</li>
        <li>Keine Tracking-Cookies.</li>
      </ul>
      <h2>3. Hosting und Server-Logfiles</h2>
      {host ? (
        <p>
          Hosting: {host}
          {hostCountry ? ` (${hostCountry})` : ""}.
        </p>
      ) : (
        <p>
          Die Dateien liegen auf dem Server des vom Anbieter gewählten Hosting-Dienstes. Tragen Sie den Hosternamen in{" "}
          <code>legal-config.js</code> ein, sobald die Seite online ist (z.&nbsp;B. Railway, Vercel, ein deutscher Hoster).
        </p>
      )}
      <p>
        Beim Abruf speichert der Server üblicherweise technisch notwendige Logfiles: IP-Adresse, Datum und Uhrzeit,
        aufgerufene Datei, übertragene Datenmenge, Referrer, Browserkennung. Zweck: Betrieb, Sicherheit, Störungsbeseitigung.
        Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb). Speicherdauer: nach Vorgabe
        des Hosters, in der Regel wenige Tage bis Wochen, nicht zur Profilerstellung durch Deutschpfad.
      </p>
      <h2>4. Lernfortschritt im Browser (localStorage)</h2>
      <p>
        Die Seite speichert auf Ihrem Gerät unter dem Schlüssel <code>deutschpfad-progress-v2</code> den gewählten Kurs
        (A1/A2/B1), den optionalen Prüfungstermin, Häkchen, Quiz-Ergebnisse, die 1/3/7-Wiederholungsliste, die heutige
        Sitzung und eine Streak. Diese Daten verlassen Ihren Browser nicht. Ohne sie funktionieren Plan, Heute und Fortschritt
        nicht. Rechtsgrundlage für den Zugriff auf das Endgerät: § 25 Abs. 2 Nr. 2 TDDDG (unbedingt erforderlich). Löschen:
        Browserdaten für diese Seite löschen oder auf der Fortschrittsseite „Reset“.
      </p>
      <h2>5. Sprachausgabe</h2>
      <p>
        Die Lautsprecher-Buttons nutzen die eingebaute Sprachausgabe Ihres Geräts (<code>speechSynthesis</code>). Deutschpfad
        sendet den Text nicht an einen eigenen Server. Ob das Betriebssystem Daten an den Gerätehersteller schickt, hängt von
        Ihren Systemeinstellungen ab.
      </p>
      <h2>6. Offizielle Prüfungs-MP3</h2>
      <p>
        Wenn Sie eine telc-Modelltest-MP3 lokal abspielen, bleibt die Datei auf Ihrem Gerät. Deutschpfad lädt keine
        Prüfungsdateien von telc herunter und speichert sie nicht.
      </p>
      <h2>7. Links zu telc.net und anderen Seiten</h2>
      <p>Externe Links öffnen Angebote Dritter. Für deren Datenverarbeitung sind die jeweiligen Betreiber verantwortlich.</p>
      <h2>8. Ihre Rechte</h2>
      <p>
        Sie haben nach der DSGVO insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung,
        Datenübertragbarkeit und Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Beschwerde:
        bei einer Datenschutzaufsicht, in Deutschland typisch die Behörde des Bundeslandes, in dem der Anbieter wohnt, oder
        der Bundesbeauftragte für den Datenschutz. Kontakt für Anfragen: <Mail c={c} />.
      </p>
      <h2>9. Keine Drittlandübermittlung durch Deutschpfad</h2>
      <p>
        Deutschpfad selbst übermittelt keine Lern- oder Kontaktdaten in die USA oder andere Drittländer. Serverstandort hängt
        vom gewählten Hoster ab; tragen Sie ihn oben ein, wenn die Seite online ist.
      </p>
      <h2>English summary</h2>
      <p>
        No accounts, no ad trackers, no Google Fonts. Progress stays in your browser (localStorage). The host may keep short
        server logs (IP, time, file) for security. Speech uses your device. Fill the operator email in the config file so
        people can reach you.
      </p>
    </LegalShell>
  );
}

export function NutzungPage() {
  const c = getLegalConfig();
  const year = new Date().getFullYear();
  const who = c.operatorName.trim() || "der Anbieter von Deutschpfad";
  return (
    <LegalShell title="Nutzung, Marken und Haftung">
      <h2>1. Was Deutschpfad ist</h2>
      <p>
        Deutschpfad ist originales Unterrichtsmaterial zur Vorbereitung auf die klassischen Erwachsenenprüfungen telc Deutsch
        A1 / Start Deutsch 1, telc Deutsch A2 / Start Deutsch 2 und Zertifikat Deutsch / telc Deutsch B1. Es ist eine private
        Lernhilfe, kein Prüfungszentrum und kein Ersatz für den offiziellen Modelltest.
      </p>
      <h2>2. Keine Verbindung zu telc oder Goethe</h2>
      <p>
        <strong>telc</strong>, <strong>Start Deutsch</strong> und <strong>Zertifikat Deutsch</strong> sind Marken bzw.
        Prüfungsnamen der telc gGmbH. <strong>Goethe-Institut</strong> ist eine Marke des Goethe-Instituts e.&nbsp;V.
        Deutschpfad ist nicht von telc, dem Goethe-Institut oder einer anderen Prüfungsstelle herausgegeben, geprüft oder
        empfohlen. Es gibt keine Partnerschaft.
      </p>
      <p>
        Die Namen der Prüfungen werden nur genannt, damit Lernende wissen, auf welche Prüfung sich der Kurs bezieht
        (beschreibende Verwendung). Offizielle Modelltests, Hördateien und Wortlisten kaufen oder laden Sie nur bei telc bzw.
        dem Goethe-Institut.
      </p>
      <h2>3. Urheberrecht</h2>
      <p>
        Texte, Übungen, Beispielsätze und Gestaltung von Deutschpfad sind originales Material von {who}, soweit nicht anders
        gekennzeichnet. Das Kopieren ganzer Kapitel ins Netz oder der Verkauf als „offizieller telc-Kurs“ ist nicht erlaubt.
        Für den privaten Lerngebrauch dürfen Sie die Bücher als PDF für sich drucken.
      </p>
      <h2>4. Keine Prüfungsgarantie</h2>
      <p>
        Niemand kann ein Bestehen der Prüfung zusagen. Die Inhalte können Fehler enthalten. Maßgeblich sind immer die
        aktuellen Regeln, das Heft und die Audio-CD/MP3 Ihrer Prüfungsstelle.
      </p>
      <h2>5. Keine Rechts- oder Einwanderungsberatung</h2>
      <p>
        Themen wie Amt, Aufenthalt oder Krankenkasse sind Sprachtraining, keine Beratung. Für rechtliche Fragen sind Behörden
        und Fachleute zuständig.
      </p>
      <h2>6. Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir nach § 7 Abs. 1 DDG für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich. Nach
        §§ 8 bis 10 DDG sind wir nicht verpflichtet, fremde Informationen zu überwachen. Bei bekannt werdenden
        Rechtsverletzungen entfernen wir die betreffenden Inhalte.
      </p>
      <h2>7. Haftung für Links</h2>
      <p>
        Links zu telc.net und anderen Seiten dienen der Orientierung. Für fremde Inhalte sind die jeweiligen Betreiber
        verantwortlich. Bei bekannt werdenden Rechtsverletzungen werden Links entfernt.
      </p>
      <h2>8. Nutzungsbedingungen</h2>
      <ul>
        <li>Die Seite ist zum persönlichen Lernen gedacht.</li>
        <li>Geben Sie Übungen nicht als offizielle Prüfungsaufgaben von telc aus.</li>
        <li>Keine automatisierte Massenabfrage, die den Betrieb stört.</li>
      </ul>
      <h2>9. Cookies</h2>
      <p>
        Es gibt kein Cookie-Banner, weil Deutschpfad keine einwilligungsbedürftigen Tracking-Cookies setzt. Der Lernfortschritt
        liegt als essenzieller localStorage-Eintrag auf Ihrem Gerät (siehe Datenschutzerklärung).
      </p>
      <p>
        © {year} {who}
      </p>
      <h2>English summary</h2>
      <p>
        Original teaching material. Not affiliated with telc gGmbH or the Goethe-Institut. No pass guarantee. No legal advice.
        Names of exams are used only to describe what you are training for. Print the books for your own study. Do not present
        this gym as an official Modelltest.
      </p>
    </LegalShell>
  );
}
