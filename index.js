const express = require('express');
const app = express();
const bookRoutes = require('./routes/books');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/books', bookRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
