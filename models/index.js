const User = require('./User');
const Books = require ('./Books')

User.hasMany(Books, {
    foreignKey: 'id_number',
    onDelete: 'CASCADE',
  });
  
  Books.belongsTo(User, {
    foreignKey: 'id',
  });


module.exports = { User, Books };
