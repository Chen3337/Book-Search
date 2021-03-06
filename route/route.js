const express = require('express');
const router = express.Router();
const books = require('../model/book');

router.post('/newbook', function (req, res) {
    var book = req.body;
    books.create({
        title: book.title,
        authors: JSON.stringify(book.authors),
        description: book.description,
        image: book.image,
        link: book.link
    }).then((result) => {
        res.send(result);
    }).catch((err) => res.send(err));
});

router.get('/savedbook', function (req, res) {
    books.find({}).then((result) => {
        res.json(result);
    }).catch((err) => res.send(err));
});

router.delete('/deletebook/:id', function (req, res) {
    var id = req.params.id;
    books.findByIdAndDelete(id).then((result) => {
        res.json(result);
    }).catch((err) => res.send(err));
});

module.exports = router;