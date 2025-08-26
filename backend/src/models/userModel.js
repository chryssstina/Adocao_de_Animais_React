const prisma = require('../prisma');


const getAllUsersModel = async() => {
    return prisma.Users.findMany({
        orderBy: {
            user_id: 'asc'
        }
    })
}


const getUserByIdModel = async(user_id) => {
    return prisma.Users.findUnique({
        where: {
            user_id: user_id
        }
    })
}


const createUserModel = async(user_name, user_email, user_password, user_type) => {
    return prisma.Users.create({
        data: {
            user_name: user_name,
            user_email: user_email,
            user_password: user_password,
            user_type: user_type
        }
    })
}


const updateUserModel = async(user_id, user_name, user_email, user_password, user_type) => {
    const userExist = await getUserByIdModel(user_id);

    if(!userExist){
        throw new Error("Usuário não encontrado");
    }

    return prisma.Users.update({
         where: {
            user_id: user_id
        },

        data: {
            user_name: user_name,
            user_email: user_email,
            user_password: user_password,
            user_type: user_type,
            // user_registration_date: new Date(user_registration_date)
            // trocar talvez para data de atualização do cadastro
        }
    })
}


const deleteUserModel = async(user_id) => {
    const userExist = await getUserByIdModel(user_id);

    if(!userExist){
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
    createUserModel,
    updateUserModel,
    deleteUserModel
}