const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Add a set of users currently typing
const usersTyping = new Set();

io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for incoming messages
  socket.on('chat message', (msg) => {
    // Broadcast the message along with the user's name to all connected clients
    io.emit('chat message', { user: socket.username, message: msg });
    // Notify all clients that a user has sent a message
    socket.broadcast.emit('notification', { user: socket.username, message: 'has sent a message' });
  });

  // Listen for user disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
    // Remove the user from the set of users typing on disconnect
    usersTyping.delete(socket.username);
    // Notify all clients about the updated list of users typing
    io.emit('update typing', Array.from(usersTyping));
  });

  // Listen for setting user name
  socket.on('set username', (username) => {
    // Set the username for the socket
    socket.username = username;
    // Notify all clients that a new user has joined
    io.emit('user joined', `${username} has joined the chat`);
  });

  // Listen for 'typing' events
  socket.on('typing', () => {
    // Add the user to the set of users typing
    usersTyping.add(socket.username);
    // Notify all clients about the updated list of users typing
    io.emit('update typing', Array.from(usersTyping));
  });

  // Listen for 'stopped typing' events
  socket.on('stop typing', () => {
    // Remove the user from the set of users typing
    usersTyping.delete(socket.username);
    // Notify all clients about the updated list of users typing
    io.emit('update typing', Array.from(usersTyping));
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
