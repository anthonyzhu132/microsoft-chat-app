import React from "react";

const MyMessage = ({ message }) => {
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
  return <div>My Message</div>;
};

export default MyMessage;
