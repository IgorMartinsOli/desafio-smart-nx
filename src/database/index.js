const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const Post = require('../model/Post')
const Coment = require('../model/Coment')

const connection = new Sequelize(dbConfig);

Post.init(connection);
Coment.init(connection);

Coment.associate(connection.models)
Post.associate(connection.models)

module.exports = connection;