import React from "react";

const TheirMessage = ({ lastMessage, message }) => {
  // Checks if latest message sent is by the right user
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {/* Checking if message is by user, render avatar background image */}
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      Their Message
    </div>
  );
};

export default TheirMessage;
