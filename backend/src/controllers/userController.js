const {
    getAllUsersModel,
    getUserByIdModel,
    getUserProfileModel,
    createUserModel,
    updateUserModel,
    deleteUserModel
} = require('../models/userModel');


const getAllUsersHandler = async (req, res) => {
    try {
        const users = await getAllUsersModel();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao bsucar usuários' });
    }
}


const getUserByIdHandler = async (req, res) => {
    
    const user_id = parseInt(req.params.user_id);

    try {
        //searchingUser guarda o usuário que está sendo procurado
        const searchingUser = await getUserByIdModel(user_id);
        if (!searchingUser) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }
        res.status(200).json(searchingUser);

    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuário.' });
    }
}



const getUserProfileHandler = async (req, res) => {
    try {
        const user_id = req.user.user_id;
        const user = await getUserProfileModel(user_id);

        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



const createUserHandler = async (req, res) => {
    const { user_name, user_email, user_password, user_type } = req.body;

    if (!user_name || !user_email || !user_password) {
        return res.status(400).json({ error: 'Todos os dados são obrigatórios.' });
    }

    try {
        const newUser = await createUserModel(user_name, user_email, user_password, user_type);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const updateUserHandler = async (req, res) => {
    const { user_id } = req.params;
    const { user_name, user_email, user_password } = req.body;

    // 1. Crie um objeto vazio para os dados da atualização
    const dataToUpdate = {};

    // 2. Adicione ao objeto APENAS os campos que foram enviados na requisição
    if (user_name) {
        dataToUpdate.user_name = user_name;
    }
    if (user_email) {
        dataToUpdate.user_email = user_email;
    }
    if (user_password) {
        // Lembre-se de fazer o hash da senha aqui antes de salvar, se necessário!
        // Ex: dataToUpdate.user_password = await bcrypt.hash(user_password, 10);
    }

    // 3. Verifique se pelo menos UM campo foi enviado para atualização
    if (Object.keys(dataToUpdate).length === 0) {
        return res.status(400).json({ error: "Nenhum dado para atualizar foi fornecido." });
    }

    try {
        // 4. Passe o objeto dinâmico para a função do model
        const updatedUser = await updateUserModel(parseInt(user_id), dataToUpdate);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const deleteUserHandler = async (req, res) => {
    const user_id = parseInt(req.params.user_id);

    try {
        await deleteUserModel(user_id);
        res.status(204).send();
    } catch (error) {
        if (error.message == 'Usuário não encontrado.') {
            res.status(404).json({ error: 'Usuário não encontrado.' });
        }
        res.status(500).json({ error: 'Erro ao adicionar usuário.' });
    }
}





module.exports = {
    getAllUsersHandler,
    getUserByIdHandler,
    getUserProfileHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler
}