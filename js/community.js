/* ============================================
   GoldenFields — community.js
   Posts, comments, upvote — LocalStorage based
   ============================================ */

const SEED_POSTS = [
    { id: 'p1', author: 'Ramesh Kumar', location: 'Puri, Odisha', avatar: 'R', category: 'tip', content: ' **Tip for Paddy Farmers:** After transplanting, add 20kg Zinc sulfate per acre. My yield increased by 28% this season! The key is proper spacing (20x15 cm) and line transplanting for easy weeding.', votes: 47, date: Date.now() - 3600000 * 5, comments: [{ author: 'Suresh', text: 'Great tip Ramesh ji! Will try this season' }, { author: 'Anita', text: 'Zinc sulfate is game changer, agreed!' }] },
    { id: 'p2', author: 'Suresh Yadav', location: 'Lucknow, UP', avatar: 'S', category: 'market', content: ' **Market Update — Wheat:** Buyers in Lucknow mandi paying ₹2,280/qtl today. If you can hold for 2 more weeks, prices expected to touch ₹2,400. My agent told me exports are strong this year!', votes: 31, date: Date.now() - 3600000 * 12, comments: [{ author: 'Gopal', text: 'Thank you bhai, very useful info' }] },
    { id: 'p3', author: 'Dr. Priya Sharma', location: 'Expert · ICAR Delhi', avatar: 'P', category: 'tip', content: ' **Disease Alert:** Seeing high incidence of bacterial leaf blight in Kharif rice this week. Symptoms: water-soaked lesions on leaf edges turning yellow then brown. Treatment: Stop nitrogen application, spray Copper Oxychloride @ 3g/L. Prevention is better — use resistant varieties!', votes: 89, date: Date.now() - 3600000 * 24, comments: [{ author: 'Anita', text: 'Thank you Doctor!' }, { author: 'Farmer Raj', text: 'My fields have this! Thank you so much' }] },
    { id: 'p4', author: 'Anita Desai', location: 'Nashik, Maharashtra', avatar: 'A', category: 'success', content: ' **Success Story:** I switched to organic onion farming 2 years ago. First year was hard — yield dropped 15%. But second year, I got ₹2,800/qtl vs ₹1,200 in conventional market! The premium buyers found me through GoldenFields marketplace. Net income up 85%! ', votes: 124, date: Date.now() - 3600000 * 36, comments: [{ author: 'Ramesh', text: 'Inspiring Anita ji! ' }, { author: 'New Farmer', text: 'Which organic techniques did you use?' }] },
    { id: 'p5', author: 'Baldev Singh', location: 'Amritsar, Punjab', avatar: 'B', category: 'question', content: ' **Question:** My cotton crop (BT-hybrid) is showing early wilting in some patches. Soil moisture is adequate. Could it be Fusarium wilt? Has anyone faced this? What treatment worked for you? The affected area is about 0.5 acre.', votes: 18, date: Date.now() - 3600000 * 8, comments: [] },
];

function getPosts() {
    try {
        const stored = JSON.parse(localStorage.getItem('agri_posts') || '[]');
        return [...stored, ...SEED_POSTS];
    } catch { return [...SEED_POSTS]; }
}

function savePosts(posts) {
    const userPosts = posts.filter(p => !SEED_POSTS.find(s => s.id === p.id));
    localStorage.setItem('agri_posts', JSON.stringify(userPosts));
}

function getVotedPosts() {
    try { return JSON.parse(localStorage.getItem('agri_voted') || '[]'); } catch { return []; }
}

let currentFilter = 'all';

function filterPosts(cat, btn) {
    currentFilter = cat;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    renderPosts();
}

function renderPosts() {
    const feed = document.getElementById('postsFeed');
    if (!feed) return;
    let posts = getPosts();
    if (currentFilter !== 'all') posts = posts.filter(p => p.category === currentFilter);
    posts.sort((a, b) => (b.date || 0) - (a.date || 0));

    const voted = getVotedPosts();
    const catEmoji = { question: '', tip: '', market: '', success: '' };
    const timeAgo = (ts) => {
        const mins = Math.floor((Date.now() - ts) / 60000);
        if (mins < 60) return `${mins}m ago`;
        const hrs = Math.floor(mins / 60);
        if (hrs < 24) return `${hrs}h ago`;
        return `${Math.floor(hrs / 24)}d ago`;
    };

    feed.innerHTML = posts.map(p => `
    <div class="post-item" id="post-${p.id}" data-aos="fade-up">
      <div class="post-header">
        <div class="post-avatar">${p.avatar || p.author[0]}</div>
        <div class="post-author">
          <strong>${p.author}</strong>
          <span> ${p.location} · ${timeAgo(p.date)}</span>
        </div>
        <div style="margin-left:auto;">
          <span style="font-size:0.72rem;padding:3px 10px;border-radius:50px;background:#f5f5f5;font-weight:600;">${catEmoji[p.category] || ''} ${p.category}</span>
        </div>
      </div>
      <div class="post-content">${renderMd(p.content)}</div>
      <div class="post-actions">
        <button class="upvote-btn ${voted.includes(p.id) ? 'voted' : ''}" onclick="upvote('${p.id}')">
           <span id="votes-${p.id}">${p.votes}</span>
        </button>
        <button class="upvote-btn" onclick="toggleComments('${p.id}')">
           ${p.comments?.length || 0} Comments
        </button>
        <button class="upvote-btn" onclick="sharePost('${p.id}')"> Share</button>
      </div>
      <div class="comment-area" id="comments-${p.id}">
        ${(p.comments || []).map(c => `<div class="comment-item"><strong>${c.author}:</strong> ${c.text}</div>`).join('')}
        <div style="display:flex;gap:8px;margin-top:10px;">
          <input type="text" id="commentInput-${p.id}" placeholder="Write a comment..." style="flex:1;padding:8px 12px;border:1.5px solid #e0e0e0;border-radius:8px;font-family:'Inter',sans-serif;font-size:0.83rem;outline:none;"/>
          <button class="btn btn-primary btn-sm" onclick="addComment('${p.id}')">Send</button>
        </div>
      </div>
    </div>
  `).join('');

    if (typeof AOS !== 'undefined') AOS.refresh();
}

function renderMd(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>');
}

function upvote(id) {
    const voted = getVotedPosts();
    if (voted.includes(id)) { showToast('Already voted!', ''); return; }
    voted.push(id);
    localStorage.setItem('agri_voted', JSON.stringify(voted));

    // Update in seed or storage
    const all = getPosts();
    const post = all.find(p => p.id === id);
    if (post) {
        post.votes++;
        const el = document.getElementById(`votes-${id}`);
        if (el) el.textContent = post.votes;
        const btn = el?.closest('.upvote-btn');
        if (btn) btn.classList.add('voted');
    }
    showToast(' Upvoted!', 'success');
}

function toggleComments(id) {
    const el = document.getElementById(`comments-${id}`);
    if (el) el.classList.toggle('show');
}

function addComment(id) {
    const input = document.getElementById(`commentInput-${id}`);
    const text = input?.value.trim();
    if (!text) return;
    const all = getPosts();
    const post = all.find(p => p.id === id);
    if (!post) return;
    const author = document.getElementById('postAuthor')?.value.trim() || 'Anonymous';
    if (!post.comments) post.comments = [];
    post.comments.push({ author, text });

    // Save if user post
    const stored = JSON.parse(localStorage.getItem('agri_posts') || '[]');
    const idx = stored.findIndex(p => p.id === id);
    if (idx >= 0) {
        stored[idx].comments = post.comments;
        localStorage.setItem('agri_posts', JSON.stringify(stored));
    }

    const commentArea = document.getElementById(`comments-${id}`);
    const newComment = document.createElement('div');
    newComment.className = 'comment-item';
    newComment.innerHTML = `<strong>${author}:</strong> ${text}`;
    commentArea?.insertBefore(newComment, commentArea.lastElementChild);
    input.value = '';
    showToast(' Comment added!', 'success');
}

function submitPost() {
    const author = document.getElementById('postAuthor')?.value.trim();
    const content = document.getElementById('postContent')?.value.trim();
    const category = document.getElementById('postCategory')?.value;

    if (!author || !content) { showToast(' Please fill name and content', ''); return; }

    const post = {
        id: 'u' + Date.now(),
        author, location: 'Your Location',
        avatar: author[0].toUpperCase(),
        category, content,
        votes: 0, date: Date.now(), comments: []
    };

    const stored = JSON.parse(localStorage.getItem('agri_posts') || '[]');
    stored.unshift(post);
    localStorage.setItem('agri_posts', JSON.stringify(stored));
    localStorage.setItem('agri_username', author);

    document.getElementById('postAuthor').value = '';
    document.getElementById('postContent').value = '';
    showToast(' Post shared with community!', 'success');
    renderPosts();
}

function sharePost(id) {
    const url = window.location.href + '#post-' + id;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => showToast(' Link copied!', 'success'));
    } else {
        showToast(' Share: ' + url);
    }
}

function askExpert() {
    const name = document.getElementById('expertName')?.value.trim();
    const field = document.getElementById('expertField')?.value;
    const q = document.getElementById('expertQuestion')?.value.trim();
    if (!name || !q) { showToast(' Please fill all fields', ''); return; }
    showToast(' Question sent to expert! Response in 24-48 hrs.', 'success');
    if (document.getElementById('expertName')) document.getElementById('expertName').value = '';
    if (document.getElementById('expertQuestion')) document.getElementById('expertQuestion').value = '';
}

function renderExperts() {
    const experts = [
        { name: 'Dr. Priya Sharma', role: 'Plant Pathologist · ICAR', status: 'online', avatar: '‍' },
        { name: 'Dr. Ramakrishna Rao', role: 'Soil Scientist · NRSA', status: 'online', avatar: '‍' },
        { name: 'Kavita Menon', role: 'Agri Economist · NABARD', status: 'away', avatar: '‍' },
        { name: 'Sunil Verma', role: 'Irrigation Expert · WRC', status: 'online', avatar: '‍' },
    ];
    const el = document.getElementById('expertList');
    if (!el) return;
    el.innerHTML = experts.map(e => `
    <div class="expert-item">
      <div class="expert-avatar">${e.avatar}</div>
      <div class="expert-info">
        <strong>${e.name}</strong>
        <span>${e.role}</span>
      </div>
      <div style="width:8px;height:8px;border-radius:50%;background:${e.status === 'online' ? '#4caf50' : '#ff9800'};margin-left:auto;flex-shrink:0;"></div>
    </div>
  `).join('');
}

function renderContributors() {
    const top = [
        { name: 'Dr. Priya Sharma', posts: 142, rank: '' },
        { name: 'Ramesh Kumar', posts: 87, rank: '' },
        { name: 'Anita Desai', posts: 63, rank: '' },
        { name: 'Baldev Singh', posts: 51, rank: '4⃣' },
        { name: 'Gopal Rao', posts: 44, rank: '5⃣' },
    ];
    const el = document.getElementById('topContributors');
    if (!el) return;
    el.innerHTML = top.map(c => `
    <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f0f0f0;">
      <span style="font-size:1.2rem;">${c.rank}</span>
      <div style="flex:1;font-size:0.87rem;font-weight:600;color:var(--primary);">${c.name}</div>
      <span style="font-size:0.75rem;color:var(--text-mid);">${c.posts} posts</span>
    </div>
  `).join('');
}

function renderTrending() {
    const topics = ['#PaddyFarming', '#OrganicIndia', '#PMKisan2025', '#WheatPrice', '#WaterSaving', '#FarmerSuccess', '#CropDisease'];
    const el = document.getElementById('trendingTopics');
    if (!el) return;
    el.innerHTML = topics.map(t => `
    <div style="display:inline-block;margin:4px 4px 4px 0;">
      <span style="background:#e8f5e9;color:var(--secondary);padding:5px 12px;border-radius:50px;font-size:0.78rem;font-weight:600;cursor:pointer;">${t}</span>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderPosts();
    renderExperts();
    renderContributors();
    renderTrending();
});
