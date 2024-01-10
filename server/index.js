const express = require("express");
const app = express();
const requestRouter = require("./routes/request");
require("dotenv").config();
const port = process.env.PORT || 3001;
const cors = require("cors");
const mongoose = require("mongoose");
const mongodb_url = process.env.MONGODB_URL;
const ClientModel = require("./models/Client");
const ProductsModel = require("./models/Produts");
const nodemailer = require("nodemailer");

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

mongoose.connect(mongodb_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.use("/get", requestRouter);

app.post("/signup", async (req, res) => {
  const { fullname, adress, phone, email, password } = req.body;
  try {
    const newClient = new ClientModel({
      fullname,
      adress,
      phone,
      email,
      password,
    });
    res.json(newClient);
    await newClient.save();
  } catch (error) {
    console.error("Error saving Client:", error);
    res.status(500).json({ error: "Failed to save Client" });
  }
});

app.post("/check", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await ClientModel.findOne({ email: email });
    if (!user) {
      res.send(false);
    } else {
      res.send(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error finding user");
  }
});

app.post("/contact", async (req, res) => {
  const { fullname, email, message } = req.body;
  try {
    /*
    const newClient = new ClientModel({ fullname, email, message });
    await newClient.save();
    */
    const msg = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Client",
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
        console.log("Email sent:", info.response);
        res.json(msg);
      }
    });
  } catch (error) {
    console.error("Error saving Client:", error);
    res.status(500).json({ error: "Failed to save Client" });
  }
});

app.post("/post", async (req, res) => {
  const { fullname, adress, phone, total, date, products } = req.body;
  try {
    const newProductsDocument = new ProductsModel({
      fullname,
      adress,
      phone,
      total,
      date,
      products,
    });
    await newProductsDocument.save();
    res.json(newProductsDocument);
    const message = {
      from: "hatematig25@gmail.com",
      to: "hatematig25@gmail.com",
      subject: "Nouvelle Commande",
      html: `
      <p>Visitez le lien ci-dessous pour voir la nouvelle commande:</p>
      <a href="https://offline404.netlify.app/commande.html">Commandes</a>
    `,
    };
    await transporter.sendMail(message);
  } catch (error) {
    console.error("Error saving products:", error);
    res.status(500).json({ error: "Failed to save products" });
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await ProductsModel.find({});
    res.send(products);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete", (req, res) => {
  const phone = req.body.phone;

  ProductsModel.findOneAndDelete({ phone: phone })
    .then((user) => {
      if (!user) {
        res.status(404).send("User not found");
      } else {
        res.send(user);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error deleting user");
    });
});

app.listen(port, () => {
  console.log("Server is running perfectly!");
});
