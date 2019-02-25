// This is the same every time!
import express from "express"
import bp from 'body-parser'
// Creates express application
let server = express()




// Middlewear
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))




// Routes



// Catch-all
server.use('', (request, response, next)=>{
    response.status(404).send('No matching routes')
})


// Start server

server.listen(3000, ()=> {
    console.log('Server is running on port: 3000')
})
