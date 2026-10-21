:root {
  --bg-1: #1f1133;
  --bg-2: #2f1d4d;
  --panel: rgba(30, 25, 53, 0.8);
  --panel-border: rgba(255, 255, 255, 0.12);
  --text: #f8f5ff;
  --muted: #d6cee8;
  --highlight: #f7b2d4;
  --highlight-2: #b4f5d0;
  --accent: #a78bfa;
  --accent-2: #f9a8d4;
  --shadow: rgba(12, 8, 18, 0.45);
  --danger: #ff8a8a;
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  min-height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(135deg, var(--bg-1), var(--bg-2));
  color: var(--text);
}

body {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 28px 18px 52px;
}

.page-shell {
  width: min(100%, 860px);
}

.topbar {
  margin-bottom: 24px;
}

.eyebrow {
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.72rem;
  color: var(--highlight-2);
  font-weight: 700;
}

h1 {
  margin: 0;
  font-size: clamp(2.1rem, 4vw, 3.1rem);
}

h2 {
  margin: 0;
  font-size: 1.3rem;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 1fr));
  gap: 16px;
  margin-bottom: 22px;
}

.stat-card,
.panel {
  background: var(--panel);
  border: 1px solid var(--panel-border);
  border-radius: 20px;
  box-shadow: 0 18px 40px var(--shadow);
  backdrop-filter: blur(12px);
}

.stat-card {
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-label {
  color: var(--muted);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.10em;
}

.stat-card strong {
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  color: var(--highlight);
}

.panel {
  padding: 22px 20px;
}

.form-panel { margin-bottom: 22px; }

#memoryForm {
  margin-top: 18px;
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
  font-size: 0.9rem;
}

input, textarea, button {
  font: inherit;
}

input, textarea {
  width: 100%;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  background: rgba(12, 8, 18, 0.28);
  color: var(--text);
  padding: 12px 14px;
}

textarea {
  resize: vertical;
  min-height: 90px;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 18px;
}

button {
  border: none;
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.2s ease;
}

button:hover { transform: translateY(-1px); }
button:active { transform: translateY(0); }

button.primary {
  background: linear-gradient(135deg, var(--highlight), var(--accent));
  color: #1b1028;
}

button.secondary {
  background: rgba(255,255,255,0.06);
  color: var(--text);
  border: 1px solid rgba(255,255,255,0.12);
}

.list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

#memoryList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.memory-item {
  background: rgba(255,255,255,0.025);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  padding: 16px 18px;
}

.memory-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
}

.memory-date {
  color: var(--highlight-2);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.memory-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
}

.memory-detail {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
}

.empty-state {
  text-align: center;
  color: var(--muted);
  padding: 18px 10px;
  border: 1px dashed rgba(255,255,255,0.2);
  border-radius: 12px;
}

@media (max-width: 640px) {
  .field-row {
    grid-template-columns: 1fr;
  }

  .summary-grid {
    grid-template-columns: 1fr;
  }

  .memory-top {
    flex-direction: column;
    align-items: flex-start;
  }
}
