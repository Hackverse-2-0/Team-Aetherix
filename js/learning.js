/* ============================================
   GoldenFields — learning.js
   Course cards, progress, quiz, certificate
   ============================================ */

const COURSES = [
    {
        id: 'c1', category: 'free',
        thumb: { bg: 'linear-gradient(135deg,#e8f5e9,#a5d6a7)', icon: '' },
        tag: 'Free', tagClass: 'tag-free',
        title: 'Organic Farming Mastery',
        desc: 'Learn chemical-free farming methods that boost yield by 40% and earn premium prices.',
        lessons: 12, duration: '4 hrs', level: 'Beginner',
        progress: 65,
        quiz: [
            { q: 'What is the key benefit of Jeevamrit?', opts: ['Faster growth', 'Activates soil microbes', 'Kills pests', 'Adds nitrogen only'], ans: 1 },
            { q: 'Which certification is offered by Government of India for organic farmers?', opts: ['ISO 9001', 'Jaivik Bharat (NPOP)', 'FSSAI Organic', 'BIS Mark'], ans: 1 },
            { q: 'Composting takes approximately how many weeks?', opts: ['1-2 weeks', '4-8 weeks', '3-4 days', '6 months'], ans: 1 },
        ],
        modules: [
            { title: 'Introduction to Organic Farming', desc: 'Learn what organic farming is and why it\'s the future of sustainable agriculture.' },
            { title: 'Soil Health & Composting', desc: 'Master compost making, vermicompost, and how to revive dead soil naturally.' },
            { title: 'Natural Pest Management', desc: 'Neem-based sprays, pheromone traps, and companion planting techniques.' },
            { title: 'Jeevamrit & Panchagavya', desc: 'Prepare powerful biofertilizers from cow products at zero cost.' },
            { title: 'Organic Certification Process', desc: 'Step-by-step guide to getting certified and accessing premium markets.' },
        ]
    },
    {
        id: 'c2', category: 'govt',
        thumb: { bg: 'linear-gradient(135deg,#e3f2fd,#90caf9)', icon: '' },
        tag: 'Govt Schemes', tagClass: 'tag-govt',
        title: 'Government Schemes 2025',
        desc: 'Complete guide to PM-KISAN, PMFBY, KCC, and 15+ schemes you may be missing out on.',
        lessons: 8, duration: '2.5 hrs', level: 'All Levels',
        progress: 30,
        quiz: [
            { q: 'How much annual benefit does PM-KISAN provide?', opts: ['₹3,000', '₹6,000', '₹12,000', '₹10,000'], ans: 1 },
            { q: 'PMFBY stands for?', opts: ['Prime Minister Fasal Bima Yojana', 'Pradhan Mantri Fasal Bima Yojana', 'PM Farm Benefits Yojana', 'None'], ans: 1 },
            { q: 'What is the interest rate on KCC loans?', opts: ['7%', '12%', '4%', '9%'], ans: 2 },
        ],
        modules: [
            { title: 'PM-KISAN: Registration & Benefits', desc: 'How to apply and receive ₹6,000/year in 3 installments.' },
            { title: 'Pradhan Mantri Fasal Bima Yojana', desc: 'Protect your crops against natural calamities at just 1.5-2% premium.' },
            { title: 'Kisan Credit Card (KCC)', desc: 'Get credit up to ₹3 lakhs at 4% interest — apply online.' },
            { title: 'Soil Health Card Scheme', desc: 'Free soil testing every 2 years through your local agriculture office.' },
        ]
    },
    {
        id: 'c3', category: 'advanced',
        thumb: { bg: 'linear-gradient(135deg,#fff3e0,#ffcc80)', icon: '' },
        tag: 'Advanced', tagClass: 'tag-advanced',
        title: 'Smart Irrigation Techniques',
        desc: 'Save 50% water with drip irrigation, sprinklers, and AI-based soil moisture monitoring.',
        lessons: 10, duration: '3 hrs', level: 'Intermediate',
        progress: 0,
        quiz: [
            { q: 'Which irrigation method is most water-efficient?', opts: ['Flood irrigation', 'Furrow irrigation', 'Drip irrigation', 'Basin irrigation'], ans: 2 },
            { q: 'AWD (Alternate Wetting & Drying) is used for?', opts: ['Wheat', 'Paddy', 'Cotton', 'Sugarcane'], ans: 1 },
            { q: 'What subsidy does PMKSY provide for drip irrigation?', opts: ['25%', '35%', '55%', '80%'], ans: 2 },
        ],
        modules: [
            { title: 'Principles of Efficient Water Management', desc: 'Understand water needs of different crops at different growth stages.' },
            { title: 'Drip Irrigation: Setup & Maintenance', desc: 'Complete guide to installing and maintaining drip systems cost-effectively.' },
            { title: 'Sprinkler Systems', desc: 'Best practices for wheat, mustard, and horticultural crops.' },
            { title: 'Soil Moisture Monitoring', desc: 'Using simple tensiometers and IoT sensors to optimize irrigation.' },
        ]
    },
    {
        id: 'c4', category: 'free',
        thumb: { bg: 'linear-gradient(135deg,#fce4ec,#f48fb1)', icon: '' },
        tag: 'Free', tagClass: 'tag-free',
        title: 'Crop Disease Management',
        desc: 'Identify, prevent, and treat 20+ common crop diseases using integrated pest management.',
        lessons: 14, duration: '5 hrs', level: 'Intermediate',
        progress: 10,
        quiz: [
            { q: 'Blast disease in rice is caused by?', opts: ['Bacteria', 'Virus', 'Fungus', 'Nematode'], ans: 2 },
            { q: 'IPM stands for?', opts: ['Individual Plant Management', 'Integrated Pest Management', 'International Plant Medicine', 'Irrigation and Pest Monitoring'], ans: 1 },
            { q: 'Yellow mosaic virus spreads through?', opts: ['Soil', 'Water', 'Whitefly', 'Wind'], ans: 2 },
        ],
        modules: [
            { title: 'Introduction to Plant Pathology', desc: 'Understand how diseases spread and how to identify them early.' },
            { title: 'Fungal Diseases & Treatment', desc: 'Blast, blight, wilt, smut — complete treatment protocols.' },
            { title: 'Insect Pest Control', desc: 'Stem borers, aphids, whitefly — biological and chemical control.' },
            { title: 'Integrated Pest Management', desc: 'Holistic approach combining biological, cultural, and chemical methods.' },
        ]
    },
    {
        id: 'c5', category: 'govt',
        thumb: { bg: 'linear-gradient(135deg,#e8eaf6,#9fa8da)', icon: '' },
        tag: 'Govt Schemes', tagClass: 'tag-govt',
        title: 'Digital Farming & e-NAM',
        desc: 'Sell your produce on 1,000+ e-NAM mandis and leverage digital tools for better prices.',
        lessons: 6, duration: '2 hrs', level: 'Beginner',
        progress: 0,
        quiz: [
            { q: 'e-NAM full form is?', opts: ['Electronic National Agriculture Market', 'Electronic National Agri Mandi', 'Both A and B', 'None'], ans: 2 },
            { q: 'How many mandis are on e-NAM platform?', opts: ['500+', '1000+', '2000+', '250+'], ans: 1 },
            { q: 'What document is required for e-NAM registration?', opts: ['PAN Card', 'Aadhaar Card', 'Land Record', 'All of the above'], ans: 3 },
        ],
        modules: [
            { title: 'Introduction to e-NAM', desc: 'How the digital mandi works and how to register your farm.' },
            { title: 'Price Discovery Online', desc: 'Get live prices, compare mandis, and choose the best market.' },
            { title: 'Mobile Apps for Farmers', desc: 'mKisan, Kisan Suvidha, Agmarknet — master these free tools.' },
        ]
    },
    {
        id: 'c6', category: 'advanced',
        thumb: { bg: 'linear-gradient(135deg,#e0f2f1,#80cbc4)', icon: '' },
        tag: 'Advanced', tagClass: 'tag-advanced',
        title: 'Precision Agriculture & AI',
        desc: 'Use satellite imagery, drones, and AI-based crop monitoring to maximize farm efficiency.',
        lessons: 10, duration: '4 hrs', level: 'Advanced',
        progress: 0,
        quiz: [
            { q: 'NDVI stands for?', opts: ['Normalized Difference Vegetation Index', 'Natural Drone Vision Interface', 'National Digital Vegetation Index', 'None'], ans: 0 },
            { q: 'Which technology is used for soil nutrient mapping?', opts: ['GPS', 'Satellite Remote Sensing', 'IoT Sensors', 'All of above'], ans: 3 },
            { q: 'Drone spraying reduces pesticide use by approximately?', opts: ['10%', '25-30%', '40-50%', '5%'], ans: 2 },
        ],
        modules: [
            { title: 'Remote Sensing Basics', desc: 'Use satellite images to monitor crop health at no cost.' },
            { title: 'Drone Applications in Agriculture', desc: 'Surveying, spraying, seeding with drones — regulations and costs.' },
            { title: 'AI Crop Advisors', desc: 'How AI predicts yield, detects disease, and optimizes resources.' },
        ]
    },
];

let currentCourse = null;
let currentFilter = 'all';
let quizState = { idx: 0, score: 0, questions: [] };

function filterCourses(cat, btn) {
    currentFilter = cat;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    renderCourses();
}

function renderCourses() {
    const grid = document.getElementById('courseGrid');
    if (!grid) return;
    const filtered = currentFilter === 'all' ? COURSES : COURSES.filter(c => c.category === currentFilter);
    grid.innerHTML = filtered.map((c, i) => `
    <div class="course-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 80}">
      <div class="course-thumb" style="background:${c.thumb.bg}">
        <span>${c.thumb.icon}</span>
      </div>
      <div class="course-body">
        <span class="course-tag ${c.tagClass}">${c.tag}</span>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
        <div class="course-meta">
          <span> ${c.lessons} Lessons</span>
          <span> ${c.duration}</span>
        </div>
        <div class="course-meta">
          <span> ${c.level}</span>
        </div>
        ${c.progress > 0 ? `
          <div class="progress-bar"><div class="progress-fill" style="width:${c.progress}%"></div></div>
          <div class="progress-label">${c.progress}% Complete</div>
        ` : '<div style="height:16px;"></div>'}
        <button class="btn btn-primary btn-sm" style="width:100%;" onclick="openCourse('${c.id}')">
          ${c.progress > 0 ? ' Continue' : ' Start Free'} Course
        </button>
      </div>
    </div>
  `).join('');
    if (typeof AOS !== 'undefined') AOS.refresh();
}

function openCourse(id) {
    currentCourse = COURSES.find(c => c.id === id);
    if (!currentCourse) return;
    const content = document.getElementById('courseModuleContent');
    if (!content) return;
    content.innerHTML = `
    <h2 style="color:var(--primary);margin-bottom:6px;">${currentCourse.title}</h2>
    <p style="color:var(--text-mid);font-size:0.87rem;margin-bottom:20px;">${currentCourse.desc}</p>
    <div style="background:#f5f5f5;border-radius:10px;padding:16px;margin-bottom:20px;">
      <div style="display:flex;gap:24px;flex-wrap:wrap;font-size:0.85rem;">
        <span> ${currentCourse.lessons} Lessons</span>
        <span> ${currentCourse.duration}</span>
        <span> ${currentCourse.level}</span>
      </div>
    </div>
    <h3 style="color:var(--primary);margin-bottom:14px;"> Course Modules</h3>
    ${currentCourse.modules.map((m, i) => `
      <div style="display:flex;gap:14px;padding:14px;background:${currentCourse.progress > (i * (100 / currentCourse.modules.length)) ? '#e8f5e9' : '#f9f9f9'};border-radius:10px;margin-bottom:10px;border-left:4px solid ${currentCourse.progress > (i * (100 / currentCourse.modules.length)) ? 'var(--secondary)' : '#e0e0e0'};">
        <div style="width:32px;height:32px;border-radius:50%;background:${currentCourse.progress > (i * (100 / currentCourse.modules.length)) ? 'var(--secondary)' : '#ddd'};color:#fff;display:flex;align-items:center;justify-content:center;font-size:0.8rem;font-weight:700;flex-shrink:0;">${currentCourse.progress > (i * (100 / currentCourse.modules.length)) ? '' : i + 1}</div>
        <div>
          <div style="font-weight:600;font-size:0.92rem;color:var(--primary);">${m.title}</div>
          <div style="font-size:0.8rem;color:var(--text-mid);margin-top:2px;">${m.desc}</div>
        </div>
      </div>
    `).join('')}
    <div style="display:flex;gap:12px;margin-top:20px;">
      <button class="btn btn-primary" style="flex:1;" onclick="startQuiz('${currentCourse.id}')"> Take Quiz & Earn Certificate</button>
      <button class="btn btn-outline" onclick="closeModal('courseModal')">Close</button>
    </div>
  `;
    openModal('courseModal');
}

function startQuiz(id) {
    currentCourse = COURSES.find(c => c.id === id);
    if (!currentCourse) return;
    closeModal('courseModal');
    quizState = { idx: 0, score: 0, questions: currentCourse.quiz };
    renderQuizQuestion();
    openModal('quizModal');
}

function renderQuizQuestion() {
    const content = document.getElementById('quizContent');
    if (!content) return;
    const { idx, questions } = quizState;
    if (idx >= questions.length) {
        showQuizResult();
        return;
    }
    const q = questions[idx];
    const pct = Math.round((idx / questions.length) * 100);
    content.innerHTML = `
    <div style="margin-bottom:6px;font-size:0.82rem;color:var(--text-mid);">Question ${idx + 1} of ${questions.length}</div>
    <div class="quiz-progress"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-options">
      ${q.opts.map((o, i) => `<div class="quiz-option" onclick="answerQuiz(${i})">${String.fromCharCode(65 + i)}. ${o}</div>`).join('')}
    </div>
  `;
}

function answerQuiz(selected) {
    const { idx, questions } = quizState;
    const q = questions[idx];
    const opts = document.querySelectorAll('.quiz-option');
    opts.forEach((el, i) => {
        if (i === q.ans) el.classList.add('correct');
        else if (i === selected && selected !== q.ans) el.classList.add('wrong');
        el.style.pointerEvents = 'none';
    });
    if (selected === q.ans) quizState.score++;
    setTimeout(() => {
        quizState.idx++;
        renderQuizQuestion();
    }, 1100);
}

function showQuizResult() {
    const { score, questions } = quizState;
    const pct = Math.round((score / questions.length) * 100);
    const passed = pct >= 60;
    const content = document.getElementById('quizContent');
    if (!content) return;
    content.innerHTML = `
    <div style="text-align:center;padding:20px 0;">
      <div style="font-size:3.5rem;margin-bottom:12px;">${passed ? '' : ''}</div>
      <h2 style="color:var(--primary);margin-bottom:8px;">${passed ? 'Quiz Passed!' : 'Keep Practicing!'}</h2>
      <div style="font-size:2.5rem;font-weight:800;color:${passed ? 'var(--secondary)' : '#e53935'};margin:16px 0;">${pct}%</div>
      <p style="color:var(--text-mid);margin-bottom:24px;">You scored ${score} out of ${questions.length} questions correctly.</p>
      ${passed ? `
        <button class="btn btn-primary btn-lg" onclick="claimCertificate()"> Claim Certificate</button>
      ` : `
        <button class="btn btn-primary" onclick="startQuiz('${currentCourse?.id}')"> Retry Quiz</button>
      `}
      <button class="btn btn-outline" style="margin-left:10px;" onclick="closeModal('quizModal')">Close</button>
    </div>
  `;
}

function claimCertificate() {
    closeModal('quizModal');
    document.getElementById('certCourse').textContent = currentCourse?.title || 'Course';
    const certName = localStorage.getItem('agri_username') || 'Farmer';
    document.getElementById('certName').textContent = certName;
    openModal('certModal');
    showToast(' Certificate earned!', 'success');
    // Update progress
    const course = COURSES.find(c => c.id === currentCourse?.id);
    if (course) course.progress = 100;
    renderCourses();
}

document.addEventListener('DOMContentLoaded', () => {
    renderCourses();
});
