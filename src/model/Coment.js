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

}

module.exports = Coment;