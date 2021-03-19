const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

let corsOptions = {
    origin: "http://localhost:8081"
}
const db = require('./app/models')
//NOTE: in production just use: db.sequelize.sync() 
/* db.sequelize.sync({force:true}).then(()=>{
    console.log('Drop and Resync Db')
}) */
db.sequelize.sync()
//middleware
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))





require('./app/routes/auth.routes')(app)
require('./app/routes/user.routes')(app)

app.get('/', (req, res) => {
    res.json({message: 'Welcome'})
})



const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
