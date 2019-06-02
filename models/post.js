'use strict';

var db = require('../config/dbconnection');

var Post = {

  getAllPosts: function(callback){
    return db.query("SELECT * FROM my_posts", callback);
  },

  getPostById: function(id, callback){
    return db.query("SELECT * FROM my_posts where id=?", [id], callback);
  },

  addPost: function(Post, callback){
    return db.query("INSERT INTO my_posts VALUES(?,?,?,?)",[Post.name, Post.email, Post.title, Post.post], callback);
  },

  updatePost: function(id, Post, callback){
    return db.query("UPDATE my_posts SET title=?, post=?, likes=?, comments=? WHERE id=?", [Post.title, Post.post, Post.likes, Post.comments, id], callback);
  },

  deletePost: function(id, callback){
    return db.query("DELETE FROM my_posts where id=?", [id], callback);
  }

};

module.exports = Post;
