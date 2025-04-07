import express from 'express';

import { getAppointments } from '../controllers/appointmentController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router
  .route('/')
  .get(getAppointments) // Public access
  .post(protect, createService) // Only admins can create

router
  .route("/:id")
  .put(updateAppointment) // Update appointment
  .delete(deleteAppointment); // Delete appointment

export default router;