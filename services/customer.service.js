const boom = require('@hapi/boom');

const pool = require('../libs/postgres.pool')
const { models } = require('../libs/sequelize');

class CustomerService {
  constructor() {
    this.pool = pool
  }

  async create(data) {
    const newCustomer = await models.Customers.create(data, {
      include: ['user']
    })
    return newCustomer;
  }

  async find() {
    const rta = await models.Customers.findAll({
      include: ['user']
    })
    return rta
  }

  async findOne(id) {
    const customer = await models.Customers.findByPk(id)
    if (!customer) {
      throw boom.notFound('User not found')
    }
    return customer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id)
    const rta = await customer.update(changes)
    return rta
  }

  async delete(id) {
    const customer = await this.findOne(id)
    await customer.destroy()
    return { id };
  }
}

module.exports = CustomerService;
