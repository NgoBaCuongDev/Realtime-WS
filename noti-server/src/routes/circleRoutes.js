const express = require('express');
const router = express.Router();
const { sendNotificationForDoxaDay } = require('../sockets');

// Route riêng cho DXC
router.post('/', (req, res) => {
    try {

        const { donationId } = req.body;

        if (!donationId || !donationId.includes("DXC")) {
            return res.status(400).json({ error: "Invalid or missing DOXADAY ID" });
        }

        console.log("📢 Trigger socket for DOXADAY:", donationId);
        sendNotificationForDoxaDay(donationId); // 🔔 Gửi tới các client

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending notification:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
