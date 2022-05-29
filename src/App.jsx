import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

import "./styles/App.css";

export const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.PROJECT_ID}
      userName={
        !localStorage.getItem("username")
          ? process.env.USER_NAME
          : localStorage.getItem("username")
      }
      userSecret={
        !localStorage.getItem("password")
          ? process.env.USER_SECRET
          : localStorage.getItem("password")
      }
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
