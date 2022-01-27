const { User, userSchema } = require('./user.model');
const { Customer, customerSchema } = require('./customer.model');
const { Product, productSchema } = require('./product.model');
const { Category, categorySchema } = require('./category.model');

function setupModels(sequelize) {
    User.init(userSchema, User.config(sequelize))
    Customer.init(customerSchema, Customer.config(sequelize))
    Product.init(productSchema, Customer.config(sequelize))
    Category.init(categorySchema, Customer.config(sequelize))

    Customer.associate(sequelize.models)
    Category.associate(sequelize.models)
    Product.associate(sequelize.models)
}

module.exports = setupModels