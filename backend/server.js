const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// Create an Express application
const app = express();

// Create an HTTP server
const server = http.createServer(app);

// Create a Socket.IO server
const io = new Server(server);

// Serve a basic response on the root URL
app.get('/', (req, res) => {
  res.send('Socket.IO server is running!');
});

// Listen for WebSocket connections
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Emit a random number between 20 & 40 every 10 seconds
  const intervalSetTemp = setInterval(() => {
    const randomNumber =  Math.floor(Math.random() * (40 - 20 + 1)) + 20; // Generate random number
    socket.emit('new-temp', randomNumber); // Emit to the client
    console.log(`Emitted random number: ${randomNumber}`);
  }, 6000);

  const intervalSetMovement = setInterval(() => {
    const movementStatuses = ['active', 'asleep']
    const randomMovementStatus = movementStatuses[Math.floor(Math.random() * movementStatuses.length)];
    socket.emit('new-movement', randomMovementStatus); // Emit to the client
    console.log(`Emitted new movement: ${randomMovementStatus}`);
}, 60000);

  // Handle disconnects
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    clearInterval(intervalSetTemp);
    clearInterval(intervalSetMovement);
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
