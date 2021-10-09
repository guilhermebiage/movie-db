const connection = require('../infrastructure/connection')
const repo = require('../repositories/movies')

class Movie{

    getMovies(){
        return repo.getMovies()
    }

}

module.exports = new Movie()