const { Model, DataTypes, Sequelize } = require('sequelize') 

const { USER_TABLE } = require('./user.model') 

const CUSTOMER_TABLE = 'customers'

const customerSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },
    userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
        references:{
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE', // Que comportamiento tendria el campo en caso de actualizarse en la tabla user
        onDelete: 'SET NULL' //Que hacer en caso de que se elimine el campo en la tabla user
    }
}
class Customer extends Model{
    static associate(models){
        this.belongsTo(models.User, {as: 'user'})
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: CUSTOMER_TABLE,
            modelName: 'Customers',
            timestramps: false,
            updatedAt: false
        }
    }
}

module.exports = { CUSTOMER_TABLE, customerSchema, Customer }