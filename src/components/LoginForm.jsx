import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Submits username & password to chat-engine to return messages

    const authObject = {
      "Project-ID": process.env.PROJECT_ID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      setError("Incorrect Login Information");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Come Chat!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="input"
            placeholder="username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input"
            placeholder="password"
            required
          />

          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting!</span>
            </button>
          </div>

          <h2 className="error"> {error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
