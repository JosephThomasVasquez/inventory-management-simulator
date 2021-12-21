const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Import routes
const categoriesRouter = require("./categories/categories.router");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/categories", categoriesRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "You are connected!" });
});

module.exports = app;
