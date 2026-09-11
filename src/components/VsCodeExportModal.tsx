import { useEffect, useState } from 'react';
import { Check, Code2, Copy, Download, FileCode, FolderArchive, X } from 'lucide-react';

interface VsCodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VsCodeExportModal({ isOpen, onClose }: VsCodeExportModalProps) {
  const [activeFile, setActiveFile] = useState<'html' | 'css' | 'js'>('html');
  const [copiedStatus, setCopiedStatus] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lemuria — Myth or Lost Continent?</title>
  <link rel="stylesheet" href="style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Navigation -->
  <header class="navbar">
    <div class="brand">
      <span class="compass-icon">🧭</span>
      <strong>LEMURIA RESEARCH</strong>
    </div>
    <nav class="nav-links">
      <a href="#about">What is Lemuria?</a>
      <a href="#map">Map</a>
      <a href="#comparison">Science vs. Myth</a>
      <a href="#timeline">Timeline</a>
      <a href="#sources">Sources</a>
    </nav>
    <button id="isLemuriaRealBtn" class="btn-primary">Is Lemuria Real?</button>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <span class="badge">Research Project</span>
      <h1>Lemuria: The Lost Continent</h1>
      <p>Myth or Victorian Scientific Hypothesis? Explore how a 19th-century zoological dilemma became an enduring global legend.</p>
      <div class="hero-actions">
        <a href="#about" class="btn-primary">Explore the Research</a>
        <button onclick="openRealModal()" class="btn-secondary">“Is Lemuria Real?” (Verdict)</button>
      </div>
    </div>
  </section>

  <!-- What is Lemuria? -->
  <section id="about" class="section">
    <div class="container">
      <h2>📜 What is Lemuria?</h2>
      <div class="grid-2">
        <div class="card">
          <h3>The Scientific Origin (1864)</h3>
          <p>In 1864, British zoologist <strong>Philip Sclater</strong> coined the term "Lemuria" to explain why lemur fossils and primates were abundant in Madagascar and India, but missing from mainland Africa.</p>
          <blockquote class="quote">
            “The anomalies of the Mammalian fauna of Madagascar can best be explained by supposing that... a large continent occupied parts of the Indian Ocean.”
          </blockquote>
          <p>Before plate tectonics was discovered, scientists believed land bridges sank beneath the sea.</p>
        </div>
        <div class="card">
          <h3>The Mythological Shift (1888+)</h3>
          <p>In 1888, occultist <strong>Helena Blavatsky</strong> incorporated Lemuria into Theosophy as the homeland of telepathic ancient root races.</p>
          <p>Later in colonial South India, Tamil scholars connected it with <strong>Kumari Kandam</strong>, the sunken cradle of civilization in Sangam poetry.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Interactive Map Section -->
  <section id="map" class="section bg-darker">
    <div class="container">
      <h2>🗺️ Interactive Indian Ocean Map</h2>
      <div class="disclaimer-box">
        <strong>⚠️ Geological Consensus:</strong> Lemuria is not accepted as a real lost continent by modern geology. Continental drift and plate tectonics explain the distribution of species.
      </div>
      <div class="map-stage" id="mapStage">
        <div class="pin" style="top: 60%; left: 35%;" onclick="showInfo('Madagascar', 'Home to over 100 endemic lemur species. Sparked Sclater’s original 1864 hypothesis.')">Madagascar 📍</div>
        <div class="pin" style="top: 30%; left: 60%;" onclick="showInfo('India', 'Shared related primate relatives (lorises) and flora, physically joined to Madagascar 88 Ma.')">India 📍</div>
        <div class="pin" style="top: 50%; left: 48%;" onclick="showInfo('Hypothetical Lemuria', 'Sclater proposed this central oceanic land bridge. Modern depth soundings prove 4,000m abyssal depth with no sunken continent.')">Hypothetical Lemuria 🌊</div>
        <div class="pin" style="top: 70%; left: 45%;" onclick="showInfo('Mauritia Microcontinent', 'Discovered in 2013: A real sliver of Precambrian continental crust beneath volcanic rocks, completely distinct from myth.')">Mauritia (2013) 🔬</div>
      </div>
      <div id="mapDetails" class="info-card">Click any region above to inspect historical claims vs geological reality.</div>
    </div>
  </section>

  <!-- Science vs Myth Section -->
  <section id="comparison" class="section">
    <div class="container">
      <h2>🔬 Science vs. Myth</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Scientific View</th>
            <th>Myth / Legend</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Origin</strong></td>
            <td>19th-century hypothesis to explain biogeography</td>
            <td>Ancient lost civilization with advanced spiritual technology</td>
          </tr>
          <tr>
            <td><strong>Mechanism</strong></td>
            <td>Sunken land bridge (superseded by Plate Tectonics)</td>
            <td>Cataclysmic deluge and volcanic sinkings</td>
          </tr>
          <tr>
            <td><strong>Status</strong></td>
            <td>Rejected: Buoyant continental crust cannot sink into basalt</td>
            <td>Continues in fantasy literature, comic books, and folklore</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- Timeline Section -->
  <section id="timeline" class="section bg-darker">
    <div class="container">
      <h2>⏳ Timeline</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="year">1860s</div>
          <div class="desc"><strong>Lemuria hypothesis proposed</strong> by zoologist Philip Lutley Sclater in "The Mammals of Madagascar".</div>
        </div>
        <div class="timeline-item">
          <div class="year">Late 1800s</div>
          <div class="desc"><strong>Occult association</strong> through Helena Blavatsky's "The Secret Doctrine" (1888) and Kumari Kandam revival.</div>
        </div>
        <div class="timeline-item">
          <div class="year">1912–1960s</div>
          <div class="desc"><strong>Plate Tectonics</strong> replaces land bridges; Alfred Wegener shows continents drift apart from Gondwana.</div>
        </div>
        <div class="timeline-item">
          <div class="year">Today</div>
          <div class="desc">Modern geology confirms plate tectonics; 2013 discovery of Mauritia microcontinent confirms continental fragmentation.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Sources Section -->
  <section id="sources" class="section">
    <div class="container">
      <h2>📚 Research Sources</h2>
      <div class="grid-3">
        <div class="source-card">
          <span class="tag">Historical Source</span>
          <h4>Sclater, Philip L. (1864)</h4>
          <p>The Mammals of Madagascar. The Quarterly Journal of Science, 1, 213–219.</p>
        </div>
        <div class="source-card">
          <span class="tag">Scientific Source</span>
          <h4>Torsvik, T. H. et al. (2013)</h4>
          <p>A Precambrian microcontinent in the Indian Ocean. Nature Geoscience, 6(3), 223–227.</p>
        </div>
        <div class="source-card">
          <span class="tag">Modern Interpretation</span>
          <h4>Ramaswamy, Sumathi (2004)</h4>
          <p>The Lost Land of Lemuria: Fabulous Geographies. Univ. of California Press.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Is Lemuria Real? Interactive Modal Panel -->
  <div id="realModal" class="modal">
    <div class="modal-content">
      <span class="close-btn" onclick="closeRealModal()">&times;</span>
      <h3>Is Lemuria Real?</h3>
      <p class="summary-answer"><strong>Quick Verdict:</strong> No. Lemuria is not a real sunken continent, but it began as a legitimate scientific hypothesis.</p>
      
      <div class="pillar">
        <h4>1. Historical Idea</h4>
        <p>Lemuria was once proposed as a scientific hypothesis in 1864 by Philip Sclater to explain certain biological distributions of lemurs between Madagascar and India.</p>
      </div>
      <div class="pillar">
        <h4>2. Modern Science</h4>
        <p>The hypothesis was superseded by continental drift and plate tectonics. Granitic continents cannot sink vertically into dense ocean floors; Madagascar and India drifted apart from Gondwana.</p>
      </div>
      <div class="pillar">
        <h4>3. Interesting Part</h4>
        <p>The idea survived and developed into a much broader myth about lost civilizations, root races in Theosophy, Tamil Kumari Kandam, and popular fantasy fiction.</p>
      </div>
      <button class="btn-primary" onclick="closeRealModal()">Close Panel</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`;

  const cssCode = `/* Modern Mysterious Ancient Ocean Styling */
:root {
  --bg-deep: #070d18;
  --bg-surface: #0e1a2c;
  --bg-darker: #050911;
  --text-main: #f1f5f9;
  --text-muted: #94a3b8;
  --accent-amber: #f59e0b;
  --accent-amber-hover: #fbbf24;
  --accent-cyan: #06b6d4;
  --border-color: #1e293b;
  --font-heading: 'Cinzel', Georgia, serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bg-deep);
  color: var(--text-main);
  font-family: var(--font-body);
  line-height: 1.6;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(7, 13, 24, 0.95);
  backdrop-filter: blur(8px);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid var(--border-color);
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-heading);
  letter-spacing: 1px;
}

.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  margin: 0 1rem;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--accent-amber);
}

/* Buttons */
.btn-primary {
  background: var(--accent-amber);
  color: #0f172a;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-block;
}

.btn-primary:hover {
  background: var(--accent-amber-hover);
  transform: translateY(-1px);
}

.btn-secondary {
  background: #0f172a;
  color: var(--accent-amber);
  border: 1px solid var(--accent-amber);
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

/* Hero */
.hero {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 1.5rem;
  background: radial-gradient(circle at 50% 30%, #13243c 0%, #070d18 80%);
  border-bottom: 1px solid var(--border-color);
}

.hero h1 {
  font-family: var(--font-heading);
  font-size: 3rem;
  color: #ffffff;
  margin: 1rem 0;
}

.badge {
  background: rgba(245, 158, 11, 0.15);
  color: var(--accent-amber);
  border: 1px solid rgba(245, 158, 11, 0.4);
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.hero p {
  max-width: 650px;
  margin: 0 auto 2rem;
  color: var(--text-muted);
  font-size: 1.1rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

/* Sections */
.section {
  padding: 4.5rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.bg-darker {
  background-color: var(--bg-darker);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.container h2 {
  font-family: var(--font-heading);
  font-size: 2rem;
  margin-bottom: 2rem;
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.card, .source-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  padding: 1.8rem;
  border-radius: 12px;
}

.quote {
  font-style: italic;
  margin: 1rem 0;
  padding-left: 1rem;
  border-left: 3px solid var(--accent-amber);
  color: #cbd5e1;
}

/* Map Section */
.disclaimer-box {
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  color: #fde68a;
  font-size: 0.9rem;
}

.map-stage {
  position: relative;
  height: 380px;
  background: #091526;
  border: 1px solid #1e3a5f;
  border-radius: 12px;
  overflow: hidden;
  background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 24px 24px;
}

.pin {
  position: absolute;
  background: #0f172a;
  border: 1px solid var(--accent-amber);
  color: #ffffff;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  cursor: pointer;
  font-weight: 600;
  transform: translate(-50%, -50%);
  transition: transform 0.2s, background 0.2s;
}

.pin:hover {
  transform: translate(-50%, -50%) scale(1.1);
  background: var(--accent-amber);
  color: #0f172a;
}

.info-card {
  margin-top: 1rem;
  background: var(--bg-surface);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  font-size: 0.95rem;
}

/* Comparison Table */
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--bg-surface);
  border-radius: 12px;
  overflow: hidden;
}

.comparison-table th, .comparison-table td {
  padding: 1rem 1.2rem;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
  font-size: 0.9rem;
}

.comparison-table th {
  background: #11223b;
  font-family: var(--font-heading);
  color: var(--accent-amber);
}

/* Timeline */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.timeline-item {
  display: flex;
  gap: 1.5rem;
  background: var(--bg-surface);
  padding: 1.2rem 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--accent-amber);
}

.year {
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--accent-amber);
  min-width: 100px;
}

/* Sources */
.tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--accent-cyan);
  margin-bottom: 0.5rem;
}

/* Modal */
.modal {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(6px);
  z-index: 200;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal.active {
  display: flex;
}

.modal-content {
  background: var(--bg-surface);
  border: 1px solid var(--accent-amber);
  max-width: 650px;
  width: 100%;
  padding: 2rem;
  border-radius: 16px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  font-size: 1.8rem;
  cursor: pointer;
  color: var(--text-muted);
}

.summary-answer {
  background: rgba(245, 158, 11, 0.1);
  padding: 0.8rem;
  border-radius: 8px;
  margin: 1rem 0 1.5rem;
  font-size: 0.95rem;
}

.pillar {
  margin-bottom: 1.2rem;
  padding-left: 1rem;
  border-left: 3px solid var(--accent-cyan);
}

.pillar h4 {
  color: #ffffff;
  margin-bottom: 0.3rem;
}`;

  const jsCode = `// Lemuria Research Interactive Controls

// Modal Toggle
function openRealModal() {
  document.getElementById('realModal').classList.add('active');
}

function closeRealModal() {
  document.getElementById('realModal').classList.remove('active');
}

// Bind Button
document.getElementById('isLemuriaRealBtn').addEventListener('click', openRealModal);

// Close modal when clicking outside modal-content
window.addEventListener('click', function (e) {
  const modal = document.getElementById('realModal');
  if (e.target === modal) {
    closeRealModal();
  }
});

// Interactive Map Region Inspector
function showInfo(region, detail) {
  const infoEl = document.getElementById('mapDetails');
  infoEl.innerHTML = '<strong>' + region + ':</strong> ' + detail;
  infoEl.style.borderColor = '#f59e0b';
}
`;

  const getActiveCode = () => {
    if (activeFile === 'html') return htmlCode;
    if (activeFile === 'css') return cssCode;
    return jsCode;
  };

  const getFileName = () => {
    if (activeFile === 'html') return 'index.html';
    if (activeFile === 'css') return 'style.css';
    return 'script.js';
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getActiveCode());
    setCopiedStatus(`Copied ${getFileName()} to clipboard!`);
    setTimeout(() => setCopiedStatus(null), 2500);
  };

  return (
    <div
      id="vscode-export-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="vscode-export-modal-card"
        className="relative w-full max-w-4xl bg-[#1A1511] border border-[#9A7B45] rounded shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="absolute top-2.5 left-2.5 w-2 h-2 rounded-full brass-stud z-20" />
        <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full brass-stud z-20" />
        <span className="absolute bottom-2.5 left-2.5 w-2 h-2 rounded-full brass-stud z-20" />
        <span className="absolute bottom-2.5 right-2.5 w-2 h-2 rounded-full brass-stud z-20" />

        {/* Modal Header */}
        <div className="px-6 py-5 bg-[#241B15] border-b border-[#463429] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded bg-[#1E1914] border border-[#9A7B45] text-[#9A7B45]">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#E6D7B9]">
                VS Code Vanilla Files Generator
              </h2>
              <p className="text-xs text-[#CDBB96] font-serif mt-0.5">
                Copy or paste the standalone <code className="text-[#FAF6EE] bg-[#1E1914] px-1 py-0.5 rounded border border-[#463429]">index.html</code>, <code className="text-[#FAF6EE] bg-[#1E1914] px-1 py-0.5 rounded border border-[#463429]">style.css</code>, and <code className="text-[#FAF6EE] bg-[#1E1914] px-1 py-0.5 rounded border border-[#463429]">script.js</code> directly into your VS Code expedition workspace!
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#CDBB96] hover:text-[#FAF6EE] rounded hover:bg-[#2B211A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* File Tabs & Copy Action */}
        <div className="px-6 py-3 bg-[#1E1914] border-b border-[#463429] flex flex-wrap items-center justify-between gap-3 font-carto">
          <div className="flex items-center gap-2">
            {(
              [
                { id: 'html', label: 'index.html' },
                { id: 'css', label: 'style.css' },
                { id: 'js', label: 'script.js' },
              ] as const
            ).map((file) => (
              <button
                key={file.id}
                onClick={() => setActiveFile(file.id)}
                className={`px-3 py-1.5 rounded text-xs font-mono font-semibold transition-colors flex items-center gap-1.5 ${
                  activeFile === file.id
                    ? 'bg-[#2B211A] text-[#FAF6EE] border border-[#9A7B45] shadow-sm'
                    : 'bg-[#1E1914] text-[#CDBB96]/70 hover:text-[#E6D7B9] border border-[#463429]'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-[#9A7B45]" />
                <span>{file.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded bg-[#2B211A] hover:bg-[#342820] text-[#FAF6EE] border border-[#9A7B45] font-bold text-xs font-carto uppercase tracking-wider transition-colors shadow-sm"
          >
            <Copy className="w-3.5 h-3.5 text-[#9A7B45]" />
            <span>Copy {getFileName()}</span>
          </button>
        </div>

        {copiedStatus && (
          <div className="px-6 py-2 bg-[#241B15] border-b border-[#53665C] text-[#FAF6EE] text-xs font-semibold flex items-center gap-2">
            <Check className="w-4 h-4 text-[#53665C]" />
            <span>{copiedStatus}</span>
          </div>
        )}

        {/* Code Preview Stage */}
        <div className="p-4 bg-[#140F0C] max-h-[460px] overflow-y-auto">
          <pre className="text-xs font-mono text-[#FAF6EE] leading-relaxed overflow-x-auto whitespace-pre p-4 bg-[#1A1511] rounded border border-[#463429]">
            <code>{getActiveCode()}</code>
          </pre>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-[#1E1914] border-t border-[#463429] flex items-center justify-between text-xs text-[#CDBB96] font-carto">
          <span>Folder structure: <code className="text-[#9A7B45]">lemuria-project/</code> (pure HTML+CSS+JS)</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#241B15] text-[#CDBB96] hover:text-[#FAF6EE] border border-[#463429] uppercase tracking-wider font-bold text-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
