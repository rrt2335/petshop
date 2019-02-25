const router = require('express').Router();

let dogs = [{
    name: "Simon",
    age: 1,
    breed: "coton de tulear"
},{
    name: "Mr. Peabody",
    age: 27,
    breed: "beagle"
},{
    name: "Harley",
    age: 16,
    breed: "lhasa aspo"
}]

// GetAllDogs
router.get('', (request, response, next) => {
    response.status(200).send(dogs)
})

router.get('', (request, response, next) => {
    let dog = dogs[request.params.id]
    if (!dog) {
        return response.status(400).send("There is no dog at that ID.")
    }
    response.status(200).send(dog)
})

router.post('', (request, repsonse, next) => {
    let newDog = request.body
    dogs.push(newDog)
    response.status(201).send(dog)
})

router.delete('', (request, response, next) => {
    if (request.params.id > -1 && request.params.id < dogs.length) {
        dogs.splice(request.params.id, 1)
        response.status(200).send("Deleted dog")
    }
    response.status(400).send("There is no dog at that ID.")
})

module.exports = router;