const {Model, DataTypes} = require('sequelize');

class Post extends Model {
    static init(sequelize) {
        super.init({
            description: DataTypes.STRING,
            urlImage: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Coment, {foreignKey: 'postId', as: 'comentarios'})
    }
}

module.exports = Post;