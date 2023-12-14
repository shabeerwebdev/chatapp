import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io();

function ChatApp() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);

  useEffect(() => {
    socket.on('chat message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    socket.on('user joined', (message) => {
      setMessages((prevMessages) => [...prevMessages, { user: 'System', message }]);
    });

    socket.on('notification', (data) => {
      const notification = `${data.user} ${data.message}`;
      alert(notification);
    });

    socket.on('update typing', (users) => {
      console.log(users,'jatti');
      setTypingUsers(users);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const setUsernameAndJoin = () => {
    const trimmedUsername = username.trim();
    if (trimmedUsername !== '') {
      socket.emit('set username', trimmedUsername);
      console.log(`Sent set username event with value: ${trimmedUsername}`);
    }
  };

  const startTyping = () => {
    socket.emit('typing');
  };

  const stopTyping = () => {
    socket.emit('stop typing');
  };

  const sendMessage = () => {
    const trimmedMessage = message.trim();
    if (trimmedMessage !== '') {
      socket.emit('chat message', trimmedMessage);
      // setMessages((prevMessages) => [...prevMessages, { user: username, message: trimmedMessage }]);
      setMessage('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        // disabled={username.trim().length >= 1}
      />
      <button
        onClick={setUsernameAndJoin}
        // disabled={username.trim().length < 1}
      >
        Set Name
      </button>

      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{`${msg.user}: ${msg.message}`}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onInput={startTyping}
        onBlur={stopTyping}
      />
      <button onClick={sendMessage}>Send</button>

      {typingUsers.length > 0 && typingUsers[0] !== username && (
        <div>
          {`${
            typingUsers.length > 1 ? "Users are" : "User is"
          } typing: ${typingUsers.join(", ")}`}
        </div>
      )}
    </div>
  );
}

export default ChatApp;
