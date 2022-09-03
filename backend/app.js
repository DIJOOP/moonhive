const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');
// const bodyParser =require('body-parser')

// confige
dotenv.config({ path: 'backend/config/.env' });


app.use(cors({credentials:true,origin:process.env.FRONTEND_URL}));
app.use(express.json());
app.use(cookieParser())
// app.use(bodyParser.urlencoded({ extended: true }))


// ROUTE IMPORTS

const admin = require("./routes/adminRoutes")
const user=require("./routes/userRoutes")


app.use("/api/v1",admin)
app.use("/api/v1", user)




module.exports = app;
