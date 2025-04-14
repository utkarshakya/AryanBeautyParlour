import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { getJwtToken } from "../utils/functions.js";

// Register User
export const registerUser = async (req, res) => {
  const { name, email, password, role, phone } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("Sorry, User already exists. Try Log In");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    user = new User({ name, email, password: hashedPassword, role, phone });
    await user.save();

    // Get JWT Token and send it to user
    const token = getJwtToken({ id: user._id, role: user.role }, "1h");
    res.status(201).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Login User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Get JWT Token and send it to user
    const token = getJwtToken({ id: user._id, role: user.role }, "1h");
    res.status(200).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Logout User
export const logoutUser = async (req, res) => {
  try {
    // let token = req.headers.authorization.split(" ")[1];
    // This is temporary and not a good solution, will update soon...
    res.status(201).json({ token: "theThingIsYouCannotAccessNowSoBye" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
