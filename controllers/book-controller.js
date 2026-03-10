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

// GET a single book by ID
const getSingleBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found!",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book fetched successfully!",
      body: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch the book. Please try again.",
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
