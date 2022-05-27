import React from "react";

const MyMessage = ({ message }) => {
  // Message is an object with information about the image -- ie: text, attachment, id
  // Checking if the message is an image, if it is then render an image
  if (message?.attachments?.length > 0) {
    return (
      // eslint-disable-next-line jsx-a11y/img-redundant-alt
      <img
        src={message.attachments[0].file}
        alt="message-image"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
