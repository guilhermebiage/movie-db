const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'mysql',
    password:'Aquele11##',
    database: 'movie_db'
})

module.exports = connection