const Coffee = require('../models/coffee.model')
const coffeeController = {}

coffeeController.create = async (req, res) => {
    try{
        const { title, img } = req.body
        if (!title || !img) {
            return res.status(400).send({ message: `title or img can't empty!`})
        }

        await Coffee.findOne({ where: { title: title }}).then((coffee) => {
            if (coffee) {
                return res.status(400).send({ message: `Coffee already exists!`})
            }

            const newCoffee = { title: title, img: img }

            Coffee.create(newCoffee).then((data) => {
                res.send(data)
            }).catch((error) => {
                res.status(500).send({ message: error.message || `Something error while creating the coffee`})
            })
        })
    }catch(error){
        console.log(error)
        res.status(500).send({ message: error.message || `Something error while creating the coffee`})
    }
}

coffeeController.getAll = async (req, res) => {
    try{
        await Coffee.findAll().then((coffee) => {
            res.send(coffee)
        }).catch((error) => {
            res.status(500).send({ message: error.message || `something error while getting all coffee!`})
        })
    }catch(error){
        console.log(error)
        res.status(500).send({ message: error.message || `something error while getting All coffee!`})
    }
}

coffeeController.getByID = async (req, res) => {
    try{
        const { id } = req.params
        
        await Coffee.findByPk(id).then((coffee) => {
            if (!coffee) {
                res.status(404).send({ message: `not found coffee with id ${id}`})
            }else{
                res.send(coffee)
            }
        })
    }catch(error){
        console.log(error)
        res.status(500).send({ message: error.message || `something error while getting by id coffee!`})
    }
}

coffeeController.update = async (req, res) => {
    try{
        const { id } = req.params
        const { title, img } = req.body

        if (!title || !img) {
            return res.status(401).send({ message: `title or img can't empty!`})
        }

        await Coffee.update({ title, img }, { where: { id }}).then((n) => {
            if(n[0] === 1) {
                res.send({ message : `coffee updated successfully!`})
            }else{
                res.status(404).send({ message: `can not update coffee with id ${id}. Maybe coffee was not found or req. body is empty`})
            }
        })
    }catch(error){
        console.log(error)
        res.status(500).send({ message: error.message || `something error while updating coffee!`})
    }
}

coffeeController.deleted = async (req, res) => {
    try{
        const { id } = req.params
        if(!id) {
            return res.status(404).send({ message: `Id is missing`})
        }
        await Coffee.destroy({ where: { id: id }}).then((n) => {
            if(n === 1) {
                res.send({ message: `Coffee was deleted successfully!`})
            }else{
                res.status(404).send({ message: `Can not deleted restaurant with id ${id}. Maybe restaurant was not found or req. body is emety!` })
            }
        })
    }catch(error){
        console.log(error)
        res.status(500).send({ message: error.message || `something error while deleting coffee!`})
    }
}

module.exports = coffeeController