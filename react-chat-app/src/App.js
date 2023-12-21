import React, { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'
import './App.scss'
import { Button, Card, Form, Icon, Input, Menu, Popup } from 'semantic-ui-react'
import CreateChatModal from './components/modal'
import { messagess } from './data/message'
import Dropdown from './components/dropdown'
const socket = io()

function ChatApp() {
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')
  const [avatar, setAvatar] = useState({})
  const [messages, setMessages] = useState(messagess)
  const [open, setOpen] = useState([])
  const [typingUsers, setTypingUsers] = useState([])

  console.log(messages, 'baby')
  const [isVisible, setIsVisible] = useState(false)

  // Function to toggle visibility on click
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const chatContainerRef = useRef(null)

  // Function to scroll the chat container to the bottom
  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    socket.on('chat message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data])
    })

    socket.on('user joined', (message) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: 'System', message },
      ])
    })

    socket.on('notification', (data) => {
      const notification = `${data.user} ${data.message}`
      alert(notification)
    })

    socket.on('update typing', (users) => {
      console.log(users, 'jatti')
      setTypingUsers(users)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  const setUsernameAndJoin = () => {
    const trimmedUsername = username.trim()
    if (trimmedUsername !== '') {
      socket.emit('set username', trimmedUsername)
      console.log(`Sent set username event with value: ${trimmedUsername}`)
    }
  }

  const startTyping = () => {
    socket.emit('typing')
  }

  const stopTyping = () => {
    socket.emit('stop typing')
  }

  const sendMessage = () => {
    const trimmedMessage = message.trim()
    if (trimmedMessage !== '') {
      socket.emit('chat message', { trimmedMessage, avatar })
      // setMessages((prevMessages) => [...prevMessages, { user: username, message: trimmedMessage }]);
      setMessage('')
    }
  }

  return (
    <>
      <Menu>
        <Button onClick={() => setOpen(!open)}>
          <Icon name="options" />
        </Button>
      </Menu>
      <div className={`container ${open ? 'showSidebar' : 'hideSidebar'}`}>
        <div className="sidebar">
          <Button animated="fade">
            <Button.Content visible>Start group chat</Button.Content>
            <Button.Content hidden>Start group chat</Button.Content>
          </Button>

          <Button primary animated="fade" onClick={toggleVisibility}>
            <Button.Content visible>Start new chat</Button.Content>
            <Button.Content hidden>Start new chat</Button.Content>
          </Button>

          <Dropdown
            isVisible={isVisible}
            setUsernameAndJoin={setUsernameAndJoin}
            username={username}
            setUsername={setUsername}
            toggleVisibility={toggleVisibility}
            setAvatar={setAvatar}
            avatar={avatar}
          />

          {/* <CreateChatModal
          username={username}
          setUsername={setUsername}
          setUsernameAndJoin={setUsernameAndJoin}
        /> */}
        </div>
        <div className="msg-card-container">
          {
            <div className="msg-container" ref={chatContainerRef}>
              {messages.length > 0 &&
                messages.map((msg, index) =>
                  msg.user === 'System' ? (
                    <p className="new-user">{msg.message}</p>
                  ) : (
                    <div className="msg-card">
                      <img
                        src={`https://api.dicebear.com/7.x/${msg.avatar.category}/svg?seed=${msg.avatar.image}`}
                        alt="avatar"
                      />
                      <Card
                        // image='/images/avatar/large/elliot.jpg'
                        header={msg.user}
                        // meta="now"
                        description={msg.message}
                      />
                    </div>
                  ),
                )}
            </div>
          }

          <div className="msg-section">
            {typingUsers.length > 0 && typingUsers[0] !== username && (
              <div style={{ marginLeft: '1em' }}>
                {`${typingUsers.join(', ')} ${
                  typingUsers.length > 1 ? 'are' : 'is'
                } typing`}
              </div>
            )}
            <Input
              type="text"
              placeholder="Search..."
              action
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onInput={startTyping}
              onBlur={stopTyping}
              fluid
            >
              <input />
              <Button onClick={sendMessage} type="submit">
                Send
              </Button>
            </Input>
          </div>
        </div>
        {/* <Card.Group items={items} /> */}
      </div>
    </>
  )
}

export default ChatApp
