import { ChatEngine } from "react-chat-engine";

import "./styles/App.css";

export const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.PROJECT_ID}
      userName={process.env.USER_NAME}
      userSecret={process.env.USER_SECRET}
    />
  );
};

export default App;
