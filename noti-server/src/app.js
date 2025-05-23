const express = require('express');
const cors = require('cors');
const notifyRoutes = require('./routes/notifyRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/notify', notifyRoutes);

// Middleware xử lý lỗi đơn giản
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;