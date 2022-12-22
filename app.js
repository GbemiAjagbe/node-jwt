const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

const app = express();

//Load config
dotenv.config({ path: "./config/config.env" });

// database connection
connectDB();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');


// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);


PORT = 3000

app.listen(PORT, console.log(`Server running on port ${PORT}` ))