"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_1 = __importDefault(require("./routes/auth"));
const todo_1 = __importDefault(require("./routes/todo"));
const app = (0, express_1.default)();
const port = 3000;
const cors = require("cors");
app.use(cors());
app.use(express_1.default.json());
app.use("/auth", auth_1.default);
app.use("/todo", todo_1.default);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
// Connect to MongoDB
mongoose_1.default.connect("mongodb+srv://decryptlife:XwGPJC1QTVsXbVQX@cluster0.9auii05.mongodb.net/ReLearn?retryWrites=true&w=majority", { dbName: "ReLearn" });
