// File: /Chat/page.tsx
"use client"

import React, { useState } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleSendMessage = () => {
    if (currentMessage.trim() !== '') {
      setMessages([...messages, currentMessage]);
      setCurrentMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Sidebar - Chat Selection */}
      <div className="w-1/4 bg-gray-800 p-4">
        <h2 className="text-xl font-semibold mb-4">Chats</h2>
        {/* Chat selection can be added here */}
        <ul>
          <li className="py-2 px-4 bg-gray-700 rounded mb-2 cursor-pointer hover:bg-gray-600">Chat 1</li>
          <li className="py-2 px-4 bg-gray-700 rounded mb-2 cursor-pointer hover:bg-gray-600">Chat 2</li>
          <li className="py-2 px-4 bg-gray-700 rounded mb-2 cursor-pointer hover:bg-gray-600">Chat 3</li>
        </ul>
      </div>

      {/* Chat Room */}
      <div className="flex flex-col w-3/4">
        {/* Chat Room Header */}
        <header className="bg-gray-800 text-white p-4 text-center">
          <h1 className="text-2xl">VibeSpace Chatroom</h1>
        </header>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-900">
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              <div className="bg-gray-700 p-2 rounded shadow text-white">{message}</div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 flex items-center bg-gray-800 border-t border-gray-700">
          <input
            type="text"
            className="flex-1 p-2 bg-gray-700 text-white border border-gray-600 rounded mr-2"
            placeholder="Type your message..."
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-400"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
