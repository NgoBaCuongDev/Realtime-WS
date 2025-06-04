const express = require('express');
const router = express.Router();
const { sendNotification } = require('../sockets');

// Route riêng cho DOXADAY
router.post('/', (req, res) => {
    const { donationId } = req.body;

    if (!donationId || !donationId.includes("DOXADAY")) {
        return res.status(400).json({ error: "Invalid or missing DOXADAY ID" });
    }

    console.log("📢 Trigger socket for DOXADAY:", donationId);
    sendNotificationForDoxaDay(donationId); // 🔔 Gửi tới các client

    return res.status(200).json({ success: true });
});

module.exports = router;
