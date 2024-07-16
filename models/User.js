const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection.js');
const argon2 = require('argon2');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await argon2.hash(newUserData.password, 8);
            }
        }
    }
);

module.exports = User;