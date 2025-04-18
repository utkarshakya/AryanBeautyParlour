import { createClient } from "redis";
import config from "../config/env.js";

const client = createClient({
  username: config.redis.username,
  password: config.redis.password,
  socket: {
    host: config.redis.host,
    port: config.redis.port,
  },
});

export default client;
