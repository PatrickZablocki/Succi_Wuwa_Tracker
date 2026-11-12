# Wuwa Self-Tracker

Kleine statische Seite für Wuthering Waves, ohne Build-Schritt und ohne Backend.

- **Hauptmenü** mit Zugang zu den Bereichen
- **Mein Team:** 50 Charaktere mit Porträt, Besitz, Level, Waffe (Name und Bild), Waffen-Level, Rang und Stats mit Netzdiagramm
- **Challenges:** eigene Einträge (Titel, Typ, Status, Regeln, Versuche, Ziel, Datum, Notizen) vor einem animierten Rinascita-inspirierten Hintergrund

## Starten
- Lokal: `index.html` im Browser öffnen.
- GitHub Pages: Repo hochladen, unter *Settings → Pages* den Branch `main` (Ordner `/root`) auswählen.

## Dateien
- `index.html` – Menü und Seiten (per `#menu`, `#team`, `#challenges`)
- `style.css` – Design, Hell/Dunkel, Hintergrund-Animation
- `data.js` – Charakterliste (Stand Version 3.4)
- `weapons.js` – Waffenliste: Name, Waffenart, Seltenheit, Bilddatei
- `app.js` – Mein Team
- `challenges.js` – Challenges
- `router.js` – Seitenwechsel
- `images/` – Charakter-Porträts, `images/weapons/` – Waffen-Icons

## Hinweise
- Daten liegen im `localStorage` des Browsers (pro Gerät und Browser getrennt). Export und Import (Mein Team) sichern nur die Team-Daten, nicht die Challenges.
- Neue Charaktere: Zeile in `data.js` ergänzen, Bild als `images/<name>.jpg` ablegen (Kleinbuchstaben, Leerzeichen als `-`).
- Waffenliste stammt aus Datamine-Daten und kann Waffen enthalten, die noch nicht im Spiel sind.
- Der Rinascita-Hintergrund ist eine eigene, stilisierte Zeichnung und kein offizielles Artwork.
- Die Porträts stammen aus dem inoffiziellen Fan-Repo `ryanbenson/wuthering-waves-assets`, die Waffen-Icons aus demselben Repo. Die Rechte liegen bei Kuro Games. Für ein öffentliches Repo besser eigene Bilder verwenden.
