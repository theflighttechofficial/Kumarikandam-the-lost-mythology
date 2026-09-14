<div align="center">

# 📜 Lemuria & Kumari Kandam: Lost Continent Explorer

**An Interactive Research Platform, Map Exploration Toolkit, & Educational Suite Dissecting Ancient Myth and Modern Plate Tectonics**

[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-4.1-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12.23-FF4081?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-4CAF50.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

[Key Features](#-key-features) • [Tech Stack](#-tech-stack) • [Quickstart](#-quickstart--installation) • [Project Structure](#-project-structure) • [Science vs. Myth](#-science-vs-myth-matrix) • [Contributing](#-contributing)

</div>

---

## 📖 Overview

Before the theory of plate tectonics was accepted in the 1960s, 19th-century zoologists hypothesized **Lemuria**—a lost landmass bridging India and Madagascar—to explain shared fossilized lemur fauna across distant shores of the Indian Ocean. Decades later, Tamil cultural revivalists identified Lemuria with **Kumari Kandam** (குமரிக் கண்டம்), the legendary sunken continent described in medieval commentaries on Tamil Sangam literature (*Silappatikaram*, *Kapaadapuram*).

**Lemuria & Kumari Kandam Explorer** is an ultra-modern web application wrapped in an **ancient parchment visual aesthetic**. It provides interactive historical map exploration, comparative scientific matrices, educational quizzes, chronological timelines, and a local research productivity suite to study the confluence of folklore, Tamil literature, and marine geology.

---

## 📑 Table of Contents

- [ Overview](#-overview)
- [ Key Features](#-key-features)
  - [1. Interactive Ancient Map Explorer](#1--interactive-ancient-map-explorer-uncharted-style)
  - [2. Tamil Sangam & Kumari Kandam Deep Dive](#2--deep-dive-kumari-kandam-in-tamil-tradition)
  - [3. Science vs. Myth Matrix & Quiz](#3--science-vs-myth-matrix--interactive-quiz)
  - [4. Chronological Timeline (1860s–Present)](#4--chronological-timeline-1860s---present-day)
  - [5. Integrated Research Productivity Suite](#5--integrated-research-productivity-suite)
  - [6. Bibliography & Sources Checklist](#6--academic-bibliography--sources-section)
  - [7. Code Exporter & Fact Modals](#7--standout-features--vs-code-exporter)
- [ Tech Stack](#-tech-stack)
- [ Quickstart & Installation](#-quickstart--installation)
- [ Environment Variables](#-environment-variables)
- [ Available NPM Scripts](#-available-npm-scripts)
- [ Project Structure](#-project-structure)
- [ Science vs. Myth Matrix](#-science-vs-myth-matrix)
- [ Contributing](#-contributing)
- [ License](#-license)

---

## ✨ Key Features

### 🗺️ 1. Interactive Ancient Map Explorer (Uncharted Style)
* **Layer Toggles**: Seamlessly switch between **19th-Century Mythological Maps**, **Modern Tectonic Plate Boundaries**, and **Submerged Microcontinents (Mauritia)**.
* **Interactive Hotspots**: Inspect annotated research locations including the **Mascarene Plateau**, **South Kanyakumari**, **Madagascar Lemur Biogeography**, and **Kerguelen Microcontinent**.
* **Cartographic Telemetry**: Real-time readout of geographical coordinates, depth soundings, and expedition notes.

### 🏛️ 2. Deep Dive: Kumari Kandam in Tamil Tradition
* **Sangam Literature Analysis**: Detailed coverage of the **First (Madurai)** and **Second (Kapaadapuram)** Tamil Sangams.
* **Cataclysmic Inundation Timeline**: Exploration of historical coastal floods (*Kadal Kol*) recorded in classical Tamil texts like *Silappatikaram*.
* **Revivalist Movement**: Insights into key figures such as V.G. Suryanarayana Sastri (Parithimar Kalaignar) and the cultural framing of sunken ancestral lands.

### 🔬 3. Science vs. Myth Matrix & Interactive Quiz
* **Side-by-Side Analysis**: Direct empirical comparisons evaluating pre-plate-tectonic hypotheses against modern bathymetry, ocean floor spreading, and continental drift.
* **Knowledge Challenge Quiz**: Self-assessment module with instant feedback, scoring, and academic explanations.

### ⏳ 4. Chronological Timeline (1860s - Present Day)
* **Historical Trajectory**: Chronological journey tracking Philip Sclater (1864), Ernst Haeckel (1870), Helena Blavatsky & Theosophy (1888), Tamil revivalists (1900s), down to the 2013 discovery of the **Mauritia microcontinent**.

### 📝 5. Integrated Research Productivity Suite
* **Interactive Research Notebook**: Create, edit, tag, search, and export research notes.
* **Task Manager**: Organize reading lists, prioritize research objectives, and mark milestones complete.
* **Dynamic Progress Tracker**: Real-time progress bar computing overall completion based on notes written, tasks done, and sources reviewed.
* **Session Persistence**: Automatic saving to browser `localStorage`.

### 📚 6. Academic Bibliography & Sources Section
* **Categorized Reading List**: Primary and secondary literature classified under **Historical**, **Geological**, and **Literary & Cultural** domain tags.
* **Reading Progress Toggles**: Check off papers and books as you read them.

### 💻 7. Standout Features & VS Code Exporter
* **"Is Lemuria Real?" Quick Verdict Modal**: Concise executive summary distilling geological realities (Gondwana breakup, Mauritia crustal fragments) from mythological claims.
* **VS Code Code Exporter Modal**: One-click modal to inspect and copy standalone, production-ready code structures.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) | Component architecture & dynamic UI |
| **Language** | [TypeScript 5.8](https://www.typescriptlang.org/) | Strict type safety & data schemas |
| **Bundler & Server** | [Vite 6](https://vitejs.dev/) | Lightning-fast HMR dev server & production builds |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Parchment design system & utility layout |
| **Animations** | [Motion 12](https://motion.dev/) | Smooth page transitions & micro-interactions |
| **Icons** | [Lucide React](https://lucide.dev/) | UI icon library |
| **AI Capabilities** | [@google/genai](https://www.npmjs.com/package/@google/genai) | Integration readiness for Google Gemini API |

---

## 🚀 Quickstart & Installation

### Prerequisites

* **Node.js**: `v18.0.0` or higher
* **Package Manager**: `npm`, `pnpm`, or `yarn`

### 1. Clone Repository

```bash
git clone https://github.com/theflighttechofficial/Kumarikandam-the-lost-mythology.git
cd Kumarikandam-the-lost-mythology
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_google_gemini_api_key_here
```

### 4. Launch Development Server

```bash
npm run dev
```

Visit [`http://localhost:3000`](http://localhost:3000) in your browser.

---

## 📜 Available NPM Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Vite development server on port `3000` |
| `npm run build` | Compiles TypeScript and builds production distribution in `/dist` |
| `npm run preview` | Previews the compiled production build locally |
| `npm run lint` | Runs TypeScript type checking without emitting files |
| `npm run clean` | Removes `/dist` directory |

---

## 📁 Project Structure

```text
Kumarikandam-the-lost-mythology/
├── index.html                   # Entry HTML with custom typography (Cinzel, MedievalSharp, Inter)
├── package.json                 # Project manifest & dependency declarations
├── tsconfig.json                # TypeScript compiler config
├── vite.config.ts               # Vite configuration & server options
├── src/
│   ├── main.tsx                 # React application mounting point
│   ├── App.tsx                  # Root layout, active view navigation, & state hub
│   ├── index.css                # Global Parchment styling tokens, animations, & scrollbars
│   ├── types.ts                 # TypeScript type interfaces (Notes, Tasks, Sources, Map Markers)
│   ├── data/
│   │   └── lemuriaData.ts       # Curated datasets (Quizzes, Timeline events, Sources, Hotspots)
│   └── components/
│       ├── Navbar.tsx           # Navigation header with progress bar & modal triggers
│       ├── Hero.tsx             # Interactive parchment landing hero section
│       ├── WhatIsLemuria.tsx    # Historical background & origins of Sclater's hypothesis
│       ├── InteractiveMap.tsx   # Uncharted-themed interactive cartography explorer
│       ├── KumariKandamSection.tsx # Tamil Sangam literature & cultural research module
│       ├── ScienceVsMyth.tsx    # Side-by-side scientific evaluation & interactive quiz
│       ├── TimelineSection.tsx  # Interactive chronology from 1864 to modern oceanography
│       ├── ProductivitySuite.tsx# Research notes workspace, task checklist, & progress stats
│       ├── SourcesSection.tsx   # Categorized academic bibliography & reading checklist
│       ├── Footer.tsx           # Academic footer, credits, & external links
│       ├── RealModal.tsx        # "Is Lemuria Real?" fast scientific verdict modal
│       └── VsCodeExportModal.tsx# Code exporter modal for standalone HTML/CSS/JS export
└── README.md                    # Project documentation
```

---

## 📖 Science vs. Myth Matrix

| Comparative Domain | 19th Century Hypothesis / Myth | Modern Geological Science |
| :--- | :--- | :--- |
| **Land Bridge Origin** | Sunken landmass spanning India to Madagascar | Continental drift via **Gondwana fragmentation** (180–120 Mya) |
| **Faunal Migration** | Lemurs walked across a dry land bridge | Oceanic rafting / island hopping across early Indian Ocean |
| **Kumari Kandam** | Massive sunken continent south of Kanyakumari | Sea-level rise post-LGM inundated coastal settlements like Poompuhar |
| **Submerged Crust** | Intact continent drowned beneath ocean floor | **Mauritia**: Precambrian continental fragment beneath Mauritius volcano deposits |

---

## 🤝 Contributing

Contributions, bug reports, and feature requests are very welcome!

1. **Fork** the repository
2. **Create** a topic branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

<sub>Designed & Built with ❤️ for history, Tamil literature, marine geology, and web exploration.</sub>

</div>
