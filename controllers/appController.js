const Post = require('../models/Post');
const User = require('../models/User');

User.hasMany(Post, { as: 'Posts', foreignKey: 'user_id' });
Post.belongsTo(User, { as: 'User', foreignKey: 'user_id' });

const errorHandler = (err) => {
  console.error('Error: ', err);
};

// Posts

exports.fetch_all_posts = async (req, res) => {
  const posts = await Post.findAll().catch(errorHandler);
  return res.send(posts);
};

exports.create_a_post = async (req, res) => {
  if (!req.body.username || !req.body.email || !req.body.title || !req.body.content) {
    res.status(400).send({ error: true, message: 'Please provide the data for every field' });
  } else {
    const post = await Post.create({
      user_name: req.body.username,
      user_email: req.body.email,
      post_title: req.body.title,
      post_content: req.body.content,
    }).catch(errorHandler);
    return res.json(post);
  }
};

exports.read_a_post = async (req, res) => {
  const post = await Post.findOne({
    where: { id: req.params.id },
  }).catch(errorHandler);
  return res.json(post);
};

exports.update_a_post = async (req, res) => {
  const post = await Post.update(
    {
      post_title: req.body.title,
      post_content: req.body.content,
    },
    { where: { id: req.body.id } },
  ).catch(errorHandler);
  return res.json(post);
};

exports.delete_a_post = async (req, res) => {
  const post = await Post.destroy({
    where: { id: req.params.id },
  }).catch(errorHandler);
  return res.json(post);
};

// Users

exports.fetch_all_users = async (req, res) => {
  const users = await User.findAll().catch(errorHandler);
  return res.send(users);
};

exports.create_a_user = async (req, res) => {
  const user = await User.create({
    username: req.params.username, // to be implemented
    passwd: req.params.password, // to be implemented
    user_email: req.params.mail, // to be implemented
    likes: 0,
    comments: 0,
  }).catch(errorHandler);
  return res.json(user);
};
