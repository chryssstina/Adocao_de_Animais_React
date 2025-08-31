const prisma = require('../prisma');
const bcrypt = require("bcryptjs"); //criptografa as senhas antes de salvar/atualizar



const getAllUsersModel = async () => {
    return prisma.Users.findMany({
        orderBy: {
            user_id: 'asc'
        }
    })
}

//traz todas as infomações do usuário(incluindo a senha)
const getUserByIdModel = async (user_id) => {
    return prisma.Users.findUnique({
        where: {
            user_id: user_id
        }
    })
}

//traz todas as infomações do usuário (exceto a senha)
const getUserProfileModel = async (user_id) => {
    return prisma.Users.findUnique({
        where: {
            user_id: user_id
        },
        select: {
            user_id: true,
            user_name: true,
            user_email: true,
            user_type: true,
            user_registration_date: true
        }
    })
}

//para a função de login
const getUserByEmailModel = async (user_email) => {
    return prisma.Users.findUnique({
        where: {
            user_email: user_email
        }
    })
}


const createUserModel = async (user_name, user_email, user_password, user_type) => {
    const hashedPassword = await bcrypt.hash(user_password, 10); //criptografa a senha

    return prisma.Users.create({
        data: {
            user_name: user_name,
            user_email: user_email,
            user_password: hashedPassword,
            user_type: user_type
        }
    })
}


const updateUserModel = async (user_id, user_name, user_email, user_password, user_type) => {
    const userExist = await getUserByIdModel(user_id);

    if (!userExist) {
        throw new Error("Usuário não encontrado");
    }

    let updatedPassword = userExist.user_password; // mantém a mesma senha
    if (user_password) {
        updatedPassword = await bcrypt.hash(user_password, 10);
        // recriptografa a senha se o usuário tiver alterado/atualizado
    }

    return prisma.Users.update({
        where: {
            user_id: user_id
        },

        data: {
            user_name: user_name,
            user_email: user_email,
            user_password: updatedPassword,
            user_type: user_type,
            // user_registration_date: new Date(user_registration_date)
            // trocar talvez para data de atualização do cadastro
        }
    })
}


const deleteUserModel = async (user_id) => {
    const userExist = await getUserByIdModel(user_id);

    if (!userExist) {
        throw new Error("Usuário não encontrado");
    }

    return prisma.Users.delete({
        where: {
            user_id: user_id
        }
    })
}




module.exports = {
    getAllUsersModel,
    getUserByIdModel,
    getUserProfileModel,
    getUserByEmailModel,
    createUserModel,
    updateUserModel,
    deleteUserModel
}

// traz todos os usuário
// traz um usuário por ID (incluindo a senha)
// traz um usuário por ID (exceto a senha)
// traz um usuário pelo email
// criar
// atualizar
// deletar
