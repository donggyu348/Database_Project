const express = require('express');
const cors = require('cors');
const path = require('path');

const errorHandler = require('./src/middlewares/errorHandler');
const authRoutes = require('./src/routes/auth.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 정적 파일(public) + HTML 뷰(src/view) 서빙
app.use(express.static(path.join(__dirname, 'public')));
const viewsDir = path.join(__dirname, 'src', 'view');
app.get('/', (req, res) => res.sendFile(path.join(viewsDir, 'index.html')));
app.get('/login.html', (req, res) => res.sendFile(path.join(viewsDir, 'login.html')));
app.get('/app.html', (req, res) => res.sendFile(path.join(viewsDir, 'app.html')));

app.get('/health', (req, res) => {
  res.json({ success: true, data: { ok: true } });
});

app.use('/api/auth', authRoutes);

app.use(errorHandler);

module.exports = app;
