import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth";
import todoRoutes from "./routes/todo";

const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://decryptlife:XwGPJC1QTVsXbVQX@cluster0.9auii05.mongodb.net/ReLearn?retryWrites=true&w=majority",
  { dbName: "ReLearn" }
);
