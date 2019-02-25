// This is the same every time!
let express = require('express')
let bp = require('body-parser')

// Creates express application, instantiates an instance of 'express'
let server = express()
let port = 3000


// Middleware
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))


// Routes
let catRoutes = require('./server-assets/routes/cat-routes')
let dogRoutes = require('./server-assets/routes/dog-routes')

server.use('/api/cats', catRoutes)
server.use('/api/dogs', dogRoutes)


// Catch-all
server.use('', (request, response, next) => {
    response.status(404).send('No matching routes. Please check your request.')
})


// Start server

server.listen(3000, () => {
    console.log(`Server is running on port: ${port}`)
})