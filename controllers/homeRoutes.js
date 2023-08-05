const router = require('express').Router();
const { Books, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const dbbooksData = await Books.findAll({
      include: [
        {
          model: User,
          attributes: ['id'],
        },
      ],
    });

    // Serialize data so the template can read it
    const books = dbbooksData.map((books) => books.get({ plain: true }));


    req.session.save(() => {
      if(req.session.countVisit) {
        req.session.countVisit++;
      } else {
        req.session.countVisit = 1;
      }
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      books, 
      countVisit: req.session.countVisit,
      logged_in: req.session.logged_in 
    });
  });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/books/:id', async (req, res) => {
  try {
    const dbbooksData = await Books.findByPk(req.params.id, {
      include: [
        {
          model: User,
          // (i think we need one more parameter)
          attributes: ['id', 
        ],
        },
      ],
    });

    const books = dbbooksData.get({ plain: true });

    res.render('books', {
      ...books,
      countVisit: req.session.countVisit,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Books }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
