<div align="center">
  <img src="icons/icon-192.png" alt="HaemCount icon" width="96">
  <h1>HaemCount</h1>
  <p><em>A web reimplementation of the HEMCOUNT differential cell counter</em></p>

  <p>
    <img alt="License: GPLv3" src="https://img.shields.io/badge/License-GPLv3-blue.svg">
    <img alt="PWA" src="https://img.shields.io/badge/PWA-offline--ready-success">
    <img alt="Vanilla JS" src="https://img.shields.io/badge/JavaScript-vanilla-f7df1e?logo=javascript&logoColor=black">
    <img alt="No build step" src="https://img.shields.io/badge/build-none-brightgreen">
    <img alt="Chart.js" src="https://img.shields.io/badge/Chart.js-4.4.0-ff6384?logo=chart.js">
  </p>
</div>

---

HaemCount is a lightweight, browser-based tool for manual differential leukocyte counting. It supports both peripheral blood and bone marrow specimens, tracks cell populations in real time, and produces a formatted report ready to paste into a clinical note or laboratory record.

Built as a single-page application with no build step and no backend, it runs entirely on the client and can be installed as a progressive web app for offline use.

## Getting Started

### Try It Online

Don't want to self-host? You can use HaemCount directly at:

**https://haem-count.vercel.app**

#### Install as a Web App (Offline Use)

HaemCount can be installed as a Progressive Web App (PWA) for offline use and a more app-like experience.

**On Desktop (Chrome, Edge, Brave):**
1. Open the link above.
2. Look for the install icon in the address bar (a monitor with a down arrow), or open the browser menu and choose **Install HaemCount** / **Install app**.
3. Click **Install**. The app will open in its own window.
4. After installation, it will work offline. You can launch it from your applications menu or desktop.

**On Android (Chrome):**
1. Open the link in Chrome.
2. Tap the three-dot menu and select **Install app** or **Add to Home screen**.
3. Confirm. The app icon will appear on your home screen.
4. After the first online visit, it will work offline.

**On iOS (Safari):**
1. Open the link in Safari.
2. Tap the Share button.
3. Scroll down and tap **Add to Home Screen**.
4. Confirm by tapping **Add**. The app icon will appear on your home screen.
5. After the first online visit, it will work offline.

> **Note:** The first visit must be online so the app can cache its files. After that, you can use it without an internet connection.

### Hosting

HaemCount is a static site. No installation, build step, or backend is required.

Upload the following files to any static host — Vercel, GitHub Pages, Netlify, or your own server:

```
/
├── index.html
├── sw.js
├── manifest.json
├── icons/
│   └── icon-192.png
└── js/
    └── chart.umd.min.js
```

- `index.html` — the entire application (HTML, CSS, and JS inline)
- `sw.js` — service worker for offline caching
- `manifest.json` — PWA manifest (optional)
- `icons/` — app icons (optional)
- `js/chart.umd.min.js` — self-hosted Chart.js library

### Local Development

Clone the repository and serve the folder with any static server. For example:

```bash
npx serve .
```

Then open `http://localhost:3000`.

> **Note:** Service workers require HTTPS or `localhost`. They will not work with `file://`.

### Offline Setup

To enable offline support, ensure `sw.js` exists at the root and that `js/chart.umd.min.js` is present. A minimal `sw.js` is included in the repository. Adjust the `ASSETS` list to match your file structure.

After the first successful online visit, HaemCount will load and run without a network connection.

## Features

**Counting**
- Twelve differential cell categories, including an inline-renamable *Other* field
- Peripheral blood and bone marrow modes, with automatic M:E ratio calculation
- Fully customizable keyboard shortcuts for rapid entry

**Visualization**
- Live histogram in bar or pie chart form
- Colour-coded by lineage — myeloid, erythroid, and lymphoid
- Real-time percentage calculation per cell type

**Workflow**
- Backlog for saving, loading, and comparing multiple samples
- One-click clipboard output with pre-formatted reporting text
- Adjustable layout — reorder or hide any panel
- Pause-on-blur to prevent accidental counts
- Unsaved-work guard before closing or reloading

**Personalization**
- Six themes: Light, Dark, Solarized Light, Solarized Dark, Sepia, and Pink
- Custom audio cues for routine and century counts
- Adjustable beep volume

**Platform**
- Offline-capable PWA — installable and fully functional without a network after first load
- No dependencies except a self-hosted copy of Chart.js
- Pure HTML, CSS, and JavaScript — no framework, no bundler

## License

Copyright (C) 2026 Tiffany Lau.

This program is free software: you can redistribute it and/or modify it under the terms of the **GNU General Public License v3.0** as published by the Free Software Foundation.

This program is distributed in the hope that it will be useful, but **WITHOUT ANY WARRANTY**; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [LICENSE](LICENSE) file for details.

## Credits

Inspired by the original **HEMCOUNT** by Nelson Chan  
[@nelsonchanhk](https://github.com/nelsonchanhk/HEMCOUNT)

## Disclaimer

**For educational and research support only. Not a medical device.**

HaemCount must not be used as the sole basis for clinical diagnosis or patient management. All clinical decisions must be made by qualified healthcare professionals using validated laboratory systems.
