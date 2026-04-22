import React from 'react';

function CustomerDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Customer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border-t-4 border-blue-500">
          <h2 className="text-xl font-semibold text-gray-700">My Tickets</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">12</p>
          <a href="/tickets" className="text-blue-500 hover:underline text-sm mt-4 inline-block">View all tickets &rarr;</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-t-4 border-green-500">
          <h2 className="text-xl font-semibold text-gray-700">Resolved</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">8</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-t-4 border-yellow-500">
          <h2 className="text-xl font-semibold text-gray-700">Pending Action</h2>
          <p className="text-3xl font-bold text-yellow-600 mt-2">4</p>
        </div>
      </div>
      
      <div className="mt-8">
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
          Create New Ticket
        </button>
      </div>
    </div>
  );
}

export default CustomerDashboard;
