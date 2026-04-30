const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'jyo07069!@#',
  database: 'Project'
});

db.connect((err) => {
  if (err) {
    console.error('MySQL 연결 실패:', err.message);
  } else {
    console.log('MySQL 연결 성공');
  }
});

module.exports = db;
