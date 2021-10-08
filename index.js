const customExpress = require("./config/customExpress")
const { connect } = require("./infrastructure/connection")
const connection = require('./infrastructure/connection')
const Tables = require('./infrastructure/tables')

connection.connect(err =>{
    if(err){
        console.log(err)
    }
    else{
        console.log('connected')

        Tables.init(connection)

        const app = customExpress()

        app.listen(3001, () => console.log('listening on 3001'))
    }
})