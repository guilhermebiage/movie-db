const connection = require('../infrastructure/connection')
const query = require('../infrastructure/queries')

class Movie{
    getMovies(){
        const sql = 'SELECT * FROM Movie'
        return query(sql)
    }
}

module.exports = new Movie()