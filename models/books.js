const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class Books extends Model {}


Books.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
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
    },
      {
        sequelize,
        modelName: 'books',
      }
    );
  
    module.exports = Books;