const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Import routes
const userRouter = require("./users/userLogin.router");
const homeRouter = require("./home/home.router");
const categoriesRouter = require("./categories/categories.router");
const itemsRouter = require("./items/items.router");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/", homeRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/items", itemsRouter);

module.exports = app;
