var express = require('express');
var router = express.Router();

var genre_controller = require('../controllers/genreController');
var author_controller = require('../controllers/authorController');
var book_controller = require('../controllers/bookController');
var bookInstance_controller = require('../controllers/bookinstanceController');

// Get catalog home page.
/// GENRE ROUTES ///
router.post('/genres/create', genre_controller.genre_create);

//Get request for list of all Genre.
router.get('/genres', genre_controller.genre_list);

// GET request for one Genre.
router.get('/genre/:id', genre_controller.genre_detail);

// POST request to delete Genre.
router.delete('/genre/:id', genre_controller.genre_delete);

// POST request to update Genre.
router.put('/genre/:id', genre_controller.genre_update);

/// Author ROUTES ///
router.post('/authors/create', author_controller.author_create);

//Get request for list of all Genre.
router.get('/authors', author_controller.author_list);

// GET request for one Genre.
router.get('/author/:id', author_controller.author_detail);

// POST request to delete Genre.
router.delete('/author/:id', author_controller.author_delete);

// POST request to update Genre.
router.put('/author/:id', author_controller.author_update);

/// Book ROUTES ///
router.post('/books/create', book_controller.book_create);

//Get request for list of all Genre.
router.get('/books', book_controller.book_list);

// GET request for one Genre.
router.get('/book/:id', book_controller.book_detail);

// POST request to delete Genre.
router.delete('/book/:id', book_controller.book_delete);

// POST request to update Genre.
router.put('/book/:id', book_controller.book_update);

/// BookInstance ROUTES ///
router.post('/bookinstances/create', bookInstance_controller.bookinstance_create);

//Get request for list of all Genre.
router.get('/bookinstances', bookInstance_controller.bookinstance_list);

// GET request for one Genre.
router.get('/bookinstance/:id', bookInstance_controller.bookinstance_detail);

// POST request to delete Genre.
router.delete('/bookinstance/:id', bookInstance_controller.bookinstance_delete);

// POST request to update Genre.
router.put('/bookinstance/:id', bookInstance_controller.bookinstance_update);


module.exports = router;