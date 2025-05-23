const express = require('express');
const cors = require('cors');
const notifyRoutes = require('./routes/notifyRoutes');

const app = express();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 429,
    error: 'Too many requests. Please try again later.'
  },
});

app.use(cors());
app.use(express.json());

app.use('/limit', limiter);
app.use('/notify', notifyRoutes);

// Middleware xử lý lỗi đơn giản
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;