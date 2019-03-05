const express       = require('express')
const morgan        = require('morgan')
const bodyParser    = require('body-parser')
const cors          = require('cors')

const app = express()

const host = '127.0.0.1'
const port =  3000
     
// Use the logs messages
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// urls
app.post('/register',(req,res) => {
    res.send({
        message: "User " + req.body.idcode + " is registered!"
    })
})


// Listen the server
app.listen(port, host)


