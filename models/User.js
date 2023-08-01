const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}

User.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue:UUIDV4
        },
        user_name: {
          type: DataTypes.VARCHAR(15),
          allowNull: false,

        },
        first_name: {
          type: DataTypes.VARCHAR(10),
          allowNull: false,
        },
        last_name: {
          type: DataTypes.VARCHAR,
          allowNull: false,
        },
       
      },
      {
        
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'User'
      }
    );
    
    module.exports = { User};
