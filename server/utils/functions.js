import jwt from "jsonwebtoken";
import config from "../config/env.js";

// Generate A New JWT Token
export function getJwtToken(payload, expire) {
  return jwt.sign(payload, config.jwtSecret, { expiresIn: expire });
}
