const express = require('express');
const router = express.Router();

const {
    userRegister,
    userLogin
} = require('../controllers/authController');


//rotas de autentificação
router.post('/register', userRegister);
router.post('/login', userLogin);  


// rota completa para register(cadastro):
// http://localhost:3000/api/auth/register


// rota completa para login:
// http://localhost:3000/api/auth/login


module.exports = router;