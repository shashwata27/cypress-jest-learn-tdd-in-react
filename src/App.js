import { useState } from "react";
import NewMessageForm from "./NewMessageForm";
import MessageList from "./MessageList";

export default function App() {
  const [messages, setMessages] = useState([]);

  const handleSend = (newMessage) => {
    setMessages([newMessage, ...messages]);
  };

  console.log(messages);

  return (
    <>
      <NewMessageForm onSend={handleSend} />
      <MessageList messages={messages} />
    </>
  );
}
