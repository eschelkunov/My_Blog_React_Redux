'use strict';
var express = require('express');
var router = express.Router();
var path = require('path');
var controller = require('../controllers/appController');

// DB

  router.route('/posts/')
    .get(controller.fetch_all_posts)
    .post(controller.create_a_post);
   
  router.route('/posts/:id')
    .get(controller.read_a_post)
    .put(controller.update_a_post)
    .delete(controller.delete_a_post);

  router.route('/users/')
    .get(controller.fetch_all_users)
    .post(controller.create_a_user);

  // To be implemented later on
    // router.route('/users/:id')
  //   .get(controller.read_a_user)
  //   .put(controller.update_a_user)
  //   .delete(controller.delete_a_user);

module.exports = router;
