import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, maxLength: 50 },
  email: { type: String, required: true, unique: true, maxLength: 100 },
  password: { type: String, required: true},
  phone: { type: String, maxLength: 10 },
  role: { type: String, enum: { values: ['customer', 'admin'], default: 'customer' } },
}, {'timestamps': true});

const User = mongoose.model('User', userSchema);

export default User;