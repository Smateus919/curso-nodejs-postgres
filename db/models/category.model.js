const { Model, DataTypes, Sequelize } = require('sequelize') 

const CATEGORY_TABLE = 'categories'

const categorySchema = {
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
    }
}
class Category extends Model{
    static associate(models){
        this.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'categoryId'
        })
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'Category',
            timestramps: false,
            updatedAt: false
        }
    }
}

module.exports = { CATEGORY_TABLE, categorySchema, Category }