import express from "express";
import {protect} from "../middlewares/auth.js"
import { createPaymentOrder } from "../controllers/paymentController.js";

const router = express.Router();

router.use(protect);

router
    .route('/order')
    .post(createPaymentOrder);

export default router;