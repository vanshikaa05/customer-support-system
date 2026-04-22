import Ticket from '../models/Ticket.js';

// @desc    Create new ticket
// @route   POST /api/tickets
// @access  Private
export const createTicket = async (req, res) => {
  try {
    const { title, description, priority } = req.body;

    const ticket = await Ticket.create({
      user: req.user._id,
      title,
      description,
      priority,
    });

    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Get tickets (user sees own, agent/admin sees all)
// @route   GET /api/tickets
// @access  Private
export const getTickets = async (req, res) => {
  try {
    let query = {};
    
    // Customers only see their own tickets
    if (req.user.role === 'customer') {
      query.user = req.user._id;
    }

    const tickets = await Ticket.find(query)
      .populate('user', 'name email')
      .populate('assignedTo', 'name')
      .sort({ createdAt: -1 });

    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Update ticket status
// @route   PUT /api/tickets/:id/status
// @access  Private (Agent/Admin)
export const updateTicketStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    ticket.status = status;
    const updatedTicket = await ticket.save();

    res.json(updatedTicket);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Assign ticket to agent
// @route   PUT /api/tickets/:id/assign
// @access  Private (Agent/Admin)
export const assignTicket = async (req, res) => {
  try {
    const { agentId } = req.body;
    
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    ticket.assignedTo = agentId;
    // Automatically change status to in-progress when assigned
    if (ticket.status === 'open') {
      ticket.status = 'in-progress';
    }
    
    const updatedTicket = await ticket.save();

    res.json(updatedTicket);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
