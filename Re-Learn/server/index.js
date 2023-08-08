const express = require('express');
const mongoose = require('mongoose');

const { User, Course, Admin } = require("./db")
const cors = require('cors');

const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user")

const app = express();

app.use(cors());

app.use((req, res, next) => {
    res.header("Content-Type", "application/json;charset=UTF-8")
    res.header("Access-Control-Allow-Credentials", true)
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})


app.use(express.json())
app.use("/admin", adminRouter)
app.use("/user", userRouter)

// Connect to MongoDB
mongoose.connect('mongodb+srv://decryptlife:XwGPJC1QTVsXbVQX@cluster0.9auii05.mongodb.net/ReLearn?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "ReLearn" });


app.listen(3000, () => console.log("Server running on port 3000"))