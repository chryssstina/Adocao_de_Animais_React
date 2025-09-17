const prisma = require('../prisma');

// lista todos os favoritos de um usuário, retornando o nome do animal, 
// DEPOIS (versão corrigida e eficiente)
const getAllFavoritesByUserModel = async (fk_user_id) => {
    return prisma.Favorites.findMany({
        where: {
            fk_user_id: fk_user_id
        },
        select: {
            favorite_id: true,
            favorite_date: true,
            animal: { // Aqui está a mágica!
                select: {
                    animal_id: true,
                    animal_name: true,
                    animal_age: true,     // Campo que o front-end precisa
                    animal_sex: true,     // Campo que o front-end precisa
                    animal_photo: true    // Campo que o front-end precisa
                }
            },
            user: {
                select: {
                    user_id: true,
                    user_name: true
                }
            }
        }
    })
}

// SIMPLIFICANDO A REQUISIÇÃO DE TODOS OS FAVORITOS DE UM USUÁRIO
const getAllFavoritesModel = async() => {
    return prisma.Favorites.findMany({
        orderBy: {
            favorite_id: 'asc'
        }
    })
}



const getFavoriteByIdModel = async(favorite_id) => {
    return prisma.Favorites.findUnique({
        where: {
            favorite_id: favorite_id
        }
    })
}

//corresponde ao create
const addFavoriteModel = async(fk_animal_id, fk_user_id) => {
    return prisma.Favorites.create({
        data: {
            fk_animal_id: fk_animal_id,
            fk_user_id: fk_user_id
        }
    })
}



const updateFavoriteModel = async(favorite_id, fk_animal_id, fk_user_id) => {
    const favoriteExist = await getFavoriteByIdModel(favorite_id);

    if(!favoriteExist){
        throw new Error("Favorito não encontrado.");
    }

    return prisma.Favorites.update({
         where: {
            favorite_id: favorite_id
        },

        data: {
            fk_animal_id: fk_animal_id,
            fk_user_id: fk_user_id
        }
    })
}

//corresponde ao delete
const removeFavoriteModel = async(favorite_id) => {
    const favoriteExist = await getFavoriteByIdModel(favorite_id);

    if(!favoriteExist){
        throw new Error("Favorito não encontrado");
    }

    return prisma.Favorites.delete({
        where: {
            favorite_id: favorite_id
        }
    })
}


module.exports = {
    getAllFavoritesByUserModel,
    getAllFavoritesModel,
    getFavoriteByIdModel,
    addFavoriteModel,
    updateFavoriteModel,
    removeFavoriteModel
}