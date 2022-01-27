const { Model, DataTypes, Sequelize } = require('sequelize') 

const { CATEGORY_TABLE } = require('./category.model')

const PRODUCT_TABLE = 'products'

const productSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    image: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    price: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    description: {
        allowNull: false,
        type: DataTypes.TEXT,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },
    categoryId: {
        field: 'category_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references:{
            model: CATEGORY_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE', // Que comportamiento tendria el campo en caso de actualizarse en la tabla user
        onDelete: 'SET NULL' //Que hacer en caso de que se elimine el campo en la tabla user
    }
}
class Product extends Model{
    static associate(models){
        this.belongsTo(models.Category, {as: category})
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'Product',
            timestramps: false,
            updatedAt: false
        }
    }
}

module.exports = { PRODUCT_TABLE, productSchema, Product }