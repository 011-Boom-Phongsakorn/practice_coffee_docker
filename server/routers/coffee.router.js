const express = require('express')
const router = express.Router()

const { create, getAll, getByID, update, deleted } = require('../controllers/coffee.Controller')


router.post('/', create)
router.get('/', getAll)
router.get('/:id', getByID)
router.put('/:id', update)
router.delete('/:id', deleted)

module.exports = router