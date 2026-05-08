const pool = require('../config/database');

async function findByUserId(userId) {
  const [rows] = await pool.query(
    'SELECT user_id, password, nickname, email, age, school, grade, level, created_at FROM `user` WHERE user_id = ? LIMIT 1',
    [userId],
  );
  return rows[0] || null;
}

async function findByNickname(nickname) {
  const [rows] = await pool.query(
    'SELECT user_id, nickname FROM `user` WHERE nickname = ? LIMIT 1',
    [nickname],
  );
  return rows[0] || null;
}

async function findByEmail(email) {
  const [rows] = await pool.query(
    'SELECT user_id, email FROM `user` WHERE email = ? LIMIT 1',
    [email],
  );
  return rows[0] || null;
}

async function createUser(user) {
  const { user_id, password, nickname, email, age, school } = user;
  await pool.query(
    'INSERT INTO `user` (user_id, password, nickname, email, age, school) VALUES (?, ?, ?, ?, ?, ?)',
    [user_id, password, nickname, email, age ?? null, school ?? null],
  );
  return findByUserId(user_id);
}

module.exports = {
  findByUserId,
  findByNickname,
  findByEmail,
  createUser,
};

