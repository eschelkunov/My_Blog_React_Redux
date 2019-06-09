

const Sequelize = require('sequelize');
const sequelize = require('../config/dbconnection');

module.exports = sequelize.define('Comment', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  comment_content: Sequelize.STRING(300),

  post_id: Sequelize.INTEGER(11),

  user_id: Sequelize.INTEGER(11),

  createdAt: Sequelize.DATE,

  updatedAt: Sequelize.DATE,

});
