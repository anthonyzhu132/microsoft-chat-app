import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

import "./styles/App.css";

export const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.PROJECT_ID}
      userName={process.env.USER_NAME}
      userSecret={process.env.USER_SECRET}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
