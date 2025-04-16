import express from "express";
import cors from "cors";
import config from "./config/env.js";
import connectDB from "./config/db.js";
import {
  authRoutes,
  serviceRoutes,
  appointmentRoutes,
  paymentRoutes,
  notificationRoutes,
} from "./routes";

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/notification", notificationRoutes);

// Test route
app.get("/", (req, res) => {
  res.status(200).send("Beauty Is Applied");
});

// Connect to MongoDB and Start a Server
connectDB()
  .then(() => {
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  })
  .catch(() => {
    console.log(`Sorry! ${err}`);
  });
