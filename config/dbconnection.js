

const Sequelize = require('sequelize');

const sequelize = new Sequelize('blog_posts', 'root', 'password', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

module.exports = sequelize;
global.sequelize = sequelize;
