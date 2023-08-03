const router = require('express').Router();
const { Books } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBooks = await Books.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBooks);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const booksData = await Books.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!booksData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(booksData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;