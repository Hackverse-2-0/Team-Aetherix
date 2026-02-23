/* ============================================
   GoldenFields — marketplace.js
   ============================================ */

const CROP_EMOJIS = {
    Rice: '', Wheat: '', Tomato: '', Cotton: '',
    Sugarcane: '', Maize: '', Potato: '', Onion: ''
};

const SEED_CROPS = [
    { id: 'c1', name: 'Ramesh Kumar', crop: 'Rice', qty: 40, price: 1850, location: 'Puri, Odisha', grade: 'Grade A (Premium)', desc: 'IR-64 variety, freshly harvested. Clean, sun-dried. Perfect for wholesale.', date: Date.now() - 86400000 * 2 },
    { id: 'c2', name: 'Suresh Yadav', crop: 'Wheat', qty: 80, price: 2180, location: 'Lucknow, Uttar Pradesh', grade: 'Grade A (Premium)', desc: 'HD-2967 high-yield variety from certified organic farm.', date: Date.now() - 86400000 * 1 },
    { id: 'c3', name: 'Anita Patil', crop: 'Tomato', qty: 15, price: 900, location: 'Nashik, Maharashtra', grade: 'Grade B (Standard)', desc: 'Fresh red tomatoes. Ideal for processing and retail. Available immediately.', date: Date.now() - 86400000 * 3 },
    { id: 'c4', name: 'Baldev Singh', crop: 'Cotton', qty: 60, price: 6400, location: 'Amritsar, Punjab', grade: 'Grade A (Premium)', desc: 'BT Cotton, 40mm staple length. Good quality, low moisture.', date: Date.now() - 86400000 * 0.5 },
    { id: 'c5', name: 'Parvati Devi', crop: 'Onion', qty: 25, price: 1200, location: 'Nashik, Maharashtra', grade: 'Grade B (Standard)', desc: 'Medium-sized red onion, 3 months storage life. Excellent for export.', date: Date.now() - 86400000 * 4 },
    { id: 'c6', name: 'Gopal Rao', crop: 'Maize', qty: 55, price: 1450, location: 'Guntur, Andhra Pradesh', grade: 'Grade A (Premium)', desc: 'Yellow maize, 14% moisture. Ideal for poultry feed & starch industry.', date: Date.now() - 86400000 * 1.5 },
];

function getStorage() {
    try { return JSON.parse(localStorage.getItem('agri_crops') || '[]'); } catch { return []; }
}
function saveStorage(data) {
    localStorage.setItem('agri_crops', JSON.stringify(data));
}

function getAllCrops() {
    const stored = getStorage();
    return [...stored, ...SEED_CROPS];
}

function renderCrops() {
    const search = (document.getElementById('searchInput')?.value || '').toLowerCase();
    const cropF = (document.getElementById('filterCrop')?.value || '').toLowerCase();
    const stateF = (document.getElementById('filterState')?.value || '').toLowerCase();
    const sortF = document.getElementById('filterSort')?.value || '';

    let crops = getAllCrops();

    if (search) crops = crops.filter(c =>
        c.crop.toLowerCase().includes(search) ||
        c.location.toLowerCase().includes(search) ||
        c.name.toLowerCase().includes(search)
    );
    if (cropF) crops = crops.filter(c => c.crop.toLowerCase() === cropF);
    if (stateF) crops = crops.filter(c => c.location.toLowerCase().includes(stateF));

    if (sortF === 'price-asc') crops.sort((a, b) => a.price - b.price);
    else if (sortF === 'price-desc') crops.sort((a, b) => b.price - a.price);
    else if (sortF === 'newest') crops.sort((a, b) => (b.date || 0) - (a.date || 0));

    const grid = document.getElementById('cropGrid');
    const empty = document.getElementById('emptyState');
    if (!grid) return;

    if (!crops.length) {
        grid.style.display = 'none';
        if (empty) empty.style.display = 'block';
        return;
    }
    grid.style.display = 'grid';
    if (empty) empty.style.display = 'none';

    grid.innerHTML = crops.map((c, i) => `
    <div class="crop-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 80}">
      <div class="crop-image">
        <span>${CROP_EMOJIS[c.crop] || ''}</span>
        <div class="crop-badge">${c.grade.split(' ')[0]} ${c.grade.split(' ')[1]}</div>
      </div>
      <div class="crop-info">
        <div class="crop-name">${c.crop}</div>
        <div class="crop-meta">
          <span> ${c.location}</span>
          <span> ${c.name}</span>
        </div>
        <div class="crop-meta">
          <span> ${c.qty} Qtl available</span>
        </div>
        <div class="crop-price">₹${c.price.toLocaleString('en-IN')} <span>/ Quintal</span></div>
        <p style="font-size:0.78rem;color:var(--text-mid);margin-bottom:14px;">${c.desc}</p>
        <div class="crop-actions">
          <button class="btn btn-primary btn-sm" onclick="openBuyModal('${c.id}','${c.crop}','${c.name}',${c.price})"> Buy Now</button>
          <button class="btn btn-outline btn-sm" onclick="openTraceModal('${c.id}','${c.crop}','${c.name}','${c.location}')"> Trace</button>
        </div>
      </div>
    </div>
  `).join('');

    if (typeof AOS !== 'undefined') AOS.refresh();
}

function openPostModal() {
    openModal('postModal');
}

function postCrop() {
    const name = document.getElementById('p_name')?.value.trim();
    const crop = document.getElementById('p_crop')?.value;
    const qty = parseInt(document.getElementById('p_qty')?.value);
    const price = parseInt(document.getElementById('p_price')?.value);
    const location = document.getElementById('p_location')?.value.trim();
    const grade = document.getElementById('p_grade')?.value;
    const desc = document.getElementById('p_desc')?.value.trim();

    if (!name || !qty || !price || !location) {
        showToast(' Please fill all required fields', '');
        return;
    }
    const entry = {
        id: 'u' + Date.now(),
        name, crop, qty, price, location, grade,
        desc: desc || 'Fresh produce. Contact for bulk discounts.',
        date: Date.now()
    };
    const stored = getStorage();
    stored.unshift(entry);
    saveStorage(stored);
    closeModal('postModal');
    showToast(' Crop listed successfully!', 'success');
    renderCrops();
    // Clear form
    ['p_name', 'p_qty', 'p_price', 'p_location', 'p_desc'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
}

function openBuyModal(id, crop, farmer, price) {
    document.getElementById('buyDetails').textContent = `${crop} from ${farmer} — ₹${price.toLocaleString('en-IN')}/qtl`;
    document.getElementById('orderId').textContent = 'ORD-' + Date.now().toString().slice(-8);
    openModal('buyModal');
    showToast(` Purchasing ${crop}...`, 'success');
}

function openTraceModal(id, crop, farmer, location) {
    document.getElementById('traceQR').textContent = '';
    // Animate QR
    setTimeout(() => {
        document.getElementById('traceQR').innerHTML = `
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:3px;padding:16px;">
        ${Array(25).fill(0).map(() => `<div style="height:${Math.random() > 0.5 ? '18' : '24'}px;background:${Math.random() > 0.5 ? '#0F3D2E' : '#fff'};border-radius:2px;"></div>`).join('')}
      </div>
    `;
    }, 300);

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    document.getElementById('traceSteps').innerHTML = `
    <div class="trace-step"><div class="step-icon"></div><div class="step-info"><strong>Farm Origin</strong><span>${location} · Certified Organic Farm</span></div></div>
    <div class="trace-step"><div class="step-icon">‍</div><div class="step-info"><strong>Farmer: ${farmer}</strong><span>Aadhaar-verified · 12 yrs farming</span></div></div>
    <div class="trace-step"><div class="step-icon"></div><div class="step-info"><strong>Quality Testing</strong><span>NABL Certified Lab · Grade A Passed · ${dateStr}</span></div></div>
    <div class="trace-step"><div class="step-icon"></div><div class="step-info"><strong>Packaging & Storage</strong><span>Hygienic cold-chain packaging maintained</span></div></div>
    <div class="trace-step"><div class="step-icon"></div><div class="step-info"><strong>Logistics Partner</strong><span>AgriTransit — GPS tracked · On time</span></div></div>
    <div class="trace-step"><div class="step-icon"></div><div class="step-info"><strong>Blockchain Verified</strong><span>Hash: 0x${Math.random().toString(16).slice(2, 18).toUpperCase()}</span></div></div>
  `;
    openModal('traceModal');
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    renderCrops();
});
