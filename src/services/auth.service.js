const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userModel = require('../models/user.model');

function createError(status, code, message) {
  const err = new Error(message);
  err.status = status;
  err.code = code;
  return err;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function signup(payload) {
  const { user_id, password, nickname, email, age, school } = payload || {};

  if (!user_id || !password || !nickname || !email) {
    throw createError(400, 'VALIDATION_ERROR', '필수 필드(user_id, password, nickname, email)가 누락되었습니다.');
  }
  if (
    typeof user_id !== 'string' ||
    typeof password !== 'string' ||
    typeof nickname !== 'string' ||
    typeof email !== 'string'
  ) {
    throw createError(400, 'VALIDATION_ERROR', '필수 필드 형식이 올바르지 않습니다.');
  }
  if (!validateEmail(email)) {
    throw createError(400, 'INVALID_EMAIL', 'email 형식이 올바르지 않습니다.');
  }
  if (age !== undefined && age !== null && !Number.isInteger(age)) {
    throw createError(400, 'INVALID_AGE', 'age는 정수여야 합니다.');
  }
  if (school !== undefined && school !== null && typeof school !== 'string') {
    throw createError(400, 'INVALID_SCHOOL', 'school 형식이 올바르지 않습니다.');
  }

  const [byId, byNickname, byEmail] = await Promise.all([
    userModel.findByUserId(user_id),
    userModel.findByNickname(nickname),
    userModel.findByEmail(email),
  ]);

  if (byId) throw createError(409, 'DUPLICATE_USER_ID', '이미 사용 중인 user_id입니다.');
  if (byNickname) throw createError(409, 'DUPLICATE_NICKNAME', '이미 사용 중인 nickname입니다.');
  if (byEmail) throw createError(409, 'DUPLICATE_EMAIL', '이미 사용 중인 email입니다.');

  const hashed = await bcrypt.hash(password, 10);
  const created = await userModel.createUser({
    user_id,
    password: hashed,
    nickname,
    email,
    age: age ?? null,
    school: school ?? null,
  });

  // password 제거
  const { password: _pw, ...safe } = created;
  return safe;
}

async function login(payload) {
  const { user_id, password } = payload || {};

  if (!user_id || !password) {
    throw createError(400, 'VALIDATION_ERROR', '필수 필드(user_id, password)가 누락되었습니다.');
  }
  if (typeof user_id !== 'string' || typeof password !== 'string') {
    throw createError(400, 'VALIDATION_ERROR', '필수 필드 형식이 올바르지 않습니다.');
  }

  const user = await userModel.findByUserId(user_id);
  if (!user) throw createError(401, 'INVALID_CREDENTIALS', '아이디 또는 비밀번호가 올바르지 않습니다.');

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw createError(401, 'INVALID_CREDENTIALS', '아이디 또는 비밀번호가 올바르지 않습니다.');

  const token = jwt.sign(
    { user_id: user.user_id, nickname: user.nickname },
    process.env.JWT_SECRET,
    { expiresIn: '1d' },
  );

  return { token };
}

async function me(userId) {
  const user = await userModel.findByUserId(userId);
  if (!user) throw createError(404, 'USER_NOT_FOUND', '사용자를 찾을 수 없습니다.');
  const { password: _pw, ...safe } = user;
  return safe;
}

module.exports = {
  signup,
  login,
  me,
};

