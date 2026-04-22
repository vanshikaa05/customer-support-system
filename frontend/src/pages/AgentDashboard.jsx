import React from 'react';

function AgentDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Agent Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border-t-4 border-indigo-500">
          <h2 className="text-lg font-semibold text-gray-700">Assigned to Me</h2>
          <p className="text-3xl font-bold text-indigo-600 mt-2">5</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-t-4 border-red-500">
          <h2 className="text-lg font-semibold text-gray-700">Urgent</h2>
          <p className="text-3xl font-bold text-red-600 mt-2">2</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-t-4 border-green-500">
          <h2 className="text-lg font-semibold text-gray-700">Resolved Today</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">14</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-t-4 border-blue-500">
          <h2 className="text-lg font-semibold text-gray-700">Avg Response</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">1.2h</p>
        </div>
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Tickets Queue</h2>
        <p className="text-gray-500">Ticket list will be rendered here...</p>
      </div>
    </div>
  );
}

export default AgentDashboard;
