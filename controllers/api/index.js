const router = require('express').Router();
const userRoutes = require('./UserRoutes');
const booksRoutes = require('./BooksRoutes');


router.use('/users', userRoutes);
router.use('/books', booksRoutes);

module.exports = router;
