const axios = require('axios');
if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const { genres } = require('../database/genres.json');


class MoviesController {

    async getUpComingMovies(req, res) {
        const { page } = req.query

        axios.get(`${process.env.API_URL}movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=${page}`)
            .then(function ({ data }) {
                return res.status(200).json(data)
            })
            .catch(function (error) {
                return res.status(500).json({ results: [] })
            })
    }

    async searchMovies(req, res) {
        const { movie } = req.query

        axios.get(`${process.env.API_URL}search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${movie}`)
            .then(function ({ data }) {
                return res.status(200).json(data)
            })
            .catch(function (error) {
                return res.status(500).json({ results: [] })
            })
    }


    getGenre(req, res) {
        const genreId = req.params.id

        const result = genres.find(genre => genreId == genre.id)

        return res.status(200).json({ genre: result.name })
    }
}

module.exports = new MoviesController();
