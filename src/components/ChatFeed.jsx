import React from "react";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  // Finding active chat -- if chats exist, find activeChat;
  const chat = chats && chats[activeChat];

  // Rendering component messages
  const renderMessages = () => {
    // Assigning key from messages
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      // Assigning the message, finding it with key
      const message = messages[key];

      // Finding the last message sent
      const lastMessageKey = index === 0 ? null : keys[index - 1];

      // Checking if message is own user
      const isMyMessage = userName === message.sender.username;
    });
  };

  return <div>ChatFeed</div>;
};

export default ChatFeed;
