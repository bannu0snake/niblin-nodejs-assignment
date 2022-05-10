const bookService = require("../../services/book.service");

const createBook = async (req, res) => {
    try {
        const body = req.body;
        if (
            body.name !== undefined &&
            body.author !== undefined &&
            body.price !== undefined &&
            body.pages !== undefined &&
            body.imageUrl !== undefined
        ) {
            const response = await bookService.createBook(
                req.user.id,
                body.author,
                body.name,
                body.price,
                body.pages,
                body.imageUrl
            );
            return res.status(200).json(response);
        } else {
            return res.status(422).json({
                status: false,
                message: "Missing parameters",
                data: {},
                errors: {},
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal server error",
            data: {},
            errors: error.message,
        });
    }
};

const updateBook = async (req, res) => {
    try {
        const body = req.body;
        if (
            body.bookId !== undefined
        ) {
            const response = await bookService.updateBook(
                body.bookId,
                body.name,
                body.author,
                body.price,
                body.pages,
                body.imageUrl,
                req.user.id
            );
            return res.status(200).json(response);
        } else {
            return res.status(422).json({
                status: false,
                message: "Missing parameters",
                data: {},
                errors: {},
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal server error",
            data: {},
            errors: error.message,
        });
    }
};

const deleteBook = async (req, res) => {
    try {
        const body = req.params;
        if (body.bookId !== undefined && req.user.id) {
            const response = await bookService.deleteBook(
                body.bookId,req.user.id
            );
            return res.status(200).json(response);
        } else {
            return res.status(422).json({
                status: false,
                message: "Missing parameters",
                data: {},
                errors: {},
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal server error",
            data: {},
            errors: error.message,
        });
    }
};

const getBooks = async (req, res) => {
    try {
        const response = await bookService.getBooks();
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: "Internal server error",
            data: {},
            errors: error.message,
        });
    }
};

const getBookByBookId = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        // console.log(req.params);
        if (bookId !== undefined) {
            const response = await bookService.getBookByBookId(bookId);
            return res.status(200).json(response);
        } else {
            return res.status(422).json({
                status: false,
                message: "Missing parameters",
                data: {},
                errors: {},
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server error",
            data: {},
            errors: {},
        });
    }
};

module.exports = {
    createBook,
    updateBook,
    deleteBook,
    getBooks,
    getBookByBookId,
};
