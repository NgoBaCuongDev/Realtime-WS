const express = require('express');
const router = express.Router();
const { sendNotification } = require('../sockets');

// Route riêng cho DOXADAY
router.post('/', (req, res) => {
    const { donationId } = req.body;

    if (!donationId || !donationId.startsWith("DOXADAY")) {
        return res.status(400).json({ error: "Invalid or missing DOXADAY ID" });
    }

    console.log("📢 Trigger socket for DOXADAY:", donationId);
    sendNotification(donationId); // 🔔 Gửi tới các client

    return res.json({ success: true });
});

module.exports = router;
