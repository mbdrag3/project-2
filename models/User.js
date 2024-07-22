const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection.js');
const argon2 = require('argon2');

class User extends Model {
    checkPassword(loginPw) {
        return argon2.verify(this.password, loginPw);
    }
}

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
            unique: true,
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
            beforeCreate: async (user) => {
                if (user.password) {
                    user.password = await argon2.hash(user.password);
                }
            },
            beforeUpdate: async (user) => {
                if (user.password) {
                    user.password = await argon2.hash(user.password);
                }
            }
        }
    });

module.exports = User;