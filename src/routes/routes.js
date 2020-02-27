const router = require('express').Router()
const MoviesController = require('../controller/MoviesController')

router.get('/movies', MoviesController.getUpComingMovies)

router.get('/search', MoviesController.searchMovies)

router.get('/genre/:id', MoviesController.getGenre)

module.exports = router;