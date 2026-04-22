import React from 'react';

function AdminPanel() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Panel</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">1,245</p>
          <div className="mt-4 flex gap-2">
            <button className="text-sm bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">Manage Users</button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700">Total Tickets</h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">8,432</p>
          <div className="mt-4 flex gap-2">
            <button className="text-sm bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">System Reports</button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700">Active Agents</h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
          <div className="mt-4 flex gap-2">
            <button className="text-sm bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">Manage Roles</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
