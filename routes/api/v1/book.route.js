const express = require("express");
const authMiddleware = require("../../../middlewares/auth.middleware");
const bookController = require("../../../controllers/v1/book.controller");
const router = express.Router();

router.get("/get_all_books", authMiddleware, bookController.getBooks);
router.get("/get_book/:bookId", authMiddleware, bookController.getBookByBookId);
router.post("/create_book", authMiddleware, bookController.createBook);
router.put("/update_book", authMiddleware, bookController.updateBook);
router.delete("/delete_book/:bookId", authMiddleware, bookController.deleteBook);

module.exports = router;
