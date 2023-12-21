import React, { useEffect, useState } from 'react'
import { Card, Form, Icon } from 'semantic-ui-react'
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
  const [error, setError] = React.useState(false)
  const [avatarError, setAvatarError] = React.useState(false)
  const [check, setCheck] = React.useState('')

  console.log(check, 'babe')

  const dummyFun = () => {
    if (username.length < 4) setError(true)
    if (!avatar.image || !avatar.category) setAvatarError(true)
    else {
      setUsernameAndJoin()
      setOpen(false)
    }
  }

  const updateUsername = (e) => {
    setUsername(e)
    error && username.length > 4 && setError(false)
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
            <Form>
              <Form.Field
                value={username}
                onChange={(e) => updateUsername(e.target.value)}
                placeholder="Enter your name..."
                id="form-input-control-error-email"
                control={Input}
                label="Enter your name"
                error={
                  error && {
                    content: 'Please enter your name',
                    pointing: 'below',
                  }
                }
              />
            </Form>
          </div>
          <div style={{ marginTop: '1rem' }}>
            {avatarError && (
              <div
                role="alert"
                aria-atomic="true"
                class="ui pointing below prompt label"
              >
                Please choose an avatar
              </div>
            )}
            <div className="shit">Choose your Avatar</div>{' '}
          </div>
          <Card.Description>
            <div className="avatars">
              {Object.entries(avatars).flatMap(([category, images]) =>
                images.map((image, index) => (
                  <div style={{ position: 'relative' }}>
                    <img
                      key={`${category}-${index}`}
                      src={`https://api.dicebear.com/7.x/${category}/svg?seed=${image}&scale=80`}
                      alt="avatar"
                      onClick={() => {
                        setAvatar({ category, image })
                        setAvatarError(false)
                      }}
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
