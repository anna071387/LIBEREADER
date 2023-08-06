const router = require('express').Router();
const userRoutes = require('./userRoutes');
const booksRoutes = require('./booksRoutes');
// const libraryRoutes = require('./libraryRoutes');

router.use('/users', userRoutes);
router.use('/books', booksRoutes);
// router.use('/library', libraryRoutes);

module.exports = router;
