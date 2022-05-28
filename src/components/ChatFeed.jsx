import React from "react";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  // Finding active chat -- if chats exist, find activeChat;
  const chat = chats && chats[activeChat];

  // Function to check read receipts
  const renderReceipts = (message, isMyMessage) => {
    // Maps through entire chat
    return chat.people.map(
      (person, index) =>
        // For every person, check if last read is === to id
        person.last_read === message.id && (
          // If true, render a div showing icon
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage: `url(${person?.person?.avatar})`,
            }}
          />
        )
    );
  };

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

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {renderReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  // REMINDER: The "?" waits for chat to load before trying to render, preventing errors

  if (!chat) return "Loading... Please Wait";

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => `${person.person.username}`)}
        </div>
      </div>

      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
