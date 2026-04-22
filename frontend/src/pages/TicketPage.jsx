import React, { useState, useEffect } from 'react';
import api from '../api/axiosConfig';

function TicketPage() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const [newTicket, setNewTicket] = useState({
    title: '',
    description: '',
    priority: 'medium'
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.href = '/login';
    } else {
      fetchTickets();
    }
  }, []);

  const fetchTickets = async () => {
    try {
      console.log("CALLING API... GET /api/tickets");
      const { data } = await api.get('/api/tickets');
      console.log("API RESPONSE (GET TICKETS):", data);
      setTickets(data);
    } catch (err) {
      console.log("ERROR (GET TICKETS):", err);
      setError(err.response?.data?.message || 'Failed to fetch tickets');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTicket = async (e) => {
    e.preventDefault();
    console.log("CREATE TICKET CLICKED");
    
    try {
      console.log("CALLING API... POST /api/tickets", newTicket);
      const { data } = await api.post('/api/tickets', newTicket);
      console.log("API RESPONSE (CREATE TICKET):", data);
      
      setTickets([data, ...tickets]); 
      setShowForm(false);
      setNewTicket({ title: '', description: '', priority: 'medium' });
    } catch (err) {
      console.log("ERROR (CREATE TICKET):", err);
      alert(err.response?.data?.message || 'Failed to create ticket');
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-600">Loading tickets...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Support Tickets</h1>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          {showForm ? 'Cancel' : 'Create New Ticket'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-bold mb-4">Create Ticket</h2>
          <form onSubmit={handleCreateTicket} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input 
                required
                type="text" 
                value={newTicket.title}
                onChange={(e) => setNewTicket({...newTicket, title: e.target.value})}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea 
                required
                rows="4"
                value={newTicket.description}
                onChange={(e) => setNewTicket({...newTicket, description: e.target.value})}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
              <select 
                value={newTicket.priority}
                onChange={(e) => setNewTicket({...newTicket, priority: e.target.value})}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
            <button 
              type="button" 
              onClick={handleCreateTicket}
              className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
            >
              Submit Ticket
            </button>
          </form>
        </div>
      )}
      
      {tickets.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No tickets found.</p>
      ) : (
        <div className="space-y-4">
          {tickets.map(ticket => (
            <div key={ticket._id} className="bg-white shadow rounded-lg p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-xl font-semibold">{ticket.title}</h2>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    ticket.status === 'open' ? 'bg-yellow-100 text-yellow-800' : 
                    ticket.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 
                    'bg-green-100 text-green-800'
                  }`}>
                    {ticket.status.toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{ticket.description.substring(0, 100)}...</p>
                <p className="text-xs text-gray-500">
                  Priority: <span className="font-medium text-gray-700 capitalize">{ticket.priority}</span> • 
                  Date: {new Date(ticket.createdAt).toLocaleDateString()}
                </p>
              </div>
              <button className="text-blue-600 font-medium hover:underline whitespace-nowrap">
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TicketPage;
