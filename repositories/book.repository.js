const Book = require("../models/book.model");

const addBook = async (
    userId,
    author,
    published_date,
    name,
    imageUrl,
    price,
    pages
) => {
    const BookObject = new Book({
        userId,
        author,
        published_date,
        name,
        imageUrl,
        price,
        pages,
    });
    return await BookObject.save();
};

const updateBook = async (BookId, name, imageUrl, price, pages) => {
    return await Book.updateOne(
        { _id: BookId },
        {
            $set: {
                name,
                imageUrl,
                price,
                pages,
            },
        }
    );
};

const deleteBook = async (BookId) => {
    await Book.updateOne(
        { _id: BookId },
        {
            $set: {
                is_active: false,
            },
        }
    );
};

const findAllBooks = async () => {
    return await Book.find({ is_active: true });
};

const findBookByBookId = async (BookId) => {
    return await Book.findOne({ _id: BookId,is_active: true });
};

module.exports = {
    addBook,
    updateBook,
    deleteBook,
    findAllBooks,
    findBookByBookId,
};
