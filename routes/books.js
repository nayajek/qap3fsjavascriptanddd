const express = require('express');
const router = express.Router();
const db = require('../dal');

// GET all books
router.get('/', async (req, res) => {
    try {
        const books = await db.getBooks();
        res.render('books/index', { books });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// POST a new book
router.post('/', async (req, res) => {
    const { title, author, published_date, genre } = req.body;
    try {
        await db.addBook(title, author, published_date, genre);
        res.redirect('/books');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Routes for PUT
router.put('/:id', async (req, res) => {
    const { title, author, published_date, genre } = req.body;
    const id = req.params.id;
    try {
        await db.updateBook(id, title, author, published_date, genre);
        res.redirect('/books');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Routes for PATCH
router.patch('/:id', async (req, res) => {
    const { title, author, published_date, genre } = req.body;
    const id = req.params.id;
    try {
        await db.updateBook(id, title, author, published_date, genre);
        res.redirect('/books');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Routes for DELETE
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await db.deleteBook(id);
        res.redirect('/books');
    } catch (err) {
        res.status(500).send(err.message);
    }
});



module.exports = router;
