/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {var createError = __webpack_require__(/*! http-errors */ \"http-errors\");\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar logger = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar indexRouter = __webpack_require__(/*! ./routes/index */ \"./routes/index.js\");\n\nvar app = express(); // view engine setup\n\napp.set('views', path.join(__dirname, 'views'));\napp.set('view engine', 'pug');\napp.use(cors()); // support parsing of application/json type post data\n\napp.use(bodyParser.json()); // support parsing of application/x-www-form-urlencoded post data\n\napp.use(bodyParser.urlencoded({\n  extended: true\n}));\napp.use(logger('dev'));\napp.use(express.json());\napp.use(express.urlencoded({\n  extended: false\n}));\napp.use(cookieParser());\napp.use(express[\"static\"](path.join(__dirname, '/public')));\napp.use('/api', indexRouter); // HTML Pages routes\n\n/* GET all posts page. */\n\napp.get(['/', '/posts'], function (req, res) {\n  res.sendFile(path.join(__dirname, './public/main.html'));\n});\n/* GET new post page. */\n\napp.get('/posts/new', function (req, res) {\n  res.sendFile(path.join(__dirname, './public/newPost.html'));\n});\n/* GET single post page. */\n\napp.get('/posts/:postId', function (req, res) {\n  res.sendFile(path.join(__dirname, './public/singlePost.html'));\n}); // catch 404 and forward to error handler\n\napp.use(function (req, res, next) {\n  next(createError(404));\n}); // error handler\n\napp.use(function (err, req, res) {\n  // set locals, only providing error in development\n  res.locals.message = err.message;\n  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page\n\n  res.status(err.status || 500);\n  res.render('error');\n});\nmodule.exports = app;\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./config/dbconnection.js":
/*!********************************!*\
  !*** ./config/dbconnection.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar sequelize = new Sequelize('blog_posts', 'root', 'password', {\n  host: '127.0.0.1',\n  dialect: 'mysql'\n});\nmodule.exports = sequelize;\nglobal.sequelize = sequelize;\n\n//# sourceURL=webpack:///./config/dbconnection.js?");

/***/ }),

/***/ "./controllers/appController.js":
/*!**************************************!*\
  !*** ./controllers/appController.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar Post = __webpack_require__(/*! ../models/Post */ \"./models/Post.js\");\n\nvar User = __webpack_require__(/*! ../models/User */ \"./models/User.js\");\n\nUser.hasMany(Post, {\n  as: 'Posts',\n  foreignKey: 'user_id'\n});\nPost.belongsTo(User, {\n  as: 'User',\n  foreignKey: 'user_id'\n});\n\nvar errorHandler = function errorHandler(err) {\n  console.error('Error: ', err);\n}; // Posts\n\n\nexports.fetch_all_posts =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var posts;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Post.findAll()[\"catch\"](errorHandler);\n\n          case 2:\n            posts = _context.sent;\n            return _context.abrupt(\"return\", res.send(posts));\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nexports.create_a_post =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, res) {\n    var post;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return Post.create({\n              post_title: req.body.title,\n              post_content: req.body.content,\n              user_id: req.body.user_id\n            })[\"catch\"](errorHandler);\n\n          case 2:\n            post = _context2.sent;\n            return _context2.abrupt(\"return\", res.json(post));\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nexports.read_a_post =\n/*#__PURE__*/\nfunction () {\n  var _ref3 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee3(req, res) {\n    var post;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return Post.findOne({\n              where: {\n                id: req.params.id\n              }\n            })[\"catch\"](errorHandler);\n\n          case 2:\n            post = _context3.sent;\n            return _context3.abrupt(\"return\", res.json(post));\n\n          case 4:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function (_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\nexports.update_a_post =\n/*#__PURE__*/\nfunction () {\n  var _ref4 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee4(req, res) {\n    var post;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return Post.update({\n              post_title: req.body.title,\n              post_content: req.body.content\n            }, {\n              where: {\n                id: req.params.id\n              }\n            })[\"catch\"](errorHandler);\n\n          case 2:\n            post = _context4.sent;\n            return _context4.abrupt(\"return\", res.json(post));\n\n          case 4:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n\n  return function (_x7, _x8) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\nexports.delete_a_post =\n/*#__PURE__*/\nfunction () {\n  var _ref5 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee5(req, res) {\n    var post;\n    return regeneratorRuntime.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.next = 2;\n            return Post.destroy({\n              where: {\n                id: req.params.id\n              }\n            })[\"catch\"](errorHandler);\n\n          case 2:\n            post = _context5.sent;\n            return _context5.abrupt(\"return\", res.json({\n              message: 'Post successfully deleted'\n            }));\n\n          case 4:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n\n  return function (_x9, _x10) {\n    return _ref5.apply(this, arguments);\n  };\n}(); // Users\n\n\nexports.fetch_all_users =\n/*#__PURE__*/\nfunction () {\n  var _ref6 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee6(req, res) {\n    var users;\n    return regeneratorRuntime.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            _context6.next = 2;\n            return User.findAll()[\"catch\"](errorHandler);\n\n          case 2:\n            users = _context6.sent;\n            return _context6.abrupt(\"return\", res.send(users));\n\n          case 4:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6);\n  }));\n\n  return function (_x11, _x12) {\n    return _ref6.apply(this, arguments);\n  };\n}();\n\nexports.create_a_user =\n/*#__PURE__*/\nfunction () {\n  var _ref7 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee7(req, res) {\n    var user;\n    return regeneratorRuntime.wrap(function _callee7$(_context7) {\n      while (1) {\n        switch (_context7.prev = _context7.next) {\n          case 0:\n            _context7.next = 2;\n            return User.create({\n              username: req.params.username,\n              // to be implemented\n              passwd: req.params.password,\n              // to be implemented\n              user_email: req.params.mail,\n              // to be implemented\n              likes: 0,\n              comments: 0\n            })[\"catch\"](errorHandler);\n\n          case 2:\n            user = _context7.sent;\n            return _context7.abrupt(\"return\", res.json(user));\n\n          case 4:\n          case \"end\":\n            return _context7.stop();\n        }\n      }\n    }, _callee7);\n  }));\n\n  return function (_x13, _x14) {\n    return _ref7.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./controllers/appController.js?");

/***/ }),

/***/ "./models/Post.js":
/*!************************!*\
  !*** ./models/Post.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar sequelize = __webpack_require__(/*! ../config/dbconnection */ \"./config/dbconnection.js\");\n\nmodule.exports = sequelize.define('Post', {\n  id: {\n    type: Sequelize.INTEGER(11),\n    allowNull: false,\n    autoIncrement: true,\n    primaryKey: true\n  },\n  post_title: Sequelize.STRING(255),\n  post_content: Sequelize.STRING(300),\n  createdAt: Sequelize.DATE,\n  updatedAt: Sequelize.DATE,\n  user_id: Sequelize.INTEGER(11)\n});\n\n//# sourceURL=webpack:///./models/Post.js?");

/***/ }),

/***/ "./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar sequelize = __webpack_require__(/*! ../config/dbconnection */ \"./config/dbconnection.js\");\n\nmodule.exports = sequelize.define('User', {\n  id: {\n    type: Sequelize.INTEGER(11),\n    allowNull: false,\n    autoIncrement: true,\n    primaryKey: true\n  },\n  username: {\n    type: Sequelize.STRING(35),\n    allowNull: false,\n    unique: true\n  },\n  passwd: {\n    type: Sequelize.STRING(20),\n    allowNull: false\n  },\n  user_email: {\n    type: Sequelize.STRING(35),\n    allowNull: false,\n    unique: true\n  },\n  likes: {\n    type: Sequelize.INTEGER(11),\n    defaultValue: 0\n  },\n  comments: {\n    type: Sequelize.INTEGER(11),\n    defaultValue: 0\n  },\n  createdAt: Sequelize.DATE,\n  updatedAt: Sequelize.DATE\n});\n\n//# sourceURL=webpack:///./models/User.js?");

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar controller = __webpack_require__(/*! ../controllers/appController */ \"./controllers/appController.js\"); // DB\n\n\nrouter.route('/posts/').get(controller.fetch_all_posts).post(controller.create_a_post);\nrouter.route('/posts/:id').get(controller.read_a_post).put(controller.update_a_post)[\"delete\"](controller.delete_a_post);\nrouter.route('/users/').get(controller.fetch_all_users).post(controller.create_a_user); // To be implemented later on\n// router.route('/users/:id')\n//   .get(controller.read_a_user)\n//   .put(controller.update_a_user)\n//   .delete(controller.delete_a_user);\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./routes/index.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-errors\");\n\n//# sourceURL=webpack:///external_%22http-errors%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ })

/******/ });