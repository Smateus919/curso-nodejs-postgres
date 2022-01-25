const { User, userSchema } = require('./user.model');

function setupMdels(sequelize) {
    User.init(userSchema, User.config(sequelize))
}

module.exports = setupMdels