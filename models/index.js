const User = require('./User');
const Books = require ('./Books');
const Library = require ('./Library');

Library.hasMany(Books, {
    foreignKey: 'library_id',
    onDelete: 'CASCADE',
  });
  
  Books.belongsTo(User, {
    foreignKey: 'library_id',
  });


module.exports = { User, Books, Library };
