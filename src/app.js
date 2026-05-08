const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Views (HTML)
const viewsDir = path.join(__dirname, 'view');
app.get('/', (req, res) => res.sendFile(path.join(viewsDir, 'index.html')));
app.get('/login.html', (req, res) => res.sendFile(path.join(viewsDir, 'login.html')));
app.get('/app.html', (req, res) => res.sendFile(path.join(viewsDir, 'app.html')));

// API
app.use('/api', apiRouter);

module.exports = app;
