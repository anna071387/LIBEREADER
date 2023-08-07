const { Model, DataTypes } = require('sequelize');

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
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER (100),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING, 
        allowNull: false,
      },  
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
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
  
    module.exports = Books;