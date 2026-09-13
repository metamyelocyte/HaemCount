<div align="center">

# 🩸 HaemCount

**A web-based differential cell counter for hematology**

Fast, keyboard-driven differential counting for peripheral blood and bone marrow — right in your browser.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Version](https://img.shields.io/badge/version-1.0-brightgreen.svg)](#)
[![No Build Step](https://img.shields.io/badge/build-none-success.svg)](#getting-started)
[![Made with Vanilla JS](https://img.shields.io/badge/vanilla-JS-f7df1e.svg)](#)

*Inspired by the original [HEMCOUNT](https://github.com/nelsonchanhk/HEMCOUNT) desktop application by Nelson Chan.*

</div>

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Default Keyboard Shortcuts](#-default-keyboard-shortcuts)
- [Customization](#-customization)
- [Backlog](#-backlog)
- [Technical Notes](#-technical-notes)
- [Credits](#-credits)
- [License](#-license)
- [Disclaimer](#-disclaimer)

## 🔬 About

**HaemCount** is a from-scratch web reimplementation of the classic **HEMCOUNT v1.0** Windows desktop application. It preserves the core workflow, layout, and feel of the original — a fast, keyboard-driven interface for counting differential leukocytes — while making it accessible in any modern browser.

The original **HEMCOUNT** was created by **Nelson Chan** ([@nelsonchanhk](https://github.com/nelsonchanhk)):

> 🔗 [https://github.com/nelsonchanhk/HEMCOUNT](https://github.com/nelsonchanhk/HEMCOUNT)

## ✨ Features

| | |
|---|---|
| 🧬 **12 cell categories** | Lymphocytes, neutrophils, eosinophils, basophils, monocytes, promyelocytes, myelocytes, metamyelocytes, plasma cells, blasts, nucleated RBCs (nRBCs), and a renameable "Other" category |
| 🦴 **Sample modes** | Peripheral blood and bone marrow, with correct handling of nRBCs in the total count |
| 📊 **Live statistics** | Real-time percentage calculation and Myeloid:Erythroid (M:E) ratio for bone marrow |
| 📈 **Interactive histogram** | Visualises the differential distribution as you count |
| 📋 **Clipboard report** | A clean, ready-to-paste report generated automatically from your counts |
| ⌨️ **Keyboard-driven** | Fully customizable single-key counting for a fast workflow |
| 🔊 **Audio feedback** | A short beep per cell; a longer chime every 100 cells |
| 🎵 **Custom sounds** | Replace the default beeps with your own audio files |
| 🎨 **Five themes** | Light, Dark, Solarized Light, Solarized Dark, and Sepia |
| 🧩 **Layout customization** | Show, hide, and reorder GUI panels to suit your workflow |
| ✏️ **Click-to-edit** | Type a count directly, or rename the "Other" category inline |
| 🖱️ **Click-to-copy** | One click copies the report to the clipboard |
| 💾 **Backlog** | Save, label, and reload multiple sessions |
| ⏸️ **Pause-on-blur** | Optional focus guard to prevent accidental keystrokes |

## 🚀 Getting Started

**No build step. No server. No dependencies to install.**

Just download or clone the repository and open `index.html` in any modern browser.

```bash
git clone https://github.com/your-username/haemcount.git
cd haemcount
