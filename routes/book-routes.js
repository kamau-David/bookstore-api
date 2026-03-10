const {
  addNewBooks,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("../controllers/book-controller");
const express = require("express");

const router = express.Router();

//creating routes
router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBook);
router.post("/add", addNewBooks);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

module.exports = router;
