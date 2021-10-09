class Tables{
    init(connection){
        this.connection = connection
        this.createMovie()
        this.createGenre()
        this.createMovieGenre()
    }

    createMovie(){
        const sql = 'CREATE TABLE IF NOT EXISTS Movie (id INT PRIMARY KEY,' +
            'title VARCHAR(512) NOT NULL, year INT, runningTime INT); '

        this.connection.query(sql, (err) =>{
            if(err){
                console.log(err)
            }
            else{
                console.log('Movie table created')
            }
        })
        
    }

    createGenre(){
        const sql = ' CREATE TABLE IF NOT EXISTS Genre (id INT PRIMARY KEY,' +
            'name VARCHAR(32) NOT NULL);'

        this.connection.query(sql, (err) =>{
            if(err){
                console.log(err)
            }
            else{
                console.log('Genre table created')
            }
        })
    }

    createMovieGenre(){
        const sql = 'CREATE TABLE IF NOT EXISTS MovieGenre (MovieId INT REFERENCES Movie(id),' +
            'genreId INT REFERENCES Genre(id), PRIMARY KEY(movieId, genreId)); '

        this.connection.query(sql, (err) =>{
            if(err){
                console.log(err)
            }
            else{
                console.log('MovieGenre table created')
            }
        })
    }
}

module.exports = new Tables