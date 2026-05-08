// 이미 로그인된 유저는 앱으로 바로 이동
if (localStorage.getItem('user')) {
  window.location.href = '/app.html';
}

