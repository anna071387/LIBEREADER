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
        type: DataTypes.STRING, 
        allowNull: false,

      },  
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
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