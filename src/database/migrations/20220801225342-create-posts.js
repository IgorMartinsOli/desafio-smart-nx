'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
          },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      urlImage: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.STRING,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  }
};
