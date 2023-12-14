const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3001;
const cors = require("cors");
const mongoose = require("mongoose");
const mongodb_url = process.env.MONGODB_URL;
const ClientModel = require("./models/Client");
const nodemailer = require("nodemailer");

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

mongoose.connect(mongodb_url);
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});

app.get("/", (req, res) => {
  res.send("HelloWorld !");
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hatematig25@gmail.com",
    pass: "hzlw lemq aghj prac", // App password in the mail
  },
});

app.post("/contact", async (req, res) => {
  const { fullname, email, message } = req.body;
  try {
    const newClient = new ClientModel({ fullname, email, message });
    await newClient.save();
    res.json(newClient);

    const msg = {
      from: "hatematig25@gmail.com",
      to: "hatematig25@gmail.com",
      subject: "Nouvelle Client",
      html: `
        <p>Full Name: ${fullname}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    };
    transporter.sendMail(msg, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
      } else {
        console.log("Email sent: " + info.response);
        // Handle success as needed
      }
    });
  } catch (error) {
    console.error("Error saving Client:", error);
    res.status(500).json({ error: "Failed to save Client" });
  }
});

app.listen(port, () => {
  console.log("server runs perfectly !");
});
