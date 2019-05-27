var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home page of my blog' });
});

/* GET newPost page. */
router.get('/new', function(req, res, next) {
  res.render('newPost', { title: 'New post' });
});

/* Create new post */
router.put('/new#create', function(req, res, next) {
  res.render('singlePost', { title: 'Your new post is saved' });
});

/* GET singlePost page. */
router.get('/post/id', function(req, res, next) {
  res.render('singlePost', { title: 'Single post page' });
});

/* Edit post and save. */
router.post('/post/id#save', function(req, res, next) {
  res.render('singlePost', { title: 'Post changes was saved' });
});

/* Delete post and confirm */
router.delete('/post/id#remove', function(req, res, next) {
  res.render('index', { title: 'Post was removed. Redirecting to home page' });
});

module.exports = router;
