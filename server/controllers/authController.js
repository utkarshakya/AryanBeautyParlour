import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/env.js';

// Register User
export const registerUser = async (req, res) => {
  const { name, email, password, role, phone } = req.body;

  try {

    

    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    user = new User({ name, email, password: hashedPassword, role, phone });
    await user.save();

    // Generate JWT
    const token = jwt.sign({ id: user._id }, config.jwtSecret, {
      expiresIn: '1h',
    });

    res.status(201).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Login User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id }, config.jwtSecret, {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};