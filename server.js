require("dotenv").config();
const express = require("express");
const app = express();
const connectToDb = require("./database/db");

const PORT = process.env.PORT || 3000;

//connect to database
connectToDb();

//use middleware
app.use(express.json());

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
