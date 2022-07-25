import { useState } from "react";

export default function NewMessageForm({ onSend }) {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <input
        type="text"
        data-testid="messageText"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        data-testid="sendButton"
        onClick={() => {
          onSend(inputText);
          setInputText("");
        }}
      >
        Send
      </button>
    </div>
  );
}
