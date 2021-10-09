const Movie = require('../models/movies')
const movies = require('../repositories/movies')

module.exports = app => {
    app.get('/movies', (req,res) => {
        
        movies.getMovies()
            .then(results => res.status(201).json(results))
            .catch(err => res.status(400).json(err))
                
    })
}