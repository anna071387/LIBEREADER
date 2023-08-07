const sequelize = require('../config/connection');
const { User, Book } = require('../models');


const booksData = require('./booksData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate( userData, {
    individualHooks: true,
    returning: true,
  });


  for (const book of booksData) {
    await Book.create({
      ...book,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};


// const seedAll = async () => {
//   await sequelize.sync({ force: true });

//   await seedGallery();

//   await seedPaintings();

//   process.exit(0);
// };

seedDatabase();
