const { Pool } = require('pg');
const pool = new Pool({
    user: 'Keyin',
    host: 'localhost',
    database: 'library',
    password: 'Keyin2021',
    port: 5432,
});

const getBooks = async () => {
    const res = await pool.query('SELECT * FROM books');
    return res.rows;
};

const addBook = async (title, author, published_date, genre) => {
    await pool.query(
        'INSERT INTO books (title, author, published_date, genre) VALUES ($1, $2, $3, $4)',
        [title, author, published_date, genre]
    );
};

// Other CRUD operations...
const updateBook = async (id, title, author, published_date, genre) => {
    await pool.query(
        'UPDATE books SET title = $1, author = $2, published_date = $3, genre = $4 WHERE id = $5',
        [title, author, published_date, genre, id]
    );
};

const deleteBook = async (id) => {
    await pool.query('DELETE FROM books WHERE id = $1', [id]);
};

const getBookById = async (id) => {
    const res = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    return res.rows[0];
};

module.exports = { getBooks, addBook, updateBook, deleteBook, getBookById };


