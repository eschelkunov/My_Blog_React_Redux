'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      username: {
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: true
    },
    
    passwd: {
        type: Sequelize.STRING(20),
        allowNull: false
    },

    user_email: {
      type: Sequelize.STRING(35),
      allowNull: false,
      unique: true
  },
  
    likes: {
      type: Sequelize.INTEGER(11),
      defaultValue: 0
    },
  
    comments: {
      type: Sequelize.INTEGER(11),
      defaultValue: 0
    },
  
    createdAt: Sequelize.DATE,
  
    updatedAt: Sequelize.DATE
    
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
