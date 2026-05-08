const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'Project',
});

db.connect((err) => {
  if (err) {
    console.error('MySQL 연결 실패:', err.message);
  } else {
    console.log('MySQL 연결 성공');
  }
});

module.exports = db;
