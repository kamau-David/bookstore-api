require("dotenv").config();
const express = require("express");
const app = express();
const connectToDb = require("./database/db");
const bookRoutes = require("./routes/book-routes");

const PORT = process.env.PORT || 4000;

//connect to database
connectToDb();

//use middleware
app.use(express.json());

//routes
app.use("/api/books", bookRoutes);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
