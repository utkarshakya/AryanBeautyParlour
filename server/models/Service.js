import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  duration: { type: Number, required: true }, // in minutes
  category: { type: String, enum: ['Hair', 'Skincare', 'Nails', 'Makeup'] },
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;