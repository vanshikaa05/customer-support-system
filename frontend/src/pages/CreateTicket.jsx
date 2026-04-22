import React, { useState } from 'react';
import api from '../api/axiosConfig';

function CreateTicket() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCreateTicket = async (e) => {
    e.preventDefault();
    console.log("CREATE TICKET CLICKED");
    setLoading(true);
    setError('');

    try {
      console.log("CALLING API... POST /api/tickets", formData);
      const response = await api.post('/api/tickets', formData);
      console.log("API RESPONSE:", response.data);
      
      window.location.href = "/customer";
    } catch (err) {
      console.log("ERROR:", err);
      setError(err.response?.data?.message || 'Failed to create ticket');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto mt-10 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Create New Ticket</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleCreateTicket} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input 
            type="text" 
            required 
            className="w-full border rounded p-2"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea 
            required 
            rows="4" 
            className="w-full border rounded p-2"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Priority</label>
          <select 
            className="w-full border rounded p-2"
            value={formData.priority}
            onChange={(e) => setFormData({...formData, priority: e.target.value})}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 disabled:bg-blue-400"
        >
          {loading ? 'Submitting...' : 'Submit Ticket'}
        </button>
      </form>
    </div>
  );
}

export default CreateTicket;
