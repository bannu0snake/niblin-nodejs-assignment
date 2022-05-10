const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    is_active: {
        type: Boolean,
        default: true,
    },
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    pages: {
        type: Number,
        default: 0
    },
    published_date: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("book", bookSchema);
