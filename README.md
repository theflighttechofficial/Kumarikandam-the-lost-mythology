<div align="center">

# 📜 Lemuria & Kumari Kandam: Lost Continent Explorer

An interactive research platform, ancient map exploration toolkit, and study suite dissecting the 19th-century Lemuria hypothesis, Tamil Sangam literary accounts of **Kumari Kandam**, modern plate tectonics, biogeography, and the microcontinent **Mauritia**.

[![React 19](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-4.1-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12.23-yellow?style=for-the-badge)](https://motion.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

</div>

## 🌟 Overview

Before plate tectonics was established in the 1960s, 19th-century zoologists proposed **Lemuria**—a hypothetical sunken landmass bridging India and Madagascar—to explain shared lemur fossils across the Indian Ocean. Decades later, Tamil revivalists identified Lemuria with **Kumari Kandam** (குமரிக் கண்டம்), the legendary sunken continent described in medieval commentaries on Sangam literature (*Silappatikaram*, *Kapaadapuram*).

This web application combines **ancient parchment visual aesthetics**, **interactive mapping**, **comparative scientific matrices**, **educational quizzes**, and a **built-in research productivity suite** to study the intersection of myth, history, and geological science.

---

## ✨ Key Features

### 🗺️ 1. Interactive Ancient Map Explorer (Uncharted Style)
- Toggle views between **19th Century Mythological Maps**, **Modern Tectonic Plates**, and **Submerged Microcontinents (Mauritia)**.
- Hotspot annotations detailing the **Mascarene Plateau**, **South Kanyakumari**, **Madagascar Lemur Biogeography**, and **Kerguelen Microcontinent**.
- Real-time coordinates readout and terrain soundings simulation.

### 🏛️ 2. Deep Dive: Kumari Kandam in Tamil Tradition
- Exploration of Tamil Sangam Literature (*First & Second Sangams*).
- Comparative timeline of legendary floods (*Kadal Kol*) and coastal inundations in South India.
- Insights into historical figures, texts (*Tolkāppiyam*), and the cultural revivalist movements of the 1900s.

### 🔬 3. Science vs. Myth Matrix & Interactive Quiz
- Side-by-side scientific refutation comparing pre-plate-tectonic hypotheses against modern bathymetry & continental drift.
- Embedded **Knowledge Challenge Quiz** with interactive scoring and detailed academic explanations.

### ⏳ 4. Chronological Timeline (1860s - Present Day)
- Interactive timeline tracking Philip Sclater (1864), Ernst Haeckel (1870), Helena Blavatsky / Theosophy (1888), V.G. Suryanarayana Sastri (1903), down to the 2013 discovery of **Mauritia**.

### 📝 5. Integrated Research Productivity Suite
- **Interactive Notebook**: Write, filter, tag, and export research notes.
- **Task Manager**: Track reading lists, priority research items, and complete milestones.
- **Dynamic Research Progress Tracker**: Calculates your completion percentage based on notes written, tasks done, and sources analyzed.
- **LocalStorage Persistence**: Keep all research progress saved automatically across browser sessions.

### 📚 6. Academic Bibliography & Sources Section
- Comprehensive list of primary and secondary sources categorized into **Historical**, **Geological**, and **Literary & Cultural**.
- Track reading progress with "Mark as Read" toggles.

### 💻 7. Standout Features & VS Code Exporter
- **"Is Lemuria Real?" Interactive Modal**: Concise summary separating geological facts (Gondwana breakdown, Mauritia) from myth.
- **VS Code Code Exporter**: Single-click modal to copy production-ready standalone HTML/CSS/JS code structure.

---

## 🛠️ Tech Stack

- **Frontend Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool & Server**: [Vite 6](https://vitejs.dev/)
- **Styling & UI**: [Tailwind CSS v4](https://tailwindcss.com/) with custom Parchment / Explorer Design Tokens
- **Animations**: [Motion](https://motion.dev/) (Framer Motion replacement)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI Capability**: Ready for `@google/genai` (Google Gemini API integration)

---

## 🚀 Quickstart & Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- `npm` or `pnpm` or `yarn`

### 1. Clone the Repository

```bash
git clone https://github.com/theflighttechofficial/Kumarikandam-the-lost-mythology.git
cd Kumarikandam-the-lost-mythology
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables (Optional for Gemini Features)

Create a `.env` or `.env.local` file in the root directory:

```env
GEMINI_API_KEY=your_google_gemini_api_key_here
```

### 4. Run Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000`.

---

## 📁 Project Structure

```text
lemuria_-myth-or-lost-continent/
├── index.html                   # HTML entry point with Google Fonts (Cinzel, MedievalSharp, Inter)
├── package.json                 # Project dependencies & scripts
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite build configuration
├── src/
│   ├── main.tsx                 # React DOM mount point
│   ├── App.tsx                  # Main application state & section layout
│   ├── index.css                # Custom parchment styles, scrollbars, and Tailwind imports
│   ├── types.ts                 # TypeScript type definitions for notes, tasks, sources, map markers
│   ├── data/
│   │   └── lemuriaData.ts       # Initial datasets (Notes, Tasks, Quiz, Timeline, Sources, Map Hotspots)
│   └── components/
│       ├── Navbar.tsx           # Navigation bar with live progress indicator & modal triggers
│       ├── Hero.tsx             # Interactive Hero section with ancient expedition aesthetics
│       ├── WhatIsLemuria.tsx    # Core introduction & origins section
│       ├── InteractiveMap.tsx   # Uncharted-themed interactive map explorer
│       ├── KumariKandamSection.tsx # Tamil Sangam literature & cultural heritage section
│       ├── ScienceVsMyth.tsx    # Matrix comparison & interactive knowledge quiz
│       ├── TimelineSection.tsx  # Timeline from 1864 (Sclater) to Mauritia discovery
│       ├── ProductivitySuite.tsx# Research notes, task checklist, and status tracker
│       ├── SourcesSection.tsx   # Bibliography and source reader checklist
│       ├── Footer.tsx           # Academic footer with links & credits
│       ├── RealModal.tsx        # "Is Lemuria Real?" quick scientific verdict modal
│       └── VsCodeExportModal.tsx# Code exporter modal for offline/vanilla development
└── README.md                    # Documentation
```

---

## 📖 Key Takeaway Summary

| Aspect | The 19th Century Myth | Modern Science |
| :--- | :--- | :--- |
| **Land Bridge** | Continuous sunken continent between Madagascar & India | Continent breakage via **Gondwana rifting** (180–120 Mya) |
| **Lemur Migration** | Walked across submerged continent of Lemuria | Oceanic rafting / island hopping across early Indian Ocean |
| **Kumari Kandam** | Massive submerged Tamil continent in Indian Ocean | Sea-level rise following Last Glacial Maximum (LGM) submerged coastal Poompuhar |
| **Microcontinents** | Entire sunken continent lost recently | **Mauritia** (Precambrian continental crust fragment underneath Mauritius/Reunion) |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/theflighttechofficial/Kumarikandam-the-lost-mythology/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git checkout -b feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <sub>Built with ❤️ for history, geology, and web exploration.</sub>
</div>
