const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required"],
    trim: true,
    maxLength: [100, "Book title cannot e more than 100 characters"],
  },
  author: {
    type: String,
    required: [true, "Authors Name is required"],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, "Publication year is required"],
    min: [1000, "Year must be atleast 1000"],
    max: [new Date().getFullYear(), "Year cannot be in the future"],
  },
  createdAT: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Book", BookSchema);
