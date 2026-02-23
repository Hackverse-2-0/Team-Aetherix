/* ============================================
   GoldenFields — main.js
   Shared utilities across all pages
   ============================================ */

// ---- Page Loader ----
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('done');
    }, 1300);
});

// ---- AOS Init ----
document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 700, once: true, offset: 60 });
    }
    initNavScroll();
    initCounters();
    initParticles();
    initPriceChart();
    calcIncome_ready();
    calcSustain_ready();
});

// ---- Navbar scroll effect ----
function initNavScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// ---- Mobile Menu ----
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (!menu) return;
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

// ---- Toast ----
function showToast(msg, type = '') {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.className = `toast show ${type}`;
    setTimeout(() => t.classList.remove('show'), 3200);
}

// ---- Modal helpers ----
function closeModal(id) {
    document.getElementById(id)?.classList.remove('open');
}
function openModal(id) {
    document.getElementById(id)?.classList.add('open');
}
// Close on overlay click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('open');
    }
});

// ---- Count-up animation ----
function initCounters() {
    const els = document.querySelectorAll('.counter,[data-count]');
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-count'));
            if (isNaN(target)) return;
            let start = 0;
            const duration = 1800;
            const step = target / (duration / 16);
            const timer = setInterval(() => {
                start += step;
                if (start >= target) { start = target; clearInterval(timer); }
                el.textContent = Math.round(start).toLocaleString('en-IN') + (el.closest('.hero-stat') ? (target > 100 ? 'M+' : '%') : (target > 999 ? '+' : '%'));
            }, 16);
            obs.unobserve(el);
        });
    }, { threshold: 0.5 });
    els.forEach(el => obs.observe(el));
}

// ---- Hero Particles ----
function initParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;
    const positions = [
        [10, 20], [25, 65], [40, 15], [60, 75], [75, 30], [85, 60], [15, 85], [50, 45], [90, 10], [35, 90]
    ];
    positions.forEach(([left, top], i) => {
        const span = document.createElement('span');
        span.style.cssText = `left:${left}%;top:${top}%;animation-delay:${i * 0.6}s;width:${4 + Math.random() * 6}px;height:${4 + Math.random() * 6}px;`;
        container.appendChild(span);
    });
}

// ---- Price Chart (Chart.js) ----
const priceData = {
    rice: { hist: [1650, 1720, 1780, 1800, 1850, 1900], pred: [1940, 1980, 2050], color: '#3A7D44' },
    wheat: { hist: [2100, 2080, 2150, 2200, 2280, 2320], pred: [2380, 2420, 2500], color: '#F4A261' },
    tomato: { hist: [800, 1200, 600, 1400, 900, 1100], pred: [1250, 1050, 1350], color: '#e53935' },
    cotton: { hist: [5800, 5950, 6100, 6300, 6250, 6400], pred: [6550, 6700, 6900], color: '#8e44ad' },
    sugarcane: { hist: [280, 290, 295, 300, 310, 315], pred: [320, 330, 340], color: '#2196f3' },
};
const months = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
let priceChart = null;
function initPriceChart() {
    const canvas = document.getElementById('priceChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    updateChart('rice');
}
function updateChart(crop, clickedEl) {
    // Update chip active state
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    if (clickedEl) clickedEl.classList.add('active');

    const d = priceData[crop];
    if (!d) return;
    const canvas = document.getElementById('priceChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const labels = months;
    const histLen = d.hist.length;

    if (priceChart) priceChart.destroy();
    priceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [
                {
                    label: 'Historical Price (₹/qtl)',
                    data: [...d.hist, null, null, null],
                    borderColor: d.color,
                    backgroundColor: d.color + '20',
                    fill: true, tension: 0.42, pointRadius: 5, pointBackgroundColor: d.color,
                    borderWidth: 2.5,
                },
                {
                    label: 'AI Predicted Price (₹/qtl)',
                    data: [
                        ...Array(histLen - 1).fill(null),
                        d.hist[histLen - 1],
                        ...d.pred
                    ],
                    borderColor: '#F4A261',
                    backgroundColor: 'rgba(244,162,97,0.08)',
                    fill: true, tension: 0.42, borderDash: [6, 4],
                    pointRadius: 5, pointBackgroundColor: '#F4A261',
                    borderWidth: 2.5,
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top', labels: { font: { family: 'Inter', size: 12 } } },
                tooltip: {
                    callbacks: {
                        label: ctx => `₹ ${ctx.parsed.y?.toLocaleString('en-IN') ?? '—'} / qtl`
                    }
                }
            },
            scales: {
                y: { ticks: { callback: v => '₹' + v.toLocaleString('en-IN') }, grid: { color: '#f0f0f0' } },
                x: { grid: { display: false } }
            }
        }
    });
}

// ---- Weather Alert System ----
const weatherData = {
    bhubaneswar: {
        title: 'Bhubaneswar', icon: '', temp: '34°C / Humid',
        alerts: [
            { type: 'warn', text: ' Heavy rain expected in next 48 hrs — delay sowing' },
            { type: 'info', text: ' Good for paddy transplanting post-rain' },
            { type: 'good', text: ' Moderate temp ideal for vegetable farming' },
        ]
    },
    puri: {
        title: 'Puri', icon: '', temp: '32°C / Coastal',
        alerts: [
            { type: 'danger', text: ' Cyclone warning — avoid field work for 3 days' },
            { type: 'warn', text: ' Strong winds (60 km/h) — secure greenhouse nets' },
        ]
    },
    lucknow: {
        title: 'Lucknow', icon: '', temp: '38°C / Hot & Dry',
        alerts: [
            { type: 'danger', text: ' Heatwave alert — irrigate crops in morning/evening' },
            { type: 'warn', text: ' Low humidity — watch for spider mites in cotton' },
            { type: 'info', text: ' Good time to harvest rabi wheat crop' },
        ]
    },
    patna: {
        title: 'Patna', icon: '', temp: '31°C / Pleasant',
        alerts: [
            { type: 'good', text: ' Ideal conditions for paddy growth (day 30-60)' },
            { type: 'info', text: ' Recommended: Apply second dose of nitrogen fertilizer' },
        ]
    },
    jaipur: {
        title: 'Jaipur', icon: '', temp: '41°C / Very Hot',
        alerts: [
            { type: 'danger', text: ' Extreme heat alert — drip irrigation mandatory' },
            { type: 'warn', text: ' Dust storm possible — protect saplings with shade net' },
        ]
    },
    nashik: {
        title: 'Nashik', icon: '', temp: '27°C / Cloudy',
        alerts: [
            { type: 'good', text: ' Excellent conditions for grape cultivation' },
            { type: 'info', text: ' Check for downy mildew on grape leaves after rain' },
            { type: 'good', text: ' Good time for onion bulb development' },
        ]
    },
    guntur: {
        title: 'Guntur', icon: '', temp: '35°C / Partly Cloudy',
        alerts: [
            { type: 'info', text: ' Red chilli harvest season — dry weather coming soon' },
            { type: 'warn', text: ' Light showers expected — protect drying chilli stock' },
        ]
    },
    mysore: {
        title: 'Mysore', icon: '', temp: '25°C / Moderate',
        alerts: [
            { type: 'good', text: ' Perfect weather for coffee & sandalwood cultivation' },
            { type: 'info', text: ' Good moisture levels — no irrigation needed for 3 days' },
        ]
    },
};
function showWeather() {
    const district = document.getElementById('districtSelect')?.value;
    const display = document.getElementById('weatherDisplay');
    const placeholder = document.getElementById('weatherPlaceholder');
    if (!district || !display) return;
    const data = weatherData[district];
    if (!data) return;
    document.getElementById('weatherIcon').textContent = data.icon;
    document.getElementById('weatherTitle').textContent = data.title;
    document.getElementById('weatherTemp').textContent = data.temp;
    const alertsEl = document.getElementById('weatherAlerts');
    alertsEl.innerHTML = data.alerts.map(a =>
        `<div class="alert-item ${a.type}"><span>${a.text}</span></div>`
    ).join('');
    display.style.display = 'block';
    if (placeholder) placeholder.style.display = 'none';
}

// ---- Income Calculator ----
const marketRates = { rice: 2200, wheat: 2800, tomato: 1800, cotton: 7200 };
function calcIncome_ready() { }
function calcIncome() {
    const crop = document.getElementById('calcCrop')?.value;
    const qty = parseFloat(document.getElementById('calcQty')?.value);
    const rate = parseFloat(document.getElementById('calcRate')?.value);
    if (!qty || !rate) { showToast(' Please fill all fields', ''); return; }
    const market = marketRates[crop] || rate * 1.35;
    const withOut = qty * rate;
    const withIn = qty * market;
    const extra = withIn - withOut;
    const pct = Math.round((rate / market) * 100);
    document.getElementById('withoutIncome').textContent = '₹' + withOut.toLocaleString('en-IN');
    document.getElementById('midmanPct').textContent = pct + '% of market rate';
    document.getElementById('withIncome').textContent = '₹' + withIn.toLocaleString('en-IN');
    document.getElementById('extraIncome').textContent = '+₹' + extra.toLocaleString('en-IN');
    document.getElementById('barWithout').style.width = pct + '%';
    document.getElementById('barWith').style.width = '100%';
    const res = document.getElementById('incomeResult');
    res.classList.add('show');
    showToast(' Income calculated!', 'success');
}

// ---- Sustainability Calculator ----
function calcSustainability() {
    const water = parseFloat(document.getElementById('waterUsage')?.value) || 0;
    const fertilizer = parseFloat(document.getElementById('fertilizerUsage')?.value) || 0;
    const pesticide = parseFloat(document.getElementById('pesticideUsage')?.value) || 0;
    const organic = parseFloat(document.getElementById('organicPct')?.value) || 0;

    if (!water && !fertilizer && !pesticide && !organic) {
        showToast(' Please fill at least one value', '');
        return;
    }

    // Scoring: lower = better for water/fert/pesticide; higher = better for organic
    let score = 100;
    if (water > 8000) score -= 20; else if (water > 5000) score -= 10;
    if (fertilizer > 100) score -= 15; else if (fertilizer > 60) score -= 7;
    if (pesticide > 8) score -= 20; else if (pesticide > 4) score -= 10;
    if (organic < 20) score -= 15; else if (organic < 50) score -= 7;
    score = Math.max(10, Math.min(100, score));

    let label = '', color = '', tips = '';
    if (score >= 80) {
        label = ' Excellent — Organic Certified Level';
        color = '#2e7d32';
        tips = ' Keep it up! Consider applying for PM Organic Certification';
    } else if (score >= 60) {
        label = ' Good — Sustainable Farming';
        color = '#558b2f';
        tips = ' Reduce fertilizer by 20% and recycle more organic waste';
    } else if (score >= 40) {
        label = ' Moderate — Needs Improvement';
        color = '#f57f17';
        tips = ' Switch to drip irrigation & reduce pesticide by 30%. Attend our free courses!';
    } else {
        label = ' Low — High Environmental Impact';
        color = '#c62828';
        tips = ' Urgent: Adopt integrated pest management & reduce water usage drastically.';
    }

    document.getElementById('sustainScore').textContent = score + '/100';
    document.getElementById('sustainScore').style.color = color;
    document.getElementById('sustainLabel').innerHTML = `<span style="color:${color};font-weight:600;">${label}</span>`;
    document.getElementById('sustainTips').innerHTML = `<div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:10px;margin-top:8px;">${tips}</div>`;
    document.getElementById('sustainResult').classList.add('show');
    showToast(' Sustainability score calculated!', 'success');
}
