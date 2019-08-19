const Sequelize = require('sequelize');
const sequelize = require('../config/dbconnection');

module.exports = sequelize.define('Post', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  post_title: Sequelize.STRING(255),

  post_content: Sequelize.STRING(300),

  user_name: Sequelize.STRING(50),

  user_email: Sequelize.STRING(255),

  createdAt: Sequelize.DATE,

  updatedAt: Sequelize.DATE,

  user_id: Sequelize.INTEGER(11),
});
