# Succi – Wuthering Waves Tracker

Kleine statische Seite zum Verwalten der Wuthering-Waves-Charaktere: Besitz, Level, Waffe, Waffen-Level, Stats mit Netzdiagramm. Kein Build-Schritt, kein Backend.

## Starten
- Lokal: `index.html` im Browser öffnen.
- GitHub Pages: Repo hochladen, unter *Settings → Pages* den Branch `main` (Ordner `/root`) auswählen.

## Dateien
- `index.html` – Grundgerüst
- `style.css` – Design (Hell/Dunkel automatisch)
- `data.js` – Charakterliste (Name, Element, Waffe, Seltenheit), Stand Version 3.4
- `app.js` – Logik, Speichern, Netzdiagramm, Export/Import
- `images/` – Porträts, Dateiname = Name in Kleinbuchstaben, Leerzeichen als `-`

## Hinweise
- Daten werden im `localStorage` des jeweiligen Browsers gespeichert (pro Gerät und Browser getrennt). Mit Export/Import als JSON sicherst du sie.
- Neue Charaktere: Zeile in `data.js` ergänzen und Bild als `images/<name>.jpg` ablegen.
- Netzdiagramm-Richtwerte (`RF` in `app.js`) sind Schätzwerte, keine offiziellen Maximalwerte.
- Die Porträts stammen aus dem inoffiziellen Fan-Repo `ryanbenson/wuthering-waves-assets`. Die Rechte an den Bildern liegen bei Kuro Games. Nur für private Nutzung gedacht; bei einem öffentlichen Repo besser eigene Bilder verwenden.
