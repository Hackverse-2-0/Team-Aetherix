/* =====================================================
   AGRIVOLUTION — Global Design System
   ===================================================== */

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');

/* ---------- CSS Variables ---------- */
:root {
  --primary: #0F3D2E;
  --primary-mid: #1a5c45;
  --secondary: #3A7D44;
  --accent: #F4A261;
  --accent-dark: #e08c4a;
  --bg: #F8F5E9;
  --bg-card: rgba(255, 255, 255, 0.65);
  --text-dark: #1a1a1a;
  --text-mid: #444;
  --text-light: #fff;
  --glass-blur: blur(18px);
  --shadow-sm: 0 4px 16px rgba(15, 61, 46, 0.12);
  --shadow-md: 0 8px 32px rgba(15, 61, 46, 0.18);
  --shadow-lg: 0 16px 48px rgba(15, 61, 46, 0.22);
  --radius-sm: 8px;
  --radius: 14px;
  --radius-lg: 24px;
  --transition: all 0.32s cubic-bezier(.4, 0, .2, 1);
}

/* ---------- Reset & Base ---------- */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text-dark);
  overflow-x: hidden;
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
  font-family: inherit;
  border: none;
  outline: none;
}

/* ---------- Scrollbar ---------- */
::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background: var(--bg);
}

::-webkit-scrollbar-thumb {
  background: var(--secondary);
  border-radius: 10px;
}

/* ---------- Typography ---------- */
h1,
h2,
h3,
h4 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  line-height: 1.2;
}

h1 {
  font-size: clamp(2.2rem, 5vw, 4rem);
}

h2 {
  font-size: clamp(1.6rem, 3vw, 2.6rem);
}

h3 {
  font-size: 1.3rem;
}

p {
  font-size: 1rem;
  line-height: 1.75;
}

/* ---------- Utilities ---------- */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  padding: 90px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 16px;
}

.section-subtitle {
  text-align: center;
  color: var(--text-mid);
  margin-bottom: 60px;
  font-size: 1.05rem;
}

.highlight {
  color: var(--secondary);
}

.accent-text {
  color: var(--accent);
}

.text-center {
  text-align: center;
}

.flex {
  display: flex;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

/* ---------- Buttons ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 30px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.97rem;
  transition: var(--transition);
  cursor: pointer;
  letter-spacing: 0.3px;
}

.btn-primary {
  background: linear-gradient(135deg, var(--secondary), var(--primary));
  color: #fff;
  box-shadow: 0 4px 18px rgba(58, 125, 68, 0.35);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(58, 125, 68, 0.45);
}

.btn-accent {
  background: linear-gradient(135deg, #f4a261, #e08c4a);
  color: #fff;
  box-shadow: 0 4px 18px rgba(244, 162, 97, 0.35);
}

.btn-accent:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(244, 162, 97, 0.45);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--secondary);
  color: var(--secondary);
}

.btn-outline:hover {
  background: var(--secondary);
  color: #fff;
}

.btn-ghost {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: var(--glass-blur);
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.28);
}

.btn-sm {
  padding: 8px 18px;
  font-size: 0.85rem;
}

.btn-lg {
  padding: 16px 40px;
  font-size: 1.07rem;
}

/* ---------- Glass Card ---------- */
.glass-card {
  background: var(--bg-card);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.glass-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.card-pad {
  padding: 28px;
}

/* ---------- Navbar ---------- */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 14px 0;
  background: rgba(15, 61, 46, 0.92);
  backdrop-filter: var(--glass-blur);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: var(--transition);
}

.navbar.scrolled {
  padding: 10px 0;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-logo span {
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 1.45rem;
  color: #fff;
  letter-spacing: -0.5px;
}

.nav-logo .logo-icon {
  font-size: 1.7rem;
}

.nav-logo-img {
  height: 36px;
  width: 36px;
  object-fit: contain;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.12);
  padding: 2px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.82);
  font-weight: 500;
  font-size: 0.93rem;
  padding: 7px 14px;
  border-radius: 8px;
  transition: var(--transition);
}

.nav-links a:hover,
.nav-links a.active {
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
}

.nav-cta {
  display: flex;
  gap: 10px;
  margin-left: 18px;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 6px;
}

.hamburger span {
  width: 24px;
  height: 2.5px;
  background: #fff;
  border-radius: 3px;
  transition: var(--transition);
}

/* ---------- Hero Section ---------- */
.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, #0F3D2E 0%, #1a5c45 40%, #2d7a52 70%, #0F3D2E 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 800'%3E%3Cellipse cx='720' cy='900' rx='900' ry='400' fill='rgba(58,125,68,0.15)'/%3E%3C/svg%3E") center/cover;
}

.hero-particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.hero-particles span {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(244, 162, 97, 0.6);
  animation: float-particle 6s infinite ease-in-out;
}

@keyframes float-particle {

  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 0.6;
  }

  50% {
    transform: translateY(-30px) scale(1.4);
    opacity: 1;
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  color: #fff;
  max-width: 640px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(244, 162, 97, 0.2);
  border: 1px solid rgba(244, 162, 97, 0.5);
  color: var(--accent);
  padding: 7px 16px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 22px;
  letter-spacing: 0.5px;
}

.hero h1 {
  color: #fff;
  margin-bottom: 18px;
}

.hero h1 span {
  color: var(--accent);
}

.hero-tagline {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 14px;
  letter-spacing: 2px;
  font-weight: 500;
}

.hero-desc {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.72);
  margin-bottom: 36px;
  max-width: 520px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 50px;
}

.hero-stats {
  display: flex;
  gap: 36px;
  flex-wrap: wrap;
}

.hero-stat {
  text-align: center;
}

.hero-stat .num {
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
  font-family: 'Poppins', sans-serif;
}

.hero-stat .lbl {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.5px;
  margin-top: 2px;
}

.hero-visual {
  position: relative;
  z-index: 2;
}

.hero-image-wrap {
  width: 460px;
  height: 460px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(58, 125, 68, 0.35), rgba(244, 162, 97, 0.25));
  backdrop-filter: var(--glass-blur);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: hero-float 4s ease-in-out infinite;
}

@keyframes hero-float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-18px);
  }
}

.floating-badge {
  position: absolute;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: var(--glass-blur);
  border-radius: 12px;
  padding: 12px 18px;
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: center;
  gap: 10px;
}

.floating-badge .icon {
  font-size: 1.5rem;
}

.floating-badge .info strong {
  display: block;
  font-size: 0.9rem;
  color: var(--primary);
  font-weight: 700;
}

.floating-badge .info span {
  font-size: 0.75rem;
  color: var(--text-mid);
}

.fb-1 {
  top: 16%;
  right: -10%;
  animation: badge-float 3s ease-in-out infinite;
}

.fb-2 {
  bottom: 22%;
  left: -8%;
  animation: badge-float 3.5s ease-in-out infinite 0.5s;
}

.fb-3 {
  top: 60%;
  right: -12%;
  animation: badge-float 3.2s ease-in-out infinite 1s;
}

@keyframes badge-float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 2;
}

.scroll-indicator span {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 1px;
}

.scroll-arrow {
  width: 28px;
  height: 28px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bounce 2s infinite;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0)
  }

  50% {
    transform: translateY(6px)
  }
}

/* ---------- Problem Section ---------- */
.problem-section {
  background: #fff;
}

.problem-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 50px;
}

.problem-card {
  border-radius: var(--radius-lg);
  padding: 40px 36px;
  position: relative;
  overflow: hidden;
}

.problem-card.farmer {
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  border: 1.5px solid #a5d6a7;
}

.problem-card.buyer {
  background: linear-gradient(135deg, #fff3e0, #ffe0b2);
  border: 1.5px solid #ffcc80;
}

.problem-card h3 {
  font-size: 1.4rem;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.problem-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px 16px;
  margin-bottom: 12px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: var(--radius-sm);
  backdrop-filter: blur(8px);
  transition: var(--transition);
}

.problem-item:hover {
  transform: translateX(6px);
  background: rgba(255, 255, 255, 0.95);
}

.problem-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.problem-item strong {
  display: block;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--primary);
}

.problem-item p {
  font-size: 0.82rem;
  color: var(--text-mid);
  margin-top: 2px;
}

/* ---------- Solution Section ---------- */
.solution-section {
  background: var(--bg);
}

.solution-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.solution-card {
  border-radius: var(--radius-lg);
  padding: 36px 28px;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6));
  border: 1.5px solid rgba(58, 125, 68, 0.15);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.solution-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  opacity: 0;
  transition: var(--transition);
}

.solution-card:hover::before {
  opacity: 1;
}

.solution-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.solution-card:hover * {
  color: #fff !important;
}

.sol-icon {
  font-size: 3.2rem;
  margin-bottom: 18px;
  position: relative;
  z-index: 1;
  display: block;
}

.sol-title {
  font-size: 1.2rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
  color: var(--primary);
  margin-bottom: 10px;
}

.sol-desc {
  font-size: 0.85rem;
  color: var(--text-mid);
  position: relative;
  z-index: 1;
}

.sol-arrow {
  display: inline-block;
  margin-top: 16px;
  font-size: 1.2rem;
  position: relative;
  z-index: 1;
  transition: var(--transition);
}

.solution-card:hover .sol-arrow {
  transform: translateX(6px);
}

/* ---------- Stats Strip ---------- */
.stats-strip {
  background: linear-gradient(135deg, var(--primary), var(--primary-mid));
  padding: 60px 0;
}

.stats-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  text-align: center;
}

.stat-item {
  color: #fff;
}

.stat-num {
  font-size: 2.8rem;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  color: var(--accent);
  line-height: 1;
}

.stat-lbl {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.75);
  margin-top: 6px;
  letter-spacing: 0.5px;
}

/* ---------- Features (Bonus) Strip ---------- */
.features-section {
  background: #fff;
}

.feat-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.feat-card {
  border-radius: var(--radius-lg);
  padding: 36px 32px;
  border: 1.5px solid rgba(58, 125, 68, 0.12);
  background: var(--bg);
  position: relative;
  overflow: hidden;
  transition: var(--transition);
}

.feat-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.feat-card.fc-green::after {
  background: linear-gradient(90deg, var(--primary), var(--secondary));
}

.feat-card.fc-orange::after {
  background: linear-gradient(90deg, var(--accent), #e08c4a);
}

.feat-card.fc-blue::after {
  background: linear-gradient(90deg, #2196f3, #0d47a1);
}

.feat-card.fc-purple::after {
  background: linear-gradient(90deg, #9c27b0, #6a1b9a);
}

.feat-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.feat-icon {
  font-size: 2.8rem;
  margin-bottom: 16px;
}

.feat-card h3 {
  color: var(--primary);
  margin-bottom: 10px;
}

.feat-card p {
  font-size: 0.88rem;
  color: var(--text-mid);
  margin-bottom: 18px;
}

/* ---------- Calculator / Tracker Cards ---------- */
.calc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-top: 20px;
}

.calc-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 32px;
  border: 1.5px solid rgba(58, 125, 68, 0.12);
  box-shadow: var(--shadow-sm);
}

.calc-card h3 {
  color: var(--primary);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-mid);
  margin-bottom: 6px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 11px 14px;
  border: 1.5px solid #e0e0e0;
  border-radius: var(--radius-sm);
  font-family: 'Inter', sans-serif;
  font-size: 0.92rem;
  background: #fff;
  outline: none;
  transition: var(--transition);
  color: var(--text-dark);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--secondary);
  box-shadow: 0 0 0 3px rgba(58, 125, 68, 0.12);
}

.result-box {
  background: linear-gradient(135deg, var(--primary), var(--primary-mid));
  color: #fff;
  border-radius: var(--radius);
  padding: 20px 22px;
  margin-top: 16px;
  display: none;
}

.result-box.show {
  display: block;
}

.result-box .result-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.result-box .result-row:last-child {
  border: none;
}

.result-box .result-row .val {
  font-weight: 700;
  color: var(--accent);
}

.comparison-bar {
  height: 12px;
  border-radius: 6px;
  margin: 8px 0;
  transition: width 0.8s ease;
}

.bar-without {
  background: #e57373;
}

.bar-with {
  background: #66bb6a;
}

/* ---------- Chart Section ---------- */
.chart-section {
  background: var(--bg);
}

.chart-wrap {
  background: #fff;
  border-radius: var(--radius-lg);
  padding: 32px;
  box-shadow: var(--shadow-sm);
  max-width: 900px;
  margin: 0 auto;
}

.chart-controls {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 24px;
  justify-content: center;
}

.chip {
  padding: 7px 18px;
  border-radius: 50px;
  font-size: 0.83rem;
  font-weight: 600;
  border: 1.5px solid #e0e0e0;
  background: #fff;
  cursor: pointer;
  transition: var(--transition);
}

.chip.active,
.chip:hover {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}

/* ---------- Weather Section ---------- */
.weather-section {
  background: linear-gradient(135deg, #e8f5e9, #f1f8e9);
}

.weather-card {
  background: #fff;
  border-radius: var(--radius-lg);
  padding: 36px;
  box-shadow: var(--shadow-sm);
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.weather-icon {
  font-size: 5rem;
  margin: 20px 0;
  animation: weather-pulse 2s ease-in-out infinite;
}

@keyframes weather-pulse {

  0%,
  100% {
    transform: scale(1)
  }

  50% {
    transform: scale(1.08)
  }
}

.weather-alerts {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
}

.alert-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 500;
}

.alert-item.warn {
  background: #fff3e0;
  border-left: 4px solid #ff9800;
  color: #e65100;
}

.alert-item.good {
  background: #e8f5e9;
  border-left: 4px solid #4caf50;
  color: #1b5e20;
}

.alert-item.info {
  background: #e3f2fd;
  border-left: 4px solid #2196f3;
  color: #0d47a1;
}

.alert-item.danger {
  background: #fce4ec;
  border-left: 4px solid #f44336;
  color: #b71c1c;
}

/* ---------- CTA Section ---------- */
.cta-section {
  background: linear-gradient(135deg, var(--primary), #1a5c45, #2d7a52);
  padding: 90px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 50%, rgba(244, 162, 97, 0.1), transparent 70%);
}

.cta-section * {
  position: relative;
  z-index: 1;
}

.cta-section h2 {
  color: #fff;
  margin-bottom: 16px;
}

.cta-section p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 36px;
  font-size: 1.05rem;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* ---------- Footer ---------- */
.footer {
  background: #0a2a1e;
  color: rgba(255, 255, 255, 0.75);
  padding: 60px 0 28px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-brand .logo {
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 12px;
}

.footer-brand p {
  font-size: 0.87rem;
  line-height: 1.7;
}

.footer-col h4 {
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 18px;
}

.footer-col a {
  display: block;
  font-size: 0.86rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
  transition: var(--transition);
}

.footer-col a:hover {
  color: var(--accent);
  transform: translateX(4px);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p {
  font-size: 0.82rem;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-links a {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: var(--transition);
}

.social-links a:hover {
  background: var(--secondary);
  transform: translateY(-3px);
}

/* ---------- Modals ---------- */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  z-index: 9000;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-overlay.open {
  display: flex;
}

.modal-box {
  background: #fff;
  border-radius: var(--radius-lg);
  padding: 40px;
  max-width: 540px;
  width: 100%;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  animation: modal-in 0.35s cubic-bezier(.4, 0, .2, 1);
}

@keyframes modal-in {
  from {
    transform: scale(0.88) translateY(20px);
    opacity: 0
  }

  to {
    transform: scale(1) translateY(0);
    opacity: 1
  }
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 20px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  cursor: pointer;
  transition: var(--transition);
}

.modal-close:hover {
  background: #e0e0e0;
}

/* ---------- Toast ---------- */
.toast {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 9999;
  background: var(--primary);
  color: #fff;
  padding: 14px 24px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: var(--shadow-lg);
  transform: translateY(100px);
  opacity: 0;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 10px;
}

.toast.show {
  transform: translateY(0);
  opacity: 1;
}

.toast.success {
  background: var(--secondary);
}

.toast.error {
  background: #e53935;
}

/* ---------- Page Banner ---------- */
.page-banner {
  background: linear-gradient(135deg, var(--primary), #1a5c45);
  padding: 120px 0 60px;
  text-align: center;
  color: #fff;
}

.page-banner h1 {
  margin-bottom: 12px;
}

.page-banner p {
  color: rgba(255, 255, 255, 0.78);
  font-size: 1.05rem;
}

.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
}

.breadcrumb a {
  color: var(--accent);
}

/* ---------- Marketplace ---------- */
.filter-bar {
  background: #fff;
  border-radius: var(--radius);
  padding: 20px 24px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 32px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;
}

.filter-bar select,
.filter-bar input {
  padding: 9px 14px;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  background: #f9f9f9;
  outline: none;
  transition: var(--transition);
  flex: 1;
  min-width: 130px;
}

.filter-bar select:focus,
.filter-bar input:focus {
  border-color: var(--secondary);
}

.crop-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.crop-card {
  background: #fff;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  border: 1.5px solid rgba(58, 125, 68, 0.1);
}

.crop-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-5px);
}

.crop-image {
  height: 180px;
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  position: relative;
}

.crop-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--accent);
  color: #fff;
  padding: 3px 10px;
  border-radius: 50px;
  font-size: 0.72rem;
  font-weight: 700;
}

.crop-info {
  padding: 20px;
}

.crop-name {
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--primary);
  margin-bottom: 6px;
}

.crop-meta {
  font-size: 0.82rem;
  color: var(--text-mid);
  margin-bottom: 14px;
  display: flex;
  gap: 14px;
}

.crop-price {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--secondary);
  margin-bottom: 16px;
}

.crop-price span {
  font-size: 0.78rem;
  color: var(--text-mid);
  font-weight: 400;
}

.crop-actions {
  display: flex;
  gap: 8px;
}

.crop-actions .btn {
  flex: 1;
  justify-content: center;
}

.empty-state {
  text-align: center;
  padding: 80px 20px;
  color: var(--text-mid);
}

.empty-state .icon {
  font-size: 4rem;
  margin-bottom: 16px;
}

/* ---------- AI Page ---------- */
.chat-container {
  background: #fff;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  border: 1.5px solid rgba(58, 125, 68, 0.12);
}

.chat-header {
  background: linear-gradient(135deg, var(--primary), var(--primary-mid));
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 14px;
}

.chat-avatar {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
}

.chat-info {
  flex: 1;
}

.chat-info strong {
  color: #fff;
  font-size: 1rem;
  display: block;
}

.chat-info span {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.78rem;
}

.chat-status {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #4caf50;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.3);
}

.chat-controls {
  display: flex;
  gap: 10px;
  padding: 12px 24px;
  background: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
  flex-wrap: wrap;
  align-items: center;
}

.lang-toggle {
  display: flex;
  gap: 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1.5px solid #ddd;
}

.lang-toggle button {
  padding: 6px 14px;
  font-size: 0.8rem;
  font-weight: 600;
  background: #fff;
  color: var(--text-mid);
  transition: var(--transition);
}

.lang-toggle button.active {
  background: var(--primary);
  color: #fff;
}

.chat-messages {
  height: 420px;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fafafa;
}

.message {
  display: flex;
  gap: 12px;
  max-width: 82%;
}

.message.user {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.message-content {
  background: #fff;
  border-radius: 14px;
  padding: 12px 16px;
  font-size: 0.9rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #eee;
}

.message.user .message-content {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #fff;
  border-color: transparent;
}

.message-content .timestamp {
  font-size: 0.7rem;
  opacity: 0.6;
  margin-top: 5px;
}

.msg-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.bot-icon {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #fff;
}

.user-icon {
  background: var(--accent);
  color: #fff;
}

.typing-indicator {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 14px;
}

.typing-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--secondary);
  animation: typing 1.2s infinite ease-in-out;
}

.typing-dot:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {

  0%,
  80%,
  100% {
    transform: scale(0.6);
    opacity: 0.5
  }

  40% {
    transform: scale(1);
    opacity: 1
  }
}

.chat-input-area {
  padding: 16px 20px;
  border-top: 1px solid #e0e0e0;
  background: #fff;
  display: flex;
  gap: 10px;
  align-items: center;
}

.chat-input {
  flex: 1;
  padding: 12px 16px;
  border: 1.5px solid #e0e0e0;
  border-radius: 50px;
  font-family: 'Inter', sans-serif;
  font-size: 0.92rem;
  outline: none;
  transition: var(--transition);
}

.chat-input:focus {
  border-color: var(--secondary);
}

.voice-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: var(--transition);
}

.voice-btn:hover {
  background: var(--secondary);
  color: #fff;
}

.voice-btn.listening {
  background: #f44336;
  color: #fff;
  animation: pulse-mic 1s infinite;
}

@keyframes pulse-mic {

  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.4)
  }

  50% {
    box-shadow: 0 0 0 12px rgba(244, 67, 54, 0)
  }
}

.send-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: var(--transition);
}

.send-btn:hover {
  transform: scale(1.08);
}

.quick-chips {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 12px 20px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
}

.quick-chip {
  padding: 6px 14px;
  border-radius: 50px;
  border: 1.5px solid rgba(58, 125, 68, 0.25);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--secondary);
  background: rgba(58, 125, 68, 0.05);
  cursor: pointer;
  transition: var(--transition);
}

.quick-chip:hover {
  background: var(--secondary);
  color: #fff;
  border-color: var(--secondary);
}

/* ---------- Learning Hub ---------- */
.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 28px;
}

.course-card {
  background: #fff;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  border: 1.5px solid rgba(0, 0, 0, 0.05);
}

.course-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-6px);
}

.course-thumb {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4.5rem;
  position: relative;
}

.course-body {
  padding: 22px;
}

.course-tag {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 50px;
  display: inline-block;
  margin-bottom: 10px;
}

.tag-free {
  background: #e8f5e9;
  color: #2e7d32;
}

.tag-govt {
  background: #e3f2fd;
  color: #1565c0;
}

.tag-advanced {
  background: #fff3e0;
  color: #e65100;
}

.course-card h3 {
  font-size: 1.05rem;
  color: var(--primary);
  margin-bottom: 8px;
}

.course-card p {
  font-size: 0.83rem;
  color: var(--text-mid);
  margin-bottom: 16px;
}

.progress-bar {
  height: 7px;
  background: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 6px;
}

.progress-fill {
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(90deg, var(--secondary), var(--primary));
  transition: width 0.8s ease;
}

.progress-label {
  font-size: 0.75rem;
  color: var(--text-mid);
  margin-bottom: 14px;
}

.course-meta {
  display: flex;
  gap: 16px;
  font-size: 0.78rem;
  color: var(--text-mid);
  margin-bottom: 16px;
}

.course-meta span {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* ---------- Community ---------- */
.community-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 32px;
}

.post-form {
  background: #fff;
  border-radius: var(--radius-lg);
  padding: 28px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 28px;
  border: 1.5px solid rgba(58, 125, 68, 0.1);
}

.post-form h3 {
  color: var(--primary);
  margin-bottom: 18px;
}

.post-item {
  background: #fff;
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 20px;
  border: 1.5px solid rgba(0, 0, 0, 0.06);
  transition: var(--transition);
}

.post-item:hover {
  box-shadow: var(--shadow-md);
}

.post-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.post-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.post-author strong {
  display: block;
  font-size: 0.92rem;
  color: var(--primary);
}

.post-author span {
  font-size: 0.77rem;
  color: var(--text-mid);
}

.post-content {
  font-size: 0.92rem;
  color: var(--text-dark);
  line-height: 1.7;
  margin-bottom: 16px;
}

.post-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.upvote-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 50px;
  border: 1.5px solid #e0e0e0;
  font-size: 0.82rem;
  font-weight: 600;
  background: #fff;
  transition: var(--transition);
  cursor: pointer;
}

.upvote-btn:hover,
.upvote-btn.voted {
  background: var(--secondary);
  color: #fff;
  border-color: var(--secondary);
}

.comment-area {
  margin-top: 14px;
  border-top: 1px solid #f0f0f0;
  padding-top: 14px;
  display: none;
}

.comment-area.show {
  display: block;
}

.comment-item {
  font-size: 0.83rem;
  padding: 8px 12px;
  background: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 8px;
}

.comment-item strong {
  color: var(--primary);
}

.sidebar-card {
  background: #fff;
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 24px;
  border: 1.5px solid rgba(0, 0, 0, 0.06);
}

.sidebar-card h3 {
  font-size: 1rem;
  color: var(--primary);
  margin-bottom: 16px;
}

.expert-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}

.expert-item:last-child {
  border: none;
}

.expert-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff9800, #e65100);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1rem;
}

.expert-info strong {
  display: block;
  font-size: 0.85rem;
  color: var(--primary);
}

.expert-info span {
  font-size: 0.74rem;
  color: var(--text-mid);
}

/* ---------- QR Modal ---------- */
.qr-box {
  text-align: center;
  padding: 20px 0;
}

.qr-placeholder {
  width: 180px;
  height: 180px;
  margin: 0 auto 20px;
  border-radius: 12px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  border: 2px dashed #ccc;
}

.trace-steps {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
}

.trace-step {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  background: #f9f9f9;
  border-radius: 8px;
}

.trace-step .step-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
}

.trace-step .step-info strong {
  display: block;
  font-size: 0.87rem;
  color: var(--primary);
}

.trace-step .step-info span {
  font-size: 0.77rem;
  color: var(--text-mid);
}

/* ---------- Quiz ---------- */
.quiz-modal .modal-box {
  max-width: 620px;
}

.quiz-progress {
  height: 6px;
  background: #e0e0e0;
  border-radius: 10px;
  margin-bottom: 24px;
}

.quiz-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--secondary), var(--primary));
  border-radius: 10px;
  transition: width 0.5s;
}

.quiz-question {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 20px;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
}

.quiz-option {
  padding: 14px 18px;
  border-radius: var(--radius-sm);
  border: 1.5px solid #e0e0e0;
  cursor: pointer;
  font-size: 0.92rem;
  transition: var(--transition);
  background: #fff;
}

.quiz-option:hover {
  border-color: var(--secondary);
  background: #f1f8e9;
}

.quiz-option.correct {
  background: #e8f5e9;
  border-color: #4caf50;
  color: #1b5e20;
}

.quiz-option.wrong {
  background: #fce4ec;
  border-color: #f44336;
  color: #b71c1c;
}

/* ---------- Sustainability Tracker ---------- */
.sustain-score {
  text-align: center;
  margin-top: 20px;
  font-size: 3rem;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
}

.score-ring {
  display: inline-block;
  position: relative;
}

.score-ring svg {
  transform: rotate(-90deg);
}

.score-ring .ring-bg {
  fill: none;
  stroke: #e0e0e0;
  stroke-width: 8;
}

.score-ring .ring-fill {
  fill: none;
  stroke-linecap: round;
  stroke-width: 8;
  stroke-dasharray: 283;
  transition: stroke-dashoffset 1s ease;
}

/* ---------- Responsive ---------- */
@media (max-width: 1024px) {
  .solution-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .stats-inner {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }

  .hero-visual {
    display: none;
  }

  .problem-grid {
    grid-template-columns: 1fr;
  }

  .grid-2,
  .grid-3,
  .grid-4,
  .calc-grid,
  .community-layout {
    grid-template-columns: 1fr;
  }

  .feat-grid {
    grid-template-columns: 1fr;
  }

  .solution-grid {
    grid-template-columns: 1fr 1fr;
  }

  .nav-links {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .nav-cta {
    display: none;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .community-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .solution-grid {
    grid-template-columns: 1fr;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .stats-inner {
    grid-template-columns: 1fr 1fr;
  }
}

/* ---------- AOS overrides ---------- */
[data-aos] {
  transition-property: transform, opacity;
}

/* ---------- Loader ---------- */
.page-loader {
  position: fixed;
  inset: 0;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  transition: opacity 0.5s, visibility 0.5s;
}

.page-loader.done {
  opacity: 0;
  visibility: hidden;
}

.loader-inner {
  text-align: center;
  color: #fff;
}

.loader-logo {
  font-size: 3rem;
  margin-bottom: 12px;
}

.loader-text {
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
}

.loader-bar {
  width: 180px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  margin: 16px auto 0;
  overflow: hidden;
}

.loader-fill {
  height: 100%;
  background: var(--accent);
  border-radius: 4px;
  animation: load-bar 1.2s ease forwards;
}

@keyframes load-bar {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}
