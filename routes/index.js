'use strict';
var express = require('express');
var router = express.Router();
var path = require('path');
var Post = require('../models/Post');

// PAGES

/* GET all posts page. */
router.get(['/', '/posts'], function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public/main.html'));
});

/* GET new post page. */
router.get('/posts/new', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public/newPost.html'));
});

/* GET single post page. */
router.get('/posts/:postId', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public/singlePost.html'));
});

// DB

/* Get all posts */
router.get('/api/posts/', function(req, res, next){
  Post.getAllPosts(function(err, rows){
    (err)? res.json(err): res.json(rows);
  });
});

/* GET post by ID */
router.get('/api/posts/:id', function(req, res, next){
  Post.getPostById(req.params.id, function(err, rows){
    (err)? res.json(err) : res.json(rows);
  });
});

/* Add post */
router.post('/api/posts/', function(req, res, next){
  Post.addPost(req.body, function(err, count){
    (err)? res.json(err) : res.json(req.body);
  });
});

/* Update post */
router.put('/api/posts/:id', function(req, res, next){
  Post.updatePost(req.params.id, req.body, function(err,rows){
    (err)? res.json(err) : res.json(rows);
  });
});

/* Delete post */
router.delete('/api/posts/:id', function(req, res, next){
  Post.deletePost(req.params.id, function(err, count){
    (err)? res.json(err) : res.json(count);
  });
});

module.exports = router;
