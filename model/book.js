const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BooksSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    authors: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
})

const BooksList = mongoose.model('Books', BooksSchema);

module.exports = BooksList;