const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const {
    getAllUsersHandler,
    getUserByIdHandler,
    getUserProfileHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler
} = require('../controllers/userController');


router.get('/', getAllUsersHandler);
router.get('/:user_id', authMiddleware, getUserByIdHandler);
router.post('/', createUserHandler);
router.put('/:user_id', updateUserHandler);
router.delete('/:user_id', deleteUserHandler);

//rota com autentificação
router.get("/profile", authMiddleware, getUserProfileHandler);


module.exports = router;