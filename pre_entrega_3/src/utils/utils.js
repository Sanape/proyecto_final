import { dirname } from "path";
import { fileURLToPath } from "url";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function matchPasswords(passwordToCompare, originalPassword) {
  const result = await bcrypt.compare(passwordToCompare, originalPassword);

  return result;
}

async function generateToken(data) {
  const token = await jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return token;
}

async function customResponse(res, status, message) {
  return res.status(status).json({ message: message });
}


function createUniqueToken() {
  const uniqueToken = uuidv4();

  return uniqueToken;
}

async function sendEmail(options) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  options.from = process.env.MAIL_USER;
  await transporter.sendMail(options);
}

export {
  __dirname,
  generateToken,
  customResponse,
  matchPasswords,
  createUniqueToken,
  sendEmail,
};
