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

function sendNotification(message) {
  if (!io) {
    console.warn('Socket.io not initialized');
    return;
  }
  io.emit('notification', { message });
}

module.exports = { initSocket, sendNotification };