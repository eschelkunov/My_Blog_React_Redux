'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
    
      post_title: Sequelize.STRING(255),
      
      post_content: Sequelize.STRING(300),
    
      createdAt: Sequelize.DATE,
    
      updatedAt: Sequelize.DATE,
      
      user_id: Sequelize.INTEGER(11)
      
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts');
  }
};
