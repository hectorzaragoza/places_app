'use strict';
module.exports = {
up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comments', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    comment: {
        type: Sequelize.TEXT
    },
    userId: {
        type: Sequelize.INTEGER
    },
    markerId: {
        type: Sequelize.INTEGER
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    }
    });
},
down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('comments');
} 
};
