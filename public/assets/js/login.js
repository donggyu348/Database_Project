// 이미 로그인된 경우 바로 이동
if (localStorage.getItem('user')) {
  window.location.href = '/app.html';
}

function setAuth(token, user) {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
}

async function api(path, options = {}) {
  const res = await fetch(path, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  const json = await res.json().catch(() => null);
  if (!res.ok) {
    const msg = json?.error?.message || '요청에 실패했습니다.';
    const code = json?.error?.code || 'REQUEST_FAILED';
    const err = new Error(msg);
    err.code = code;
    throw err;
  }
  return json;
}

function switchTab(tab) {
  document.getElementById('tab-login').classList.toggle('active', tab === 'login');
  document.getElementById('tab-register').classList.toggle('active', tab === 'register');
  document.getElementById('form-login').classList.toggle('hidden', tab !== 'login');
  document.getElementById('form-register').classList.toggle('hidden', tab !== 'register');
  clearMessages();
}

function clearMessages() {
  ['login-error', 'reg-error', 'reg-success'].forEach((id) => {
    document.getElementById(id).textContent = '';
  });
}

async function login() {
  const userId = document.getElementById('login-user-id').value.trim();
  const password = document.getElementById('login-password').value;
  const errorEl = document.getElementById('login-error');

  if (!userId || !password) {
    errorEl.textContent = '아이디와 비밀번호를 입력해주세요.';
    return;
  }

  try {
    errorEl.textContent = '';
    const loginRes = await api('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ user_id: userId, password }),
    });

    const token = loginRes.data?.token;
    if (!token) throw new Error('토큰이 발급되지 않았습니다.');

    const meRes = await api('/api/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    });

    setAuth(token, meRes.data);
    window.location.href = '/app.html';
  } catch (e) {
    errorEl.textContent = e.message || '로그인에 실패했습니다.';
  }
}

async function register() {
  const userId = document.getElementById('reg-user-id').value.trim();
  const nickname = document.getElementById('reg-nickname').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-password').value;
  const errorEl = document.getElementById('reg-error');
  const successEl = document.getElementById('reg-success');

  if (!userId || !nickname || !email || !password) {
    errorEl.textContent = '모든 항목을 입력해주세요.';
    return;
  }
  if (password.length < 6) {
    errorEl.textContent = '비밀번호는 6자 이상이어야 합니다.';
    return;
  }

  try {
    errorEl.textContent = '';
    successEl.textContent = '';

    await api('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        user_id: userId,
        password,
        nickname,
        email,
      }),
    });

    successEl.textContent = '회원가입 완료! 로그인해주세요.';
    setTimeout(() => switchTab('login'), 900);
  } catch (e) {
    errorEl.textContent = e.message || '회원가입에 실패했습니다.';
  }
}

