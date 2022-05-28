import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {
  const { chatId, creds } = props;
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      // Sending message with credentials, chatId associated, and the text (value from state)
      sendMessage(creds, chatId, { text });
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);

    // Checks if someone is typing
    isTyping(props, chatId);
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message"
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </form>
  );
};

export default MessageForm;
