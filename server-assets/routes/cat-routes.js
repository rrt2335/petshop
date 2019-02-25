const router = require('express').Router();

// Only for Monday
let cats = [{
    name: "Garfield",
    age: 35,
    breed: "exotic shorthair"
}, {
    name: "Mr. Snibbley",
    age: 92,
    breed: "tabby"
}, {
    name: "Tom",
    age: 6,
    breed: "tuxedo cat"
}]

// GetAllCats
router.get('', (request, response, next) => {
    response.status(200).send(cats)
})

// Get one by Id (index)
router.get('/:id', (request, response, next) => {
    let cat = cats[request.params.id]
    if (!cat) {
        return response.status(400).send(`<h1>There is no cat at that ID.</h1>`)
    }
    response.status(200).send(cat)
})

router.post('', (request, response, next) => {
    // Request.body is the object sent from the client
    let newCat = request.body;
    cats.push(newCat)
    response.status(201).send(newCat)
})

router.delete('/:id', (request, response, next) => {
    if (request.params.id > -1 && request.params.id < cats.length) {
        cats.splice(request.params.id, 1)
        response.status(200).send("Deleted cat")
    }
    response.status(400).send(`<h1>There is no cat at that ID.</h1>`)
})


// Do not forget this line!!
module.exports = router