

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('comments', {
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

  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('comments'),
};
