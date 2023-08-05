const router = require('express').Router();
const { Books, Library } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all library 
    const dbLibraryData = await Library.findAll({
      include: [
        {
          model: Books,
          attributes: ['id'],





          // add additional attributes
        },
      ],
    });
// STOPS ANY USER FROM USING THE SITE WITHOUT LOGIN
    // Serialize data so the template can read it
    const library = dbLibraryData.map((library) => library.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      library, 
     // countVisit: req.session.countVisit,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/library/:id', async (req, res) => {
  try {
    const dbLibraryData = await Library.findByPk(req.params.id, {
      include: [
        {
          model: Books,
          // (i think we need one more parameter)





          attributes: ['id', 
        ],
        },
      ],
    });

    const library = dbLibraryData.get({ plain: true });

    res.render('library', {
      ...library,
      //countVisit: req.session.countVisit,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one book
router.get('/books/:id', async (req, res) => {
  try {
    const dbBooksData = await Books.findByPk(req.params.id);

    const books = dbBooksData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('Books', { books, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
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

    res.render('user', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/user');
    return;
  }
  // Otherwise, render the 'login' template


  //req.session.save(() => {
     // if(req.session.countVisit) {
       // req.session.countVisit++;
      //} else {
    //    req.session.countVisit = 1;
      //}
  res.render('login');
});

module.exports = router;
