const User = require('./User');
const Books = require ('./Books');
const Library = require ('./Library');

Library.hasMany(Books, {
    foreignKey: 'books_id',
    onDelete: 'CASCADE',
  });
  
User.hasMany(Books, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

  Books.belongsTo(User, {
    foreignKey: 'user_id',
  });


module.exports = { User, Books, Library };
