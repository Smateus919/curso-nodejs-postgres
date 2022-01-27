'use strict';

const { CUSTOMER_TABLE, customerSchema } = require('../models/customer.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(CUSTOMER_TABLE, 'user_id', customerSchema.userId)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(CUSTOMER_TABLE, 'user_id');
  }
};
