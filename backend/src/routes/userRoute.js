const express = require('express');
const router = express.Router();

const {
    getAllUsersHandler,
    getUserByIdHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler
} = require('../controllers/userController');


router.get('/', getAllUsersHandler);
router.get('/:user_id', getUserByIdHandler);
router.post('/', createUserHandler);
router.put('/:user_id', updateUserHandler);
router.delete('/:user_id', deleteUserHandler);


module.exports = router;