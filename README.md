# HaemCount

A web-based differential cell counter for hematology, inspired by and reimplementing the original **HEMCOUNT** desktop application.

---

## About the Original HEMCOUNT

The original **HEMCOUNT v1.0** is a Windows desktop application created by **Nelson Chan** ([@nelsonchanhk](https://github.com/nelsonchanhk)). It provides a fast, keyboard-driven interface for counting differential leukocytes in peripheral blood and bone marrow samples, calculating percentages, M:E ratios, and generating clipboard-ready reports.

- **Original repository**: [https://github.com/nelsonchanhk/HEMCOUNT](https://github.com/nelsonchanhk/HEMCOUNT)

HaemCount is a from-scratch web reimplementation that aims to preserve the core workflow, layout, and feel of the original while making it accessible in any modern browser.

---

## Features

- **Differential counting** for 11 cell types: lymphocytes, neutrophils, eosinophils, basophils, promyelocytes, myelocytes, metamyelocytes, other cells, plasma cells, nucleated RBCs (nRBCs), and blasts.
- **Peripheral blood and bone marrow modes** with correct handling of nRBCs in the total cell count.
- **Real-time percentage calculation** and Myeloid:Erythroid (M:E) ratio for bone marrow samples.
- **Interactive histogram** visualising the differential distribution.
- **Clipboard-ready report** generated automatically as you count.
- **Keyboard-driven workflow** with fully customizable keybinds.
- **Audio feedback**: a short beep for each cell counted, and a longer, higher-pitched chime every 100 cells.
- **Customizable sounds**: replace the default beeps with your own audio files.
- **Themes**: Light, Dark, Solarized Light, Solarized Dark, and Sepia.
- **Layout customization**: show, hide, and reorder GUI panels.
- **Click-to-edit counts**: manually type a count for any cell type.
- **Click-to-copy output**: one click copies the report to the clipboard.

---

## Getting Started

No build step or server is required. Simply download or clone this repository and open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).

```bash
git clone https://github.com/your-username/haemcount.git
cd haemcount
# Open index.html in your browser
