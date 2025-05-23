const express = require('express');
const router = express.Router();
const { sendNotification } = require('../sockets');

router.post('/', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Missing message' });
  }

  // Gửi notification realtime qua socket
  sendNotification(message);

  res.json({ success: true });
});

module.exports = router;
