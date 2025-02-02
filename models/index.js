const User = require('./User');
const Card = require('./Card');

User.hasMany(Card,{
    foreignKey: 'user_id',
});

Card.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Card };