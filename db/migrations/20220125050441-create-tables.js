'use strict';

const { USER_TABLE, userSchema } = require('../models/user.model')
const { CUSTOMER_TABLE, customerSchema } = require('../models/customer.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, userSchema)
    await queryInterface.createTable(CUSTOMER_TABLE, customerSchema)
  },

  async down (queryInterface) {
    
    queryInterface.dropTable(USER_TABLE)
    queryInterface.dropTable(CUSTOMER_TABLE)
  }
};
