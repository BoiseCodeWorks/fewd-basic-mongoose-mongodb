let router = require('express').Router()
let Pizzas = require('../models/Pizza')

//get all the pizzas
router.get('/', (req, res, next) => {
  Pizzas.find({})
    .then(pizzas => {
      res.send(pizzas)
    })
    .catch(next)
})

//get one pizza
router.get("/:id", (req, res, next) => {
  Pizzas.findById(req.params.id)
    .then(pizza => res.send(pizza))
    .catch(next)
})

//create a new pizza
router.post('/', (req, res, next) => {
  Pizzas.create(req.body)
    .then(pizza => res.send(pizza))
    .catch(next)
})

// update an existing pizza
router.put('/:id', (req, res, next) => {
  Pizzas.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({message: "pizza updated!"}))
    .catch(next)
})

//delete a pizza
router.delete('/:id', (req, res, next) => {
  Pizzas.findByIdAndRemove(req.params.id)
    .then(() => res.send({message: "pizza deleted"}))
    .catch(next)
})




module.exports = router