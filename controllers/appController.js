'use strict';

var Post = require('../models/Post.js');

    exports.fetch_all_posts = function(req, res) {
        Post.getAllPosts(function(err, post) {
            console.log('controller')
            if (err) res.send(err);
            console.log('res', post);
            res.send(post);
        });
    };

    exports.create_a_post = function(req, res) {
        var new_post = new Post(req.body);
        //handles null error 
        if(!new_post.post || !new_post.status){
            res.status(400).send({ error:true, message: 'Please provide post/status' });
        }else{
            Post.addPost(new_post, function(err, post) {
                (err)? res.send(err) : res.json(post);
            });
        }
    };

    exports.read_a_post = function(req, res) {
        Post.getPostById(req.params.id, function(err, post) {
            (err)? res.send(err) : res.json(post);
        });
    };

    exports.update_a_post = function(req, res) {
        Post.updatePost(req.params.id, new Post(req.body), function(err, post) {
            (err)? res.send(err) : res.json(post);
        });
    };

    exports.delete_a_post = function(req, res) {
        Post.deletePost(req.params.id, function(err, post) {
            (err)? res.send(err) : res.json({ message: 'Post successfully deleted' });
        });
    };