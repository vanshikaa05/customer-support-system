import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import CustomerDashboard from './pages/CustomerDashboard';
import AgentDashboard from './pages/AgentDashboard';
import AdminPanel from './pages/AdminPanel';
import TicketPage from './pages/TicketPage';
import CreateTicket from './pages/CreateTicket';
import ChatPage from './pages/ChatPage';

// Simple Navigation Component
function Navigation() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <Link to="/" className="font-bold text-xl">Support System</Link>
        <div className="space-x-4">
          <Link to="/login" className="hover:text-blue-300">Login</Link>
          <Link to="/customer" className="hover:text-blue-300">Customer</Link>
          <Link to="/agent" className="hover:text-blue-300">Agent</Link>
          <Link to="/admin" className="hover:text-blue-300">Admin</Link>
          <Link to="/ticket" className="hover:text-blue-300">Ticket</Link>
          <Link to="/chat" className="hover:text-blue-300">Chat</Link>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome</h1>
        <p className="text-gray-600 mb-6">Select a dashboard from the navigation above.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/customer" element={<CustomerDashboard />} />
          <Route path="/agent" element={<AgentDashboard />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/ticket" element={<CreateTicket />} />
          <Route path="/ticket/:id" element={<TicketPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
