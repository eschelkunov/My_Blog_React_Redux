'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comments', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      
      comment_content: Sequelize.STRING(300),
  
      post_id: Sequelize.INTEGER(11),
      
      user_id: Sequelize.INTEGER(11),
    
      createdAt: Sequelize.DATE,
    
      updatedAt: Sequelize.DATE
      
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comments');
  }
};
