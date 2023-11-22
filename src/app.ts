import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleError } from "./errors/handleError";
import { productRoute } from "./routes";

var cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use("/product", productRoute);

app.use(handleError);

export default app;
