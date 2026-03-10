const Book = require("../models/book");

// GET all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      success: true,
      message: "Books fetched successfully!",
      body: books,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch books. Please try again.",
    });
  }
};



module.exports = {
  addNewBooks,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
