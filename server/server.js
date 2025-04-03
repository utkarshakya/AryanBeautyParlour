import express from 'express';
import cors from 'cors';
import config from './config/env.js';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';


// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes)
app.use('/api/services', serviceRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Beauty Parlor API is running!');
});

// Connect to MongoDB and Start a Server
connectDB()
  .then(() => {
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`)
    })
  })
  .catch(() => {
    console.log(`Sorry! ${err}`)
  })

// Start server
// app.listen(config.port, () => {
//   console.log(`Server running on port ${config.port}`);
// });