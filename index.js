const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(path.join(__dirname, 'react-chat-app', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'react-chat-app', 'build', 'index.html'));
});

// Add a set of users currently typing
const usersTyping = new Set();

io.on('connection', (socket) => {
  console.log('A user connected',Array.from(usersTyping));

  // Listen for incoming messages
  socket.on('chat message', ({trimmedMessage, avatar}) => {
    // Broadcast the message along with the user's name to all connected clients
    if (!socket.username) {
      socket.username = "Anonymous";
    }

    io.emit('chat message', { user: socket.username, message: trimmedMessage, avatar });
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

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
