/**
 * api/gateway.js
 * Điểm vào hợp nhất cho toàn bộ API (/api/exams, /api/submit, /api/results)
 * giúp dùng chung 1 Vercel Serverless container, 1 RAM cache và 1 /tmp filesystem.
 */

const examsHandler = require('./exams');
const submitHandler = require('./submit');
const resultsHandler = require('./results');

module.exports = async (req, res) => {
  const route = String((req.query && req.query.route) || '').toLowerCase();
  if (route === 'exams') return examsHandler(req, res);
  if (route === 'submit') return submitHandler(req, res);
  if (route === 'results') return resultsHandler(req, res);
  return res.status(404).json({ success: false, message: 'API route not found.' });
};
