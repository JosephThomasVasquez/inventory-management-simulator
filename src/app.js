const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Import routes
const homeRouter = require("./home/home.router");
const categoriesRouter = require("./categories/categories.router");
const itemsRouter = require("./items/items.router");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/", homeRouter);
app.use("/categories", categoriesRouter);
app.use("/items", itemsRouter);

module.exports = app;
