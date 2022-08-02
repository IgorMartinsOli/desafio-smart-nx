const {Model, DataTypes} = require('sequelize');

class Coment extends Model {
    static init(sequelize) {
        super.init({
            description: DataTypes.STRING,
            urlImage: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Post, {foreignKey: 'postId', as: 'comentario'})
    }
}

module.exports = Coment;