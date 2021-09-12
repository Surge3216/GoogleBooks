const router = require('express').Router();
const { Book } = require('../../models/book');

// Matches with "/api/books"

router.post("/books", async (req, res) => {
    const newBook = new Book(req.body)
    try{
        const savedBook = await newBook.save();
        res.status(200).json(savedBook);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get("/books", async (req, res) => {
    try {Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))}
      catch(err){
        console.error(err)
        res.status(422).json(err)
      };
  })
// Matches with "/api/books/:id"

    module.exports = router;