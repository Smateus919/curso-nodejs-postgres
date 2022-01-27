'use strict';

const { PRODUCT_TABLE, productSchema } = require('../models/product.model')
const { CATEGORY_TABLE, categorySchema } = require('../models/category.model')

module.exports = {
  async up (queryInterface) {
    
    await queryInterface.createTable(CATEGORY_TABLE, categorySchema)
    await queryInterface.createTable(PRODUCT_TABLE, productSchema)

  },

  async down (queryInterface) {
    
    queryInterface.dropTable(CATEGORY_TABLE)
    queryInterface.dropTable(PRODUCT_TABLE)

  }
};
