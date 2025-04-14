import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxLength: 100,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
    phone: {
      type: String,
      required: true,
      match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number']
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
