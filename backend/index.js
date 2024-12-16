const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require('dotenv').config();

const app = express();

const port = process.env.PORT

console.log(port)

const Port = 8000

app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
