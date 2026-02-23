/* ============================================
   GoldenFields - ai.js
   AI Chat Assistant with Web Speech API
   ============================================ */

let currentLang = 'en';
let isListening = false;
let recognition = null;

const greetings = {
    en: {
        text: "Hello! I'm **Krishi AI** - your smart agricultural assistant.\n\nI can help you with:\n- Crop prices & market trends\n- Disease diagnosis\n- Weather advisory\n- Government schemes\n- Smart irrigation tips\n\nWhat would you like to know today?",
        chips: ['Price of Rice', 'How to grow Tomato?', 'Govt schemes 2025', 'Disease diagnosis', 'Weather advisory']
    },
    hi: {
        text: "Namaste! Main **Krishi AI** hoon - aapka smart krishi sahayak.\n\nMain aapki in mein madad kar sakta hoon:\n- Fasal ki keemat\n- Rog nidaan\n- Mausam salah\n- Sarkari yojanaen\n\nAaj aap kya jaanna chahte hain?",
        chips: ['Chawal ka bhaav', 'Tamatar kaise ugaen?', 'PM Kisan Yojana', 'Rog nidaan']
    },
    or: {
        text: "Namaskar! Mun **Krishi AI** - aapananka smart krishi sahayak.\n\nMun aapananka ethere sahayya karipariba:\n- Fasal moolya\n- Rog nidaan\n- Panipag paramarsha\n\nAaji aapana k'ana janibaku chahunchanti?",
        chips: ['Chaula dara', 'Tamato chasa', 'Sarkari yojana']
    }
};

const kb = [
    // Prices
    {
        match: ['price of rice', 'rice price', 'rice rate', 'chawal', 'dhaan', 'chaula'],
        response: '**Rice Price Analysis**\n\n**Current MSP:** Rs.2,183/qtl (Govt)\n**Market Rate:** Rs.1,900 - Rs.2,400/qtl\n**Predicted (3 months):** Rs.2,050 - Rs.2,200/qtl\n\n**Trend:** Moderate upward - hold stock for 2-3 weeks if possible.\n\n*Tip: Sell on GoldenFields Marketplace to get 15-20% higher than local mandi!*'
    },
    {
        match: ['price of wheat', 'wheat price', 'gehu', 'gehun'],
        response: '**Wheat Price Analysis**\n\n**Current MSP:** Rs.2,275/qtl (Govt)\n**Market Rate:** Rs.2,100 - Rs.2,500/qtl\n**Predicted (3 months):** Rs.2,350 - Rs.2,600/qtl\n\n**Trend:** Bullish - global demand rising. Good time to hold.\n\n*Register on marketplace for daily price alerts!*'
    },
    {
        match: ['tomato price', 'tomato rate', 'tamatar', 'tamato'],
        response: '**Tomato Price Analysis**\n\n**Current Rate:** Rs.800 - Rs.1,800/qtl (varies by season)\n**Peak Season:** Oct-Dec (Rs.1,500+)\n**Lean Season:** Feb-Apr (Rs.400-700)\n\n**Warning:** Tomato is highly volatile. Sell in batches using our marketplace price alerts.\n\n*Use our Smart Price Predictor chart on the homepage!*'
    },
    {
        match: ['price of cotton', 'cotton price', 'kapas'],
        response: '**Cotton Price Analysis**\n\n**Current MSP:** Rs.6,620/qtl (Long staple)\n**Market Rate:** Rs.6,200 - Rs.7,200/qtl\n**Predicted:** Stable to slightly bullish\n\n*Export demand from Bangladesh & Vietnam driving prices up.*'
    },
    {
        match: ['onion price', 'pyaaz', 'kanda', 'pyaj'],
        response: '**Onion Price Update**\n\n**Current Rate:** Rs.900 - Rs.2,500/qtl\n**Export Rate:** Rs.2,800+/qtl\n**Trend:** Export ban lifted - prices expected to rise 20-30%\n\n*Export via GoldenFields buyer network for max profit!*'
    },

    // Diseases
    {
        match: ['disease', 'pest', 'yellow', 'brown spot', 'wilt', 'blight', 'rotting', 'rog'],
        response: '**Disease Advisory**\n\nDescribe the symptoms and I\'ll help diagnose:\n\n**Common issues I can help with:**\n- Yellow leaves: Nitrogen deficiency or viral infection\n- Brown spots: Fungal blight (Blast in rice)\n- Wilting: Root rot or bacterial wilt\n- White powder: Powdery mildew\n\nFor instant diagnosis, use the **Disease Detector** tool in the sidebar!'
    },

    // Weather
    {
        match: ['weather', 'rain', 'flood', 'drought', 'temperature', 'heat', 'mausam'],
        response: '**Weather Advisory**\n\n**Current Alerts (Odisha/East India):**\n- Heavy rainfall predicted in coastal areas\n- Northwest India: Heat advisory active\n\n**Farming Tips:**\n- Delay irrigation in rain-expected areas\n- Ideal time for paddy transplanting in Odisha\n- Install shade nets in hot zones\n\n*Select your district in our Weather Alert section for precise local alerts!*'
    },

    // Govt Schemes
    {
        match: ['scheme', 'yojana', 'subsidy', 'govt', 'government', 'pm kisan', 'pmfby', 'insurance'],
        response: '**Government Schemes for Farmers**\n\n**1. PM-KISAN**\nRs.6,000/year direct to bank. Apply: pmkisan.gov.in\n\n**2. PMFBY (Crop Insurance)**\nLoss-protection up to 95% at just 1.5-2% premium\n\n**3. KCC (Kisan Credit Card)**\nLoan up to Rs.3 lakhs at 4% interest\n\n**4. Soil Health Card**\nFree soil testing every 2 years\n\n**5. e-NAM Portal**\nOnline mandi for 1,000+ mandis\n\n*Enroll in our free "Govt Schemes 2025" course in the Learning Hub!*'
    },

    // Organic farming
    {
        match: ['organic', 'natural farming', 'jaivik', 'jeevamrit', 'organic kheti'],
        response: '**Organic Farming Guide**\n\n**Why Go Organic?**\n- 40-60% cost reduction (no chemicals)\n- 30-50% price premium in market\n- Eligible for PM Organic Certification (Rs.46,000 subsidy/3yr)\n\n**Getting Started:**\n1. Soil test -> apply organic amendments\n2. Use neem-based pesticides\n3. Start composting kitchen + farm waste\n4. Apply Jeevamrit (fermented cow dung solution)\n\n*Enroll in our "Organic Farming Mastery" course - FREE!*'
    },

    // Irrigation
    {
        match: ['irrigation', 'drip', 'sprinkler', 'water', 'jal', 'paani', 'sechana'],
        response: '**Smart Irrigation Guide**\n\n**Best Methods by Crop:**\n- Paddy: Flood irrigation (AWD technique saves 30% water)\n- Vegetables: Drip irrigation (saves 50% water)\n- Wheat: Sprinkler (saves 25-30%)\n\n**Government Subsidy:**\nPMKSY scheme covers 55% cost of drip system!\n\n**Tip:** Use tensiometers to check soil moisture before irrigating.\n\n*Check our "Smart Irrigation" course for certification!*'
    },

    // Market / sell
    {
        match: ['sell', 'market', 'mandi', 'buyer', 'purchase', 'bechna'],
        response: '**How to Sell on GoldenFields**\n\n1. Go to Marketplace page\n2. Click "Post Your Crop"\n3. Fill in crop details, quantity & expected price\n4. Buyers will contact you directly\n5. Negotiate & complete deal in 1-3 days\n\n**Benefits:**\n- Get 20-35% more than local mandi\n- Direct payment to bank account\n- Free traceability QR for your produce\n\n[Go to Marketplace](/marketplace.html)'
    },

    // Greetings
    {
        match: ['hello', 'hi', 'hey', 'namaste', 'namaskar', 'hola'],
        response: 'Hello! I\'m Krishi AI, your agricultural assistant!\n\nHow can I help you today?\n\nYou can ask me about:\n- Crop prices\n- Disease diagnosis\n- Government schemes\n- Irrigation tips\n- Weather alerts'
    }
];

function getResponse(input) {
    const q = input.toLowerCase().trim();
    for (const item of kb) {
        if (item.match.some(k => q.includes(k))) {
            return item.response;
        }
    }
    return `I'm still learning about "${input}".\n\nTry asking me about:\n- **Crop prices** (rice, wheat, tomato...)\n- **Government schemes** (PM-KISAN, PMFBY...)\n- **Disease diagnosis**\n- **Irrigation tips**\n- **How to sell your crop**`;
}

function renderMarkdown(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" style="color:var(--accent);">$1</a>')
        .replace(/\n/g, '<br/>');
}

function addMessage(role, text, isTyping = false) {
    const container = document.getElementById('chatMessages');
    if (!container) return null;
    const div = document.createElement('div');
    div.className = `message ${role}`;
    const iconEl = `<div class="msg-icon ${role === 'user' ? 'user-icon' : 'bot-icon'}">${role === 'user' ? 'U' : 'AI'}</div>`;
    const now = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

    if (isTyping) {
        div.innerHTML = `${iconEl}<div class="message-content"><div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div>`;
    } else {
        div.innerHTML = `${iconEl}<div class="message-content">${renderMarkdown(text)}<div class="timestamp">${now}</div></div>`;
    }
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return div;
}

function sendMessage(text) {
    const input = document.getElementById('chatInput');
    const msg = text || input?.value.trim();
    if (!msg) return;
    if (input) input.value = '';

    addMessage('user', msg);

    const typingEl = addMessage('bot', '', true);
    const delay = 900 + Math.random() * 700;

    setTimeout(() => {
        if (typingEl) typingEl.remove();
        const response = getResponse(msg);
        addMessage('bot', response);
    }, delay);
}

function handleKey(e) {
    if (e.key === 'Enter') sendMessage();
}

function setLang(lang, btn) {
    currentLang = lang;
    document.querySelectorAll('.lang-toggle button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const greeting = greetings[lang];
    if (greeting) {
        const container = document.getElementById('chatMessages');
        if (container) container.innerHTML = '';
        addMessage('bot', greeting.text);
        renderChips(greeting.chips);
    }
}

function renderChips(chips) {
    const el = document.getElementById('quickChips');
    if (!el) return;
    el.innerHTML = chips.map(c => `<div class="quick-chip" onclick="sendMessage('${c}')">${c}</div>`).join('');
}

// Voice Input
function toggleVoice() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        showToast('Voice not supported in this browser', '');
        return;
    }
    const btn = document.getElementById('voiceBtn');
    if (isListening) {
        recognition?.stop();
        isListening = false;
        btn.classList.remove('listening');
        btn.textContent = 'MIC';
        return;
    }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SR();
    recognition.lang = currentLang === 'hi' ? 'hi-IN' : currentLang === 'or' ? 'or-IN' : 'en-IN';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        const input = document.getElementById('chatInput');
        if (input) input.value = transcript;
        sendMessage(transcript);
    };
    recognition.onend = () => {
        isListening = false;
        btn.classList.remove('listening');
        btn.textContent = 'MIC';
    };
    recognition.start();
    isListening = true;
    btn.classList.add('listening');
    btn.textContent = '[REC]';
    showToast('Listening...', 'success');
}

// Disease Detector
function diagnoseCrop() {
    const symptom = document.getElementById('diseaseSymptom')?.value;
    const result = document.getElementById('diagnosisResult');
    if (!symptom || !result) { showToast('Select a symptom first', ''); return; }

    const diagnoses = {
        yellow_leaves: {
            disease: 'Nitrogen Deficiency / Yellow Mosaic Virus',
            severity: 'Moderate',
            treatment: 'Apply Urea (46% N) @ 20kg/acre. If viral, remove infected plants and apply imidacloprid to control whitefly vectors.',
            prevention: 'Balanced fertilization, crop rotation, use certified seeds.'
        },
        brown_spots: {
            disease: 'Fungal Blight (Blast / Helminthosporium)',
            severity: 'High',
            treatment: 'Spray Carbendazim 50% WP @ 1g/L water. Apply Tricyclazole for rice blast.',
            prevention: 'Use resistant varieties, avoid excess nitrogen, ensure good drainage.'
        },
        wilting: {
            disease: 'Root Rot / Bacterial Wilt (Ralstonia solanacearum)',
            severity: 'High',
            treatment: 'No chemical cure for bacterial wilt. Remove and destroy infected plants. Apply Copper Oxychloride for prevention.',
            prevention: 'Use disease-free seedlings, improve soil drainage, crop rotation.'
        },
        white_powder: {
            disease: 'Powdery Mildew (Erysiphe spp.)',
            severity: 'Moderate',
            treatment: 'Spray Wettable Sulfur 80% @ 3g/L or Hexaconazole @ 1ml/L water.',
            prevention: 'Avoid overhead irrigation, plant resistant varieties, space plants for air circulation.'
        },
        root_rot: {
            disease: 'Root Rot (Pythium / Rhizoctonia)',
            severity: 'High',
            treatment: 'Drench soil with Carbendazim + Mancozeb solution. Remove waterlogged conditions.',
            prevention: 'Improve drainage, avoid over-irrigation, treat seeds with fungicide before sowing.'
        },
        stunted: {
            disease: 'Soil Nutrient Deficiency / Nematode Infestation',
            severity: 'Moderate',
            treatment: 'Soil test for pH & nutrients. Apply balanced NPK. For nematodes: Carbofuran 3G @ 25kg/ha.',
            prevention: 'Regular soil testing, organic matter addition, crop rotation with non-host crops.'
        }
    };
    const d = diagnoses[symptom];
    if (!d) return;
    result.style.display = 'block';
    result.innerHTML = `
    <div style="background:#fce4ec;border-radius:8px;padding:12px;margin-bottom:10px;border-left:4px solid #f44336;">
      <strong style="color:#c62828;">Likely Disease:</strong><br/><span style="color:#333;">${d.disease}</span>
    </div>
    <div style="background:#fff3e0;border-radius:8px;padding:10px;margin-bottom:10px;border-left:4px solid #ff9800;">
      <strong>Severity:</strong> ${d.severity}
    </div>
    <div style="background:#e8f5e9;border-radius:8px;padding:10px;margin-bottom:8px;border-left:4px solid #4caf50;">
      <strong>Treatment:</strong><br/>${d.treatment}
    </div>
    <div style="background:#e3f2fd;border-radius:8px;padding:10px;border-left:4px solid #2196f3;">
      <strong>Prevention:</strong><br/>${d.prevention}
    </div>
  `;
}

// Live Prices sidebar
function renderLivePrices() {
    const prices = [
        { crop: 'Rice', price: 'Rs.1,900', change: '+2.3%', up: true },
        { crop: 'Wheat', price: 'Rs.2,280', change: '+1.1%', up: true },
        { crop: 'Tomato', price: 'Rs.1,050', change: '-5.2%', up: false },
        { crop: 'Cotton', price: 'Rs.6,400', change: '+3.8%', up: true },
        { crop: 'Onion', price: 'Rs.1,200', change: '+8.1%', up: true },
    ];
    const el = document.getElementById('liveprices');
    if (!el) return;
    el.innerHTML = prices.map(p => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #f0f0f0;">
      <span style="font-size:0.85rem;font-weight:600;">${p.crop}</span>
      <span style="font-size:0.85rem;font-weight:700;color:var(--primary);">${p.price}</span>
      <span style="font-size:0.75rem;padding:2px 8px;border-radius:50px;background:${p.up ? '#e8f5e9' : '#fce4ec'};color:${p.up ? '#2e7d32' : '#c62828'};">${p.change}</span>
    </div>
  `).join('');
}

// Daily Tips
function renderDailyTips() {
    const tips = [
        'Water in early morning to reduce evaporation by 40%',
        'Apply compost before monsoon for best absorption',
        'Check for pests every 7 days during growing season',
        'Register on PM-KISAN portal for Rs.6,000 annual benefit',
        'Do not burn stubble - it kills 90% of soil microbes',
    ];
    const el = document.getElementById('dailyTips');
    if (!el) return;
    const idx = new Date().getDay() % tips.length;
    el.innerHTML = `
    <div style="background:#e8f5e9;border-radius:10px;padding:14px;font-size:0.83rem;line-height:1.6;border-left:4px solid var(--secondary);">
      ${tips[idx]}
    </div>
    <div style="margin-top:12px;font-size:0.78rem;color:var(--text-mid);">Updated daily - ${new Date().toLocaleDateString('en-IN')}</div>
  `;
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    const greeting = greetings[currentLang];
    if (greeting) {
        addMessage('bot', greeting.text);
        renderChips(greeting.chips);
    }
    renderLivePrices();
    renderDailyTips();
});
