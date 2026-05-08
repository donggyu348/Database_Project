const authService = require('../services/auth.service');

async function signup(req, res, next) {
  try {
    const user = await authService.signup(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const result = await authService.login(req.body);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
}

async function me(req, res, next) {
  try {
    const user = await authService.me(req.user.user_id);
    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  signup,
  login,
  me,
};

