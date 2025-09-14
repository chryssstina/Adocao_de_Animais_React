const {
    getUserByEmailModel,
    createUserModel
} = require('../models/userModel');


const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



const userRegister = async (req, res) => {

    try {
        const { user_name, user_email, user_password } = req.body;

        if (!user_name || !user_email || !user_password) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios" });
        }

        const userExists = await getUserByEmailModel(user_email);
        if (userExists) {
            return res.status(400).json({ error: "E-mail já cadastrado" });
        }

        const newUser = await createUserModel(user_name, user_email, user_password);
        res.status(201).json({ message: "Usuário cadastrado com sucesso", newUser });
    } catch (error) {
        res.status(500).json({ error: "Erro ao registrar usuário" });
    }
}



const userLogin = async (req, res) => {
    try {
        const { user_email, user_password } = req.body;

        const user = await getUserByEmailModel(user_email);
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        //compara a senha que o usuário está inserindo com a senha cadastrada
        const validPassword = await bcrypt.compare(user_password, user.user_password);
        if (!validPassword) {
            return res.status(401).json({ error: "Senha inválida" });
        }


        const token = jwt.sign(
            {
                user_id: user.user_id,
                user_email: user.user_email,
                user_type: user.user_type
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.json({
            message: "Login realizado com sucesso",
            token,
            user: {
                user_id: user.user_id,
                user_email: user.user_email,
                user_type: user.user_type,
                user_name: user.user_name
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    userRegister,
    userLogin
}