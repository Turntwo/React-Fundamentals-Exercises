import logo from "./logo.svg";
import "./App.css";
import ChatWindow from "./ChatWindow";
import { useState } from "react";

const users = [{ username: "Amy" }, { username: "John" }];

const origMessages = [
  { username: "Amy", text: "Hi, Jon!" },
  { username: "Amy", text: "How are you?" },
  { username: "John", text: "Hi, Amy! Good, you?" },
];

const App = () => {
  const [messages, setMessages] = useState(origMessages);

  // If the user did not type anything, he/she should not be allowed to submit.
  const addMessage = (message, user) => {
    setMessages([...messages, {username: user.username, text: message}])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        
        <ChatWindow user={users[0]} messages={messages} addMessage={addMessage} />

        <ChatWindow user={users[1]} messages={messages} addMessage={addMessage}/>

      </div>
    </div>
  );
};

export default App;
