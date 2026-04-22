import React, { useState } from 'react';

function ChatPage() {
  const [message, setMessage] = useState('');
  
  return (
    <div className="flex h-screen bg-gray-100 p-4">
      <div className="flex w-full max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-50 border-r">
          <div className="p-4 border-b bg-white font-semibold text-gray-700">
            Active Chats
          </div>
          <div className="p-4 border-b cursor-pointer hover:bg-gray-100 bg-blue-50">
            <h4 className="font-semibold text-gray-800">Alice Smith</h4>
            <p className="text-sm text-gray-500 truncate">I need help with my billing...</p>
          </div>
          <div className="p-4 border-b cursor-pointer hover:bg-gray-100">
            <h4 className="font-semibold text-gray-800">Bob Johnson</h4>
            <p className="text-sm text-gray-500 truncate">Thanks for resolving the issue!</p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b bg-white flex justify-between items-center">
            <h3 className="font-semibold text-lg text-gray-800">Alice Smith</h3>
            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Online</span>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="mb-4 flex">
              <div className="bg-blue-100 text-blue-900 rounded-lg p-3 max-w-md">
                <p>Hello! I need help with my billing for last month.</p>
                <span className="text-xs text-blue-700 mt-1 block">10:42 AM</span>
              </div>
            </div>
            <div className="mb-4 flex justify-end">
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-md">
                <p>Hi Alice, I can certainly help you with that. Let me pull up your account.</p>
                <span className="text-xs text-blue-200 mt-1 block text-right">10:45 AM</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white border-t">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 border"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 border border-blue-600">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
