import React, { useState } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { avatars } from '../data/avatars.js'
import '../App.scss'

export default function Dropdown({
  isVisible,
  username,
  setUsername,
  setUsernameAndJoin,
  toggleVisibility,
  setAvatar,
  avatar,
}) {
  const [open, setOpen] = React.useState(false)

  const dummyFun = () => {
    setUsernameAndJoin()
    setOpen(false)
  }

  return (
    <div className="avatars-list">
      {/* Clicking on the Card.Header will toggle visibility */}
      <Card style={{ display: isVisible ? 'block' : 'none', width: '100%' }}>
        <Card.Content style={{ display: 'flex' }}>
          <Card.Header>Set Profile</Card.Header>
          <Icon
            name="close"
            style={{ marginLeft: 'auto' }}
            onClick={toggleVisibility}
          />
        </Card.Content>
        {/* Apply display: none based on isVisible state */}
        <Card.Content>
          <div className="input-field">
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name..."
            />
          </div>
          <p>Choose your Avatar</p>
          <Card.Description>
            <div className="avatars">
              {Object.entries(avatars).flatMap(([category, images]) =>
                images.map((image, index) => (
                  <div style={{ position: 'relative' }}>
                    <img
                      key={`${category}-${index}`}
                      src={`https://api.dicebear.com/7.x/${category}/svg?seed=${image}&scale=80`}
                      alt="avatar"
                      onClick={() => setAvatar({ category, image })}
                      style={
                        avatar.image === image
                          ? { backgroundColor: '#adadad30' }
                          : {}
                      }
                      // className={avatar.image === image ? "selected-avatar" : ""}
                      // Add position relative to position the emoji
                    />
                    {avatar.image === image && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '3px',
                          left: '3px',
                          fontSize: '1.5rem', // Adjust the size as needed,
                          color: '#21ba45',
                        }}
                      >
                        &#10004; {/* Tick emoji */}
                      </span>
                    )}
                    {/* <p>&#9989;</p> */}
                  </div>
                )),
              )}
            </div>
          </Card.Description>
          <Button
            content="Confirm"
            labelPosition="right"
            icon="checkmark"
            onClick={dummyFun}
            positive
            fluid
          />
        </Card.Content>
      </Card>
    </div>
  )
}
