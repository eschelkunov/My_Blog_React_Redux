'use strict';

var db = require('../config/dbconnection');

var Post = {

  getAllPosts: function(callback){
    var sql = "SELECT * FROM ?? ";
    var inserts = ['my_posts'];
    sql = db.format(sql, inserts);
    return db.query(sql, callback);
  },

  getPostById: function(id, callback){
    var sql = "SELECT * FROM ?? WHERE ?? = ?";
    var inserts = ['my_posts', 'id', id];
    sql = db.format(sql, inserts);
    return db.query(sql, callback);
  },

  addPost: function(Post, callback){
    var sql = "INSERT INTO ?? VALUES(?,?,?,?,?,?,?,?)";
    var inserts = ['my_posts', Post.name, Post.email, Post.title, Post.post];
    sql = db.format(sql, inserts);
    return db.query(sql, callback);
  },

  updatePost: function(id, Post, callback){
    var sql = "UPDATE ?? SET ??= ?, ??= ?, ??= ?, ??= ? WHERE ??= ?";
    var inserts = ['my_posts', 'title', Post.title, 'post', Post.post, 'likes', Post.likes, 'comments', Post.comments, 'id', id];
    sql = db.format(sql, inserts);
    return db.query(sql, callback);
  },

  deletePost: function(id, callback){
    var sql = "DELETE FROM ?? WHERE ?? = ?";
    var inserts = ['my_posts', 'id', id];
    sql = db.format(sql, inserts);
    return db.query(sql, callback);
  }

};

module.exports = Post;
