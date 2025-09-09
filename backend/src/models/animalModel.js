const prisma = require('../prisma');


const getAllAnimalsModel = async() => {
    return prisma.Animals.findMany({
        orderBy: {
            animal_id: 'asc'
        }
    })
}


const getAnimalByIdModel = async(animal_id) => {
    return prisma.Animals.findUnique({
        where: {
            animal_id: animal_id
        }
    })
}

//falta passar o id da categoria
const createAnimalModel = async(animal_name, animal_age, animal_sex, animal_status, animal_weight, animal_category, animal_favorite_food, animal_description, fk_admin_user_id) => {
    return prisma.Animals.create({
        data: {
            animal_name: animal_name,
            animal_age: animal_age,
            animal_sex: animal_sex,
            animal_status: animal_status,
            animal_weight: animal_weight,
            animal_category: animal_category,
            animal_favorite_food: animal_favorite_food,
            animal_description: animal_description,
            fk_admin_user_id: fk_admin_user_id
        }
    })
}


const updateAnimalModel = async(animal_id, animal_name, animal_age, animal_sex, animal_status, animal_category, animal_weight, animal_favorite_food, animal_description, fk_admin_user_id) => {
    const animalExist = await getAnimalByIdModel(animal_id);

    if(!animalExist){
        throw new Error("Animal não encontrado");
    }

    return prisma.Animals.update({
         where: {
            animal_id: animal_id
        },

        data: {
            animal_name: animal_name,
            animal_age: animal_age,
            animal_sex: animal_sex,
            animal_status: animal_status,
            animal_weight: animal_weight,
            animal_category: animal_category,
            animal_favorite_food: animal_favorite_food,
            animal_description: animal_description,
            fk_admin_user_id: fk_admin_user_id
        }
    })
}


const deleteAnimalModel = async(animal_id) => {
    const animalExist = await getAnimalByIdModel(animal_id);

    if(!animalExist){
        throw new Error("Usuário não encontrado");
    }

    return prisma.Animals.delete({
        where: {
            animal_id: animal_id
        }
    })
}


module.exports = {
    getAllAnimalsModel,
    getAnimalByIdModel,
    createAnimalModel,
    updateAnimalModel,
    deleteAnimalModel
}