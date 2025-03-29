import { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    {
      text: "Bhai vo tumhra screw driver box rakh diya table par",
      sender: "Friend",
      time: "5:01 PM",
    },
    { text: "Theek hai", sender: "You", time: "6:14 PM" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMessage = {
      text: input,
      sender: "You",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 p-4 border-r border-gray-700">
        <h2 className="text-lg font-bold mb-4">Chats</h2>
        <div className="p-3 bg-gray-700 rounded-md cursor-pointer">
          +91 91515 83099
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col flex-1">
        {/* Chat Header */}
        <div className="bg-gray-800 p-4 border-b border-gray-700 flex items-center">
          <span className="text-lg font-semibold">+91 91515 83099</span>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-900">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex mb-2 ${
                msg.sender === "You" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 max-w-xs rounded-lg text-sm shadow-md ${
                  msg.sender === "You"
                    ? "bg-green-500 text-white rounded-br-none"
                    : "bg-gray-700 text-white rounded-bl-none"
                }`}
              >
                {msg.text}
                <div className="text-xs text-gray-300 text-right mt-1">
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="flex items-center p-3 bg-gray-800 border-t border-gray-700">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={sendMessage}
            className="ml-2 p-3 bg-green-500 text-white rounded-full hover:bg-green-600"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
