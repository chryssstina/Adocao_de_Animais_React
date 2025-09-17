const prisma = require('../prisma');


const getAllAdoptionsModel = async () => {
    return prisma.Adoptions.findMany({
        orderBy: {
            adoption_id: 'asc'
        },
        select: {
            adoption_id: true,
            adoption_status: true,
            order_date: true,
            processed_date: true, 
            reason: true,
            animal: {
                select: {
                    animal_id: true,
                    animal_name: true, // só o nome do animal
                    animal_status: true,
                    aimal_photo: true
                }
            },
            adopting_user: {
                select: {
                    user_id: true,
                    user_name: true,
                    user_email: true
                }
            }
        }
    })
}


const getAdoptionByIdModel = async (adoption_id) => {
    return prisma.Adoptions.findUnique({
        where: {
            adoption_id: adoption_id
        },
        include: {
            animal: true,
            adopting_user: true // Isso diz ao Prisma: "Traga todos os dados do usuário adotante relacionado"
        }
    })
}


const getAllAdoptionsByUserModel = async (fk_adopting_user_id) => {
    return prisma.Adoptions.findMany({
        where: {
            fk_adopting_user_id: fk_adopting_user_id
        },
        select: {
            adoption_id: true,
            adoption_status: true,
            order_date: true,
            processed_date: true, 
            reason: true,
            animal: {
                select: {
                    animal_id: true,
                    animal_name: true, 
                    animal_status: true,
                    animal_photo: true
                }
            },
            adopting_user: {
                select: {
                    user_id: true,
                    user_name: true
                }
            }
        }
    })
}


const createAdoptionModel = async (
    adoption_status,
    fk_animal_id,
    fk_adopting_user_id,
    reason

) => {
    return prisma.Adoptions.create({
        data: {
            adoption_status,
            fk_animal_id: fk_animal_id,
            fk_adopting_user_id: fk_adopting_user_id,
            reason: reason
            //processed_date: processed_date
            // data em que o pedido foi finalizado (aceito ou negado)
        }
    })
}




const updateAdoptionModel = async (adoption_id, adoption_status, fk_animal_id, fk_adopting_user_id, processed_date) => {
    const adoptionExist = await getAdoptionByIdModel(adoption_id);

    if (!adoptionExist) {
        throw new Error("Processo de adoção não encontrado");
    }

    return prisma.Adoptions.update({
        where: {
            adoption_id: adoption_id
        },

        data: {
            adoption_status: adoption_status,
            processed_date: processed_date,
            fk_animal_id: fk_animal_id,
            fk_adopting_user_id: fk_adopting_user_id
        }
    })
}

const deleteAdoptionModel = async (adoption_id) => {
    const adoptionExist  = await getAdoptionByIdModel(adoption_id);

    if (!adoptionExist ) {
        throw new Error("Processo de adoção não encontrado");
    }

    return prisma.Adoptions.delete({
        where: {
            adoption_id: adoption_id
        }
    })
}


module.exports = {
    getAllAdoptionsModel,
    getAdoptionByIdModel,
    getAllAdoptionsByUserModel,
    createAdoptionModel,
    updateAdoptionModel,
    deleteAdoptionModel
}