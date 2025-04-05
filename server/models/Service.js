import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: "Not Available" },
  price: { type: Number, required: true },
  duration: { type: Number, required: true }, // in minutes
  category: { type: String, enum: ['Hair', 'Skincare', 'Nails', 'Makeup', 'Other'], default: 'Other' },
}, {'timestamps': true});

const Service = mongoose.model('Service', serviceSchema);

export default Service;