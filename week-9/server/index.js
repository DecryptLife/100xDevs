const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)


// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect("mongodb+srv://decryptlife:XwGPJC1QTVsXbVQX@cluster0.9auii05.mongodb.net/ReLearn?retryWrites=true&w=majority",
    { dbName: "ReLearn" });
app.listen(3001, () => console.log('Server running on port 3000'));
