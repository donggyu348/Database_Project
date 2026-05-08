// NOTE: 기존 public/app.html의 인라인 스크립트를 그대로 분리한 파일입니다.

// ─── 모의 사용자 (랭킹용) ────────────────────────────────────────────────────
const MOCK_USERS = [
  { name: '김민수', email: 'kim_ms@mock', expense: 285000 },
  { name: '이지은', email: 'lee_je@mock', expense: 312000 },
  { name: '박서준', email: 'park_sj@mock', expense: 330000 },
  { name: '최유진', email: 'choi_yj@mock', expense: 347000 },
  { name: '정다현', email: 'jung_dh@mock', expense: 365000 },
  { name: '한승우', email: 'han_sw@mock', expense: 381000 },
  { name: '오채원', email: 'oh_cw@mock', expense: 396000 },
  { name: '신동혁', email: 'shin_dh@mock', expense: 412000 },
  { name: '강미래', email: 'kang_mr@mock', expense: 428000 },
  { name: '윤시온', email: 'yoon_so@mock', expense: 443000 },
  { name: '임준혁', email: 'lim_jh@mock', expense: 459000 },
  { name: '배수빈', email: 'bae_sb@mock', expense: 474000 },
  { name: '조현아', email: 'jo_ha@mock', expense: 488000 },
  { name: '황민준', email: 'hwang_mj@mock', expense: 503000 },
  { name: '서예진', email: 'seo_yj@mock', expense: 517000 },
  { name: '문재원', email: 'moon_jw@mock', expense: 531000 },
  { name: '류하린', email: 'ryu_hr@mock', expense: 546000 },
  { name: '권태양', email: 'kwon_ty@mock', expense: 558000 },
  { name: '나예슬', email: 'na_ys@mock', expense: 572000 },
  { name: '노지호', email: 'noh_jh@mock', expense: 589000 },
];

const SEED_POSTS = [
  {
    id: 'seed1',
    authorName: '김민수',
    authorEmail: 'kim_ms@mock',
    title: '마트 할인 앱 쿠폰으로 월 5만원 절약하는 법',
    content: `안녕하세요, 절약 1위를 목표로 하는 김민수입니다!\n\n한 달 28만원대를 유지하는 가장 큰 비결은 마트 앱 쿠폰을 적극 활용하는 거예요.\n\n1. 이마트 앱: 매주 목요일 앱 전용 쿠폰 발행 (최대 30% 할인)\n2. 홈플러스 앱: 매월 1일 대규모 쿠폰 발행\n3. GS25 / CU 앱: 1+1 행사를 미리 확인하고 계획 구매\n\n팁: 냉동식품, 생수, 라면 같은 생필품은 무조건 세일할 때만 사는 습관을 들이면\n월 3~5만원은 쉽게 절약됩니다!\n\n처음엔 귀찮지만 한 달만 해보시면 효과를 바로 느낄 수 있어요 :)`,
    date: '2025-04-18',
    likes: 31,
    likedBy: [],
  },
  {
    id: 'seed2',
    authorName: '이지은',
    authorEmail: 'lee_je@mock',
    title: '배달음식 끊고 주간 식단 짠 결과 (식비 주 3만원)',
    content: `저도 처음엔 배달비만 월 8만원 넘게 썼어요... 😅\n\n지금은 주간 식단을 미리 짜서 장을 일주일에 한 번만 봐요.\n\n예시 주간 식단:\n- 월: 제육볶음 + 밥\n- 화: 된장찌개 + 계란말이\n- 수: 파스타 (재료 재활용)\n- 목: 계란볶음밥\n- 금: 냉장고 털기 특선\n\n장점:\n✔ 식비 주 3만원 이하 가능\n✔ 요리 실력 자연스럽게 향상\n✔ 건강도 덤으로 챙김\n\n처음 2주는 조금 힘들지만 습관이 되면 진짜 편해져요!`,
    date: '2025-04-21',
    likes: 47,
    likedBy: [],
  },
  {
    id: 'seed3',
    authorName: '박서준',
    authorEmail: 'park_sj@mock',
    title: '알뜰폰으로 통신비 월 4만원 절약하기',
    content: `통신비는 한 번만 잘 선택하면 매달 자동으로 절약되는 항목이에요.\n\n제가 쓰는 조합:\n- KT 알뜰폰 (헬로모바일): 월 9,900원 / 데이터 10GB\n- 공기계 중고폰 사용 (40만원대)\n\n기존 통신 3사 대비 월 4~5만원 절약, 1년이면 50만원 이상!\n\n주의사항:\n1. 해외 로밍이 자주 필요하면 3사가 나을 수 있음\n2. 고객센터 응대가 느린 편\n3. 5G 요금제 없는 경우가 많음 (사실 LTE로 충분)\n\n자취생 강추 꿀팁입니다!`,
    date: '2025-04-23',
    likes: 28,
    likedBy: [],
  },
];

const SEED_PARTIES = [
  {
    id: 'party1',
    title: '냉동삼겹살 공구',
    item: '냉동삼겹살 2kg (코스트코)',
    description:
      '코스트코 냉동삼겹살 같이 사실 분 구해요. 직접 소분해서 나눠드립니다. 신촌/홍대 지역 가능하신 분~',
    pricePerPerson: 15000,
    targetCount: 4,
    currentCount: 2,
    creatorName: '이지은',
    creatorEmail: 'lee_je@mock',
    members: ['lee_je@mock', 'park_sj@mock'],
    status: 'open',
    createdAt: '2025-04-24',
  },
  {
    id: 'party2',
    title: '생활용품 대용량 공동구매',
    item: 'LG생활건강 세탁세제+주방세제+샴푸 세트',
    description:
      '대용량 세트 나눠서 사면 훨씬 저렴해요. 관악구 쪽 분들 우선이지만 다른 지역도 협의 가능합니다.',
    pricePerPerson: 12000,
    targetCount: 5,
    currentCount: 3,
    creatorName: '오채원',
    creatorEmail: 'oh_cw@mock',
    members: ['oh_cw@mock', 'shin_dh@mock', 'kang_mr@mock'],
    status: 'open',
    createdAt: '2025-04-25',
  },
  {
    id: 'party3',
    title: '철원 오대쌀 10kg 나눔',
    item: '철원 오대쌀 10kg → 1인당 2kg 소분',
    description:
      '5인 공동구매 완료! 각자 2kg씩 나눔했습니다. 다음 달에 또 진행 예정이에요. 관심 있으신 분은 댓글 달아주세요.',
    pricePerPerson: 8000,
    targetCount: 5,
    currentCount: 5,
    creatorName: '한승우',
    creatorEmail: 'han_sw@mock',
    members: ['han_sw@mock', 'choi_yj@mock', 'jung_dh@mock', 'yoon_so@mock', 'lim_jh@mock'],
    status: 'closed',
    createdAt: '2025-04-15',
  },
];

// ─── 상태 ─────────────────────────────────────────────────────────────────────
const TODAY_MONTH = new Date().toISOString().slice(0, 7);
let currentUser = null;
let ledgerMonth = TODAY_MONTH;
let partyFilter = 'all';
let viewingPostId = null;

async function api(path, options = {}) {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const res = await fetch(path, { ...options, headers });
  const json = await res.json().catch(() => null);
  if (!res.ok) {
    const msg = json?.error?.message || '요청에 실패했습니다.';
    const err = new Error(msg);
    err.code = json?.error?.code || 'REQUEST_FAILED';
    throw err;
  }
  return json;
}

// ─── 초기화 ──────────────────────────────────────────────────────────────────
async function init() {
  const token = localStorage.getItem('token');
  if (!token) {
    localStorage.removeItem('user');
    window.location.href = '/login.html';
    return;
  }

  try {
    const me = await api('/api/auth/me');
    currentUser = me.data;
    localStorage.setItem('user', JSON.stringify(currentUser));
  } catch (e) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login.html';
    return;
  }

  ledgerMonth = TODAY_MONTH;
  document.getElementById('ledger-month').value = TODAY_MONTH;
  document.getElementById('input-date').value = new Date().toISOString().split('T')[0];

  if (!localStorage.getItem('posts_seeded')) {
    localStorage.setItem('community_posts', JSON.stringify(SEED_POSTS));
    localStorage.setItem('posts_seeded', '1');
  }
  if (!localStorage.getItem('parties_seeded')) {
    localStorage.setItem('party_groups', JSON.stringify(SEED_PARTIES));
    localStorage.setItem('parties_seeded', '1');
  }

  updateHeaderBadge();
  renderLedger();
}

// ─── 스토리지 헬퍼 ───────────────────────────────────────────────────────────
function getTxns() {
  return JSON.parse(localStorage.getItem(`txn_${currentUser.email}`) || '[]');
}
function saveTxns(d) {
  localStorage.setItem(`txn_${currentUser.email}`, JSON.stringify(d));
}
function getBudget(m) {
  return parseInt(localStorage.getItem(`budget_${currentUser.email}_${m}`) || '0');
}
function setBudgetLS(m, v) {
  localStorage.setItem(`budget_${currentUser.email}_${m}`, v);
}
function getPosts() {
  return JSON.parse(localStorage.getItem('community_posts') || '[]');
}
function savePosts(d) {
  localStorage.setItem('community_posts', JSON.stringify(d));
}
function getParties() {
  return JSON.parse(localStorage.getItem('party_groups') || '[]');
}
function saveParties(d) {
  localStorage.setItem('party_groups', JSON.stringify(d));
}

// ─── 랭킹 로직 ───────────────────────────────────────────────────────────────
function getUserMonthExpense(email, month) {
  const mock = MOCK_USERS.find((u) => u.email === email);
  if (mock) return mock.expense;
  const txns = JSON.parse(localStorage.getItem(`txn_${email}`) || '[]');
  return txns
    .filter((t) => t.date.startsWith(month) && t.type === 'expense')
    .reduce((s, t) => s + t.amount, 0);
}

function buildRanking() {
  const all = [
    ...MOCK_USERS.map((u) => ({ name: u.name, email: u.email, expense: getUserMonthExpense(u.email, TODAY_MONTH) })),
    {
      name: currentUser.nickname || currentUser.name || currentUser.user_id,
      email: currentUser.email || currentUser.user_id,
      expense: getUserMonthExpense(currentUser.email || currentUser.user_id, TODAY_MONTH),
    },
  ];
  all.sort((a, b) => a.expense - b.expense);
  return all.map((u, i) => ({ ...u, rank: i + 1, isExpert: i < 10 }));
}

function isExpert() {
  const meKey = currentUser.email || currentUser.user_id;
  const r = buildRanking().find((u) => u.email === meKey);
  return r ? r.isExpert : false;
}

// ─── 탭 & 헤더 ───────────────────────────────────────────────────────────────
function switchTab(tab, btn) {
  document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.section').forEach((s) => s.classList.remove('active'));
  document.getElementById(`section-${tab}`).classList.add('active');
  if (tab === 'ranking') renderRanking();
  if (tab === 'community') renderCommunity();
  if (tab === 'party') renderParty();
}

function updateHeaderBadge() {
  const name = currentUser.nickname || currentUser.name || currentUser.user_id || '사용자';
  document.getElementById('header-name').textContent = name + '님';
  document.getElementById('header-badge').style.display = isExpert() ? 'inline-block' : 'none';
}

// ─── 가계부 ──────────────────────────────────────────────────────────────────
function renderLedger() {
  ledgerMonth = document.getElementById('ledger-month').value || TODAY_MONTH;
  const txns = getTxns().filter((t) => t.date.startsWith(ledgerMonth));

  let income = 0,
    expense = 0;
  const catMap = {};
  const tbody = document.getElementById('transaction-list');
  tbody.innerHTML = '';

  txns.forEach((t) => {
    if (t.type === 'income') income += t.amount;
    else {
      expense += t.amount;
      catMap[t.category] = (catMap[t.category] || 0) + t.amount;
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${t.date}</td><td>${esc(t.desc)}</td><td>${t.category}</td>
      <td class="type-${t.type}">${t.type === 'income' ? '수입' : '지출'}</td>
      <td>${fmt(t.amount)}</td>
      <td><button class="del-btn" onclick="deleteTxn('${t.id}')">✕</button></td>`;
    tbody.appendChild(tr);
  });

  document.getElementById('ledger-empty').style.display = txns.length ? 'none' : 'block';
  document.getElementById('s-income').textContent = fmt(income);
  document.getElementById('s-expense').textContent = fmt(expense);
  document.getElementById('s-balance').textContent = fmt(income - expense);

  const budget = getBudget(ledgerMonth);
  if (budget > 0) {
    document.getElementById('budget-input').placeholder = budget.toLocaleString('ko-KR');
    const pct = Math.min(Math.round((expense / budget) * 100), 100);
    document.getElementById('s-budget-rate').textContent = pct + '%';
    const bar = document.getElementById('s-budget-bar');
    bar.style.width = pct + '%';
    bar.className = 'budget-bar' + (pct >= 100 ? ' over' : pct >= 80 ? ' warn' : '');
  } else {
    document.getElementById('s-budget-rate').textContent = '미설정';
    document.getElementById('s-budget-bar').style.width = '0%';
  }

  renderChart(catMap, expense);
  updateHeaderBadge();
}

function renderChart(catMap, total) {
  const el = document.getElementById('category-chart');
  if (total === 0) {
    el.innerHTML = '<p style="color:#aaa;font-size:14px;padding:8px 0;">지출 내역이 없습니다.</p>';
    return;
  }
  el.innerHTML = Object.entries(catMap)
    .sort((a, b) => b[1] - a[1])
    .map(([cat, amt]) => {
      const pct = Math.round((amt / total) * 100);
      return `<div class="cat-bar">
      <div class="lbl"><span>${cat}</span><span>${fmt(amt)} (${pct}%)</span></div>
      <div class="bar-bg"><div class="bar-fill" style="width:${pct}%"></div></div>
    </div>`;
    })
    .join('');
}

function addTransaction() {
  const date = document.getElementById('input-date').value;
  const desc = document.getElementById('input-desc').value.trim();
  const category = document.getElementById('input-category').value;
  const type = document.getElementById('input-type').value;
  const amount = parseInt(document.getElementById('input-amount').value);
  if (!date || !desc || !amount || amount <= 0) {
    toast('날짜, 내용, 금액을 모두 입력해주세요.', 'error');
    return;
  }
  const txns = getTxns();
  txns.unshift({ id: Date.now().toString(), date, desc, category, type, amount });
  saveTxns(txns);
  document.getElementById('input-desc').value = '';
  document.getElementById('input-amount').value = '';
  renderLedger();
}

function deleteTxn(id) {
  saveTxns(getTxns().filter((t) => t.id !== id));
  renderLedger();
}

function saveBudget() {
  const amount = parseInt(document.getElementById('budget-input').value);
  if (!amount || amount <= 0) {
    toast('올바른 예산을 입력해주세요.', 'error');
    return;
  }
  setBudgetLS(ledgerMonth, amount);
  document.getElementById('budget-input').value = '';
  renderLedger();
  toast('예산이 저장되었습니다.', 'success');
}

// ─── 랭킹 ────────────────────────────────────────────────────────────────────
function renderRanking() {
  const ranking = buildRanking();
  const me = ranking.find((u) => u.email === currentUser.email);
  const medals = { 1: '🥇', 2: '🥈', 3: '🥉' };

  document.getElementById('ranking-month-label').textContent = `${TODAY_MONTH.replace('-', '년 ')}월 기준 • 지출이 적을수록 높은 순위`;
  document.getElementById('my-rank-num').textContent = me.rank;
  document.getElementById('my-rank-name').textContent = me.name;
  document.getElementById('my-rank-expense').textContent = `이번 달 지출: ${fmt(me.expense)}`;
  document.getElementById('my-rank-desc').textContent = me.isExpert
    ? '🏆 고수 뱃지 보유! 커뮤니티에 절약 팁을 공유해보세요.'
    : `고수 뱃지까지 ${10 - me.rank + 1}계단 남았어요! 지출을 더 줄여보세요.`;
  document.getElementById('my-rank-emoji').textContent = me.isExpert ? '🏆' : '💪';

  document.getElementById('ranking-list').innerHTML = ranking
    .map(
      (u) => `
    <li class="ranking-item${u.email === currentUser.email ? ' me' : ''}">
      <div class="rank-pos${u.rank <= 3 ? ' top3' : ''}">${medals[u.rank] || u.rank}</div>
      <div class="rank-name">
        ${esc(u.name)}
        ${u.email === currentUser.email ? '<span style="color:#4a90e2;font-size:12px;"> (나)</span>' : ''}
      </div>
      ${u.isExpert ? '<span class="badge-expert-sm">🏆 고수</span>' : ''}
      <div class="rank-amount">${fmt(u.expense)}</div>
    </li>`,
    )
    .join('');
}

// ─── 커뮤니티 ─────────────────────────────────────────────────────────────────
function renderCommunity() {
  const expert = isExpert();
  const writeBtn = document.getElementById('btn-write');
  writeBtn.disabled = !expert;
  writeBtn.style.opacity = expert ? '1' : '0.4';
  writeBtn.title = expert ? '' : '고수 뱃지가 있어야 글을 쓸 수 있어요';
  document.getElementById('no-perm-banner').style.display = expert ? 'none' : 'block';

  const posts = getPosts();
  const expertEmails = new Set(buildRanking().filter((u) => u.isExpert).map((u) => u.email));
  const el = document.getElementById('post-list');

  if (posts.length === 0) {
    el.innerHTML = `<div class="empty-state"><div class="empty-icon">📝</div><p>아직 게시글이 없습니다.</p></div>`;
    return;
  }

  el.innerHTML = posts
    .map((p) => {
      const authorExpert = expertEmails.has(p.authorEmail);
      const liked = p.likedBy.includes(currentUser.email);
      const preview = p.content.replace(/\n/g, ' ').slice(0, 90) + (p.content.length > 90 ? '...' : '');
      return `<div class="post-card" onclick="openPostDetail('${p.id}')">
      <div class="post-meta">
        <span class="post-author">${esc(p.authorName)}</span>
        ${authorExpert ? '<span class="badge-expert-sm">🏆 고수</span>' : ''}
        <span class="post-date">${p.date}</span>
      </div>
      <div class="post-title">${esc(p.title)}</div>
      <div class="post-preview">${esc(preview)}</div>
      <div class="post-footer">
        <button class="like-btn${liked ? ' liked' : ''}" onclick="event.stopPropagation();likePost('${p.id}')">♥ ${p.likes}</button>
      </div>
    </div>`;
    })
    .join('');
}

function openPostModal() {
  if (!isExpert()) {
    toast('고수 뱃지가 필요합니다.', 'error');
    return;
  }
  document.getElementById('post-title').value = '';
  document.getElementById('post-content').value = '';
  openModal('modal-post');
}

function submitPost() {
  const title = document.getElementById('post-title').value.trim();
  const content = document.getElementById('post-content').value.trim();
  if (!title || !content) {
    toast('제목과 내용을 입력해주세요.', 'error');
    return;
  }
  const posts = getPosts();
  posts.unshift({
    id: Date.now().toString(),
    authorName: currentUser.name,
    authorEmail: currentUser.email,
    title,
    content,
    date: new Date().toISOString().split('T')[0],
    likes: 0,
    likedBy: [],
  });
  savePosts(posts);
  closeModal('modal-post');
  renderCommunity();
  toast('게시글이 등록되었습니다.', 'success');
}

function likePost(id) {
  const posts = getPosts();
  const post = posts.find((p) => p.id === id);
  if (!post) return;
  const idx = post.likedBy.indexOf(currentUser.email);
  if (idx >= 0) {
    post.likedBy.splice(idx, 1);
    post.likes--;
  } else {
    post.likedBy.push(currentUser.email);
    post.likes++;
  }
  savePosts(posts);
  if (viewingPostId === id) openPostDetail(id);
  else renderCommunity();
}

function openPostDetail(id) {
  viewingPostId = id;
  const post = getPosts().find((p) => p.id === id);
  if (!post) return;
  const expertEmails = new Set(buildRanking().filter((u) => u.isExpert).map((u) => u.email));
  const liked = post.likedBy.includes(currentUser.email);

  document.getElementById('detail-title').textContent = post.title;
  document.getElementById('detail-author').textContent = post.authorName;
  document.getElementById('detail-badge').style.display = expertEmails.has(post.authorEmail) ? 'inline-block' : 'none';
  document.getElementById('detail-date').textContent = post.date;
  document.getElementById('detail-content').textContent = post.content;
  const btn = document.getElementById('detail-like-btn');
  btn.className = `like-btn${liked ? ' liked' : ''}`;
  btn.textContent = `♥ ${post.likes}`;
  btn.onclick = () => likePost(id);
  openModal('modal-post-detail');
}

// ─── 공동구매 ─────────────────────────────────────────────────────────────────
function setFilter(f, btn) {
  partyFilter = f;
  document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  renderParty();
}

function renderParty() {
  let parties = getParties();
  if (partyFilter === 'open') parties = parties.filter((p) => p.status === 'open');
  if (partyFilter === 'mine')
    parties = parties.filter((p) => p.creatorEmail === currentUser.email || p.members.includes(currentUser.email));

  const grid = document.getElementById('party-grid');
  if (parties.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🛒</div><p>파티가 없습니다. 새로 만들어보세요!</p></div>`;
    return;
  }

  grid.innerHTML = parties
    .map((p) => {
      const pct = Math.round((p.currentCount / p.targetCount) * 100);
      const isCreator = p.creatorEmail === currentUser.email;
      const isMember = p.members.includes(currentUser.email);
      const isFull = p.status === 'closed';
      let actionBtn = '';
      if (isCreator) actionBtn = `<button class="btn-creator">내가 만든 파티</button>`;
      else if (isMember) actionBtn = `<button class="btn-leave" onclick="leaveParty('${p.id}')">파티 나가기</button>`;
      else if (!isFull) actionBtn = `<button class="btn-join" onclick="joinParty('${p.id}')">파티 참여하기</button>`;
      else actionBtn = `<button class="btn-join" disabled>모집 완료</button>`;

      return `<div class="party-card">
      <div><span class="party-status ${p.status}">${p.status === 'open' ? '모집중' : '모집완료'}</span></div>
      <div class="party-title">${esc(p.title)}</div>
      <div class="party-item-name">📦 ${esc(p.item)}</div>
      <div class="party-price">인당 ${fmt(p.pricePerPerson)}</div>
      <div class="progress-label"><span>참여 현황</span><span>${p.currentCount} / ${p.targetCount}명</span></div>
      <div class="progress-bg"><div class="progress-fill${isFull ? ' full' : ''}" style="width:${pct}%"></div></div>
      <div class="party-desc">${esc(p.description)}</div>
      <div class="party-meta-info">주최: ${esc(p.creatorName)} • ${p.createdAt}</div>
      <div class="party-actions">${actionBtn}</div>
    </div>`;
    })
    .join('');
}

function openPartyModal() {
  ['p-title', 'p-item', 'p-desc', 'p-price', 'p-count'].forEach((id) => (document.getElementById(id).value = ''));
  openModal('modal-party');
}

function createParty() {
  const title = document.getElementById('p-title').value.trim();
  const item = document.getElementById('p-item').value.trim();
  const desc = document.getElementById('p-desc').value.trim();
  const price = parseInt(document.getElementById('p-price').value);
  const count = parseInt(document.getElementById('p-count').value);
  if (!title || !item || !price || !count) {
    toast('모든 항목을 입력해주세요.', 'error');
    return;
  }
  if (count < 2 || count > 20) {
    toast('모집 인원은 2~20명이어야 합니다.', 'error');
    return;
  }
  const parties = getParties();
  parties.unshift({
    id: Date.now().toString(),
    title,
    item,
    description: desc || '-',
    pricePerPerson: price,
    targetCount: count,
    currentCount: 1,
    creatorName: currentUser.name,
    creatorEmail: currentUser.email,
    members: [currentUser.email],
    status: 'open',
    createdAt: new Date().toISOString().split('T')[0],
  });
  saveParties(parties);
  closeModal('modal-party');
  renderParty();
  toast('파티가 생성되었습니다!', 'success');
}

function joinParty(id) {
  const parties = getParties();
  const p = parties.find((x) => x.id === id);
  if (!p || p.status === 'closed') {
    toast('이미 모집이 완료된 파티입니다.', 'error');
    return;
  }
  if (p.members.includes(currentUser.email)) {
    toast('이미 참여 중인 파티입니다.', 'error');
    return;
  }
  p.members.push(currentUser.email);
  p.currentCount++;
  if (p.currentCount >= p.targetCount) p.status = 'closed';
  saveParties(parties);
  renderParty();
  toast('파티에 참여했습니다! 🎉', 'success');
}

function leaveParty(id) {
  const parties = getParties();
  const p = parties.find((x) => x.id === id);
  if (!p) return;
  if (p.creatorEmail === currentUser.email) {
    toast('파티장은 나갈 수 없습니다.', 'error');
    return;
  }
  p.members = p.members.filter((e) => e !== currentUser.email);
  p.currentCount--;
  if (p.status === 'closed') p.status = 'open';
  saveParties(parties);
  renderParty();
  toast('파티에서 나왔습니다.', 'success');
}

// ─── 모달 ────────────────────────────────────────────────────────────────────
function openModal(id) {
  document.getElementById(id).classList.add('open');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  if (id === 'modal-post-detail') viewingPostId = null;
}
document.querySelectorAll('.modal-overlay').forEach((el) => {
  el.addEventListener('click', (e) => {
    if (e.target === el) closeModal(el.id);
  });
});

// ─── 유틸 ────────────────────────────────────────────────────────────────────
function fmt(n) {
  return (n || 0).toLocaleString('ko-KR') + ' 원';
}
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
function toast(msg, type = '') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = `toast ${type} show`;
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2500);
}
function logout() {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  window.location.href = '/login.html';
}

init();

