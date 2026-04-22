import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';

// Routes
import authRoutes from './routes/authRoutes.js';
import ticketRoutes from './routes/ticketRoutes.js';

// Middleware
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Load env vars
dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*', // In production, restrict to frontend URL
    methods: ['GET', 'POST']
  }
});

// Built-in Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/tickets', ticketRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Socket.io logic
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('join_ticket', (ticketId) => {
    socket.join(ticketId);
  });

  socket.on('send_message', (data) => {
    io.to(data.ticketId).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Custom Error Handler Middleware
app.use(notFound);
app.use(errorHandler);

// Database connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

const PORT = process.env.PORT || 5000;

// Start server
httpServer.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
