const express = require('express');
const router = express.Router();
const { sendNotification } = require('../sockets');

router.post('/', (req, res) => {

  // Gửi notification realtime qua socket
  sendNotification(message);

  res.json({ success: true });
});

module.exports = router;