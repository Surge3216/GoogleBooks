const router = require('express').Router();
const { Book } = require('../models/book');

// Matches with "/api/books"

router.post("/", async (req, res) => {
    const newBook = new Book(req.body)
    try{
        const savedBook = await newBook.save();
        res.status(200).json(savedBook);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get("/", async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book)
    } catch (err){
        res.status(500).json(err)
    }
  })
// Matches with "/api/books/:id"

    module.exports = router;