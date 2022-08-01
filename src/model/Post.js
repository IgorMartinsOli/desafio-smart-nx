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

}

module.exports = Post;