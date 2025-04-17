import mongoose from "mongoose";
import { createClient } from "redis";
import config from "./env.js";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(config.mongodbUri);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export const connectRedis = async () => {
  try {
    const client = createClient({
      username: config.redis.username,
      password: config.redis.password,
      socket: {
        host: config.redis.host,
        port: config.redis.port,
      },
    });

    await client.connect();
    console.log("Redis Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
