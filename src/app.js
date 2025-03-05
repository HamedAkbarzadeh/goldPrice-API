import express from "express";
import goldRouter from "./gold/goldRouter.js";

const app = express();

app.use(express.json());

app.use("/api", goldRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
