const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class books extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}

books.init(
    {
      genre: {
        type: DataTypes.VARCHAR(25), 
        allowNull: false,

      },  
      author: {
        type: DataTypes.VARCHAR(40),
        allowNull: false,
      },
      title: {
        type: DataTypes.VARCHAR(50),
        allowNull: false,
      },
      id_number: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'books',
    }
  );

  module.exports = { books};