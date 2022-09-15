const express = require('express')
const router = express.Router()
const { getAllUser, getOneUser, addUser, deleteUser, updateUser } = require('../Controller/userController')

router.get('/', getAllUser);
router.get('/:id', getOneUser);
router.post('/', addUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

module.exports = router