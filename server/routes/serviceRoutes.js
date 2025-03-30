import express from 'express';
import {
  createService,
  getServices,
  updateService,
  deleteService,
} from '../controllers/serviceController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router
  .route('/')
  .post(protect, admin, createService) // Only admins can create
  .get(getServices); // Public access

router
  .route('/:id')
  .put(protect, admin, updateService) // Only admins can update
  .delete(protect, admin, deleteService); // Only admins can delete

export default router;