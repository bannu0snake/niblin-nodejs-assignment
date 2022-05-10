const bookRepo = require("../repositories/book.repository");
const userRepo = require("../repositories/user.repository");

const createBook = async (userId, author, name, price, pages, imageUrl) => {
    try {
        const published_date = new Date();

        const book = await bookRepo.addBook(
            userId,
            author,
            published_date,
            name,
            imageUrl,
            price,
            pages
        );
        return {
            status: true,
            message: "book created successfully",
            data: book,
            errors: {},
        };
    } catch (error) {
        throw error;
    }
};

const updateBook = async (bookId, name,author, price, pages, imageUrl,userId) => {
    try {
        const response1 = await bookRepo.findBookByBookId(bookId);
        if (response1.userId.toString() === userId) {
            const response = await bookRepo.updateBook(
                bookId,
                name,
                author,
                imageUrl,
                price,
                pages
            );
            if (response) {
                return {
                    status: true,
                    message: "Book updated successfully",
                    data: response,
                    errors: {},
                };
            }
        }
        return {
            status: true,
            message: "You can not update the book created by other user",
            data: {},
            errors: {},
        };
    } catch (error) {
        throw error;
    }
};

const deleteBook = async (bookId, userId) => {
    try {
        const response1 = await bookRepo.findBookByBookId(bookId);
        // console.log(response1,userId);
        if (response1.userId.toString() === userId) {
            const response2 = await bookRepo.deleteBook(bookId);

            return {
                status: true,
                message: "Book deleted successfully",
                data: response2,
                errors: {},
            };
        }
        return {
            status: true,
            message: "You can not delete the book created by other user",
            data: {},
            errors: {},
        };
    } catch (error) {
        throw error;
    }
};

const getBooks = async () => {
    try {
        const books = await bookRepo.findAllBooks();
        return {
            status: true,
            message: "Fetched all books successfully",
            data: books,
            errors: {},
        };
    } catch (error) {
        throw error;
    }
};

const getBookByBookId = async (bookId) => {
    try {
        let book = await bookRepo.findBookByBookId(bookId);
        let message = "Fetched the book with its id successfully";
        if (book === null) {
            message = "book does not exist anymore";
            book = {};
        }
        return {
            status: true,
            message: message,
            data: book,
            errors: {},
        };
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createBook,
    updateBook,
    deleteBook,
    getBooks,
    getBookByBookId,
};
