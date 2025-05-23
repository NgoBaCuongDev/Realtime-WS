const express = require('express');
const router = express.Router();
const { sendNotification } = require('../sockets');

router.post('/', (req, res) => {
  try {
    const { donationId } = req.body;

    // Validate donationId
    if (!donationId) {
      return res.status(400).json({ error: 'Missing donationId' });
    }

    // Gửi notification realtime qua socket
    sendNotification(donationId);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending notification:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;