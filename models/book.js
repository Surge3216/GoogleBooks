const { model, Schema } = require('mongoose');
const mongoose = require('mongoose')

const bookSchema = new Schema ({
    bookThumbnail: {type: String},
    bookTitle: {type: String},
    bookPageCount: {type: String},
    bookLanguage: {type: String},
    bookDescription: {type: String},
    bookAuthors: {type: String},
    bookPublisher: {type: String},
    bookPreviewLink: {type: String},
    bookInfoLink: {type: String}
});

const Book = mongoose.model("Book", bookSchema);

module.exports.Book = Book;