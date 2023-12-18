import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
import { avatars } from "../data/avatars.js";
import "../App.scss";

function CreateChatModal({ username, setUsername, setUsernameAndJoin }) {
  const [open, setOpen] = React.useState(false);

  const dummyFun = () => {
    setUsernameAndJoin();
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button primary animated="fade">
          <Button.Content visible>Start new chat</Button.Content>
          <Button.Content hidden>Start new chat</Button.Content>
        </Button>
      }
      className="avatars-list"
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content>
        <div className="input-field">
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name..."
          />
        </div>
        <p>Choose your Avatar</p>
        <Modal.Description>
          <div>
            {Object.keys(avatars).map((category) => (
              <div>
                <div className="avatars">
                  {avatars[category].map((image) => (
                    <img
                      src={`https://api.dicebear.com/7.x/${category}/svg?seed=${image}&scale=80`}
                      alt="avatar"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        {/* <Button color="black" onClick={() => setOpen(false)}>
          Nope
        </Button> */}
        <Button
          content="Confirm"
          labelPosition="right"
          icon="checkmark"
          onClick={dummyFun}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default CreateChatModal;
