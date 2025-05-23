let io;

function initSocket(server) {
  const { Server } = require('socket.io');
  io = new Server(server, {
    cors: { origin: '*' },
  });

  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);
  });
}

function sendNotification(donationId) {
  if (!io) {
    console.warn('Socket.io not initialized');
    return;
  }
  io.emit('notification', { donationId }); // Emit donationId instead of message
}

module.exports = { initSocket, sendNotification };