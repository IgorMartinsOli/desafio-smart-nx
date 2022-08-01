const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const Post = require('../model/Post')

const connection = new Sequelize(dbConfig);

Post.init(connection);

module.exports = connection;