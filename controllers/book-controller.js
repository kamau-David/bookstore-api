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

// POST a new book
const addNewBooks = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "New book created successfully!",
        body: newlyCreatedBook,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to create the book. Please try again.",
    });
  }
};

// PUT update a book by ID
const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found!",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book updated successfully!",
      body: updatedBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to update the book. Please try again.",
    });
  }
};

// DELETE a book by ID
const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found!",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book deleted successfully!",
      body: deletedBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete the book. Please try again.",
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
