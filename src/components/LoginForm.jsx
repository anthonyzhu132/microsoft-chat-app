import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

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
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
