function errorHandler(err, req, res, next) {
  const status = Number(err && err.status) || 500;
  const code = (err && err.code) || 'INTERNAL_SERVER_ERROR';
  const message = (err && err.message) || 'Internal Server Error';

  if (process.env.NODE_ENV !== 'test') {
    // eslint-disable-next-line no-console
    console.error(err);
  }

  res.status(status).json({
    success: false,
    error: {
      code,
      message,
    },
  });
}

module.exports = errorHandler;

