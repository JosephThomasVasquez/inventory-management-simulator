import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import chalk from "chalk";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

export default app;
