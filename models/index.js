const User = require('./User');
const books = require('./books');

User.hasMany(books, {
    foreignKey: 'id_number',
    onDelete: 'CASCADE',
  });
  
  books.belongsTo(User, {
    foreignKey: 'id',
  });


module.exports = { User, books };
