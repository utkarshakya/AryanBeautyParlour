import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT,
  mongodbUri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  razorpayId: process.env.RAZORPAY_KEY_ID,
  razorpaySecret: process.env.RAZORPAY_KEY_SECRET,
  cloudinary: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  },
};