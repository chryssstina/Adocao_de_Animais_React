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

// rota de acesso ao perfil para DEFAULT_USER (usuário padrão)
router.get("/profile", authMiddleware, getUserProfileHandler); 

router.get('/all-users', getAllUsersHandler);
router.get('/profile/:user_id', authMiddleware, getUserByIdHandler);
router.put('/profile/:user_id', updateUserHandler);
router.delete('/profile/:user_id', deleteUserHandler);



// router.post('/', createUserHandler);
// está sendo substituída pela register

module.exports = router;