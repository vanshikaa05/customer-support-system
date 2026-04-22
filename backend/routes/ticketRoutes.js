import express from 'express';
import {
  createTicket,
  getTickets,
  updateTicketStatus,
  assignTicket,
} from '../controllers/ticketController.js';

import { protect, agent } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/')
  .post(protect, createTicket)
  .get(protect, getTickets);

router.route('/:id/status')
  .put(protect, agent, updateTicketStatus);

router.route('/:id/assign')
  .put(protect, agent, assignTicket);

export default router;
