const {
    getAllAnimalsModel,
    getAnimalByIdModel,
    createAnimalModel,
    updateAnimalModel,
    deleteAnimalModel
} = require('../models/animalModel');




const getAllAnimalsHandler = async(req, res) => {
    try{
        const animals = await getAllAnimalsModel();
        res.status(200).json(animals);
    }catch(error){
        res.status(500).json({error: 'Erro ao bsucar animais'});
    }
}



const getAnimalByIdHandler = async(req, res) => {
    const animal_id = parseInt(req.params.animal_id);

    try {
        //searchingUser guarda o animal que está sendo procurado
        const searchingAnimal = await getAnimalByIdModel(animal_id);
        if(!searchingAnimal){
            return res.status(404).json({error: 'Animal não encontrado.'});
        }
        res.status(200).json(searchingAnimal);
        
    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar animal.'});
    }
}


const createAnimalHandler = async(req, res) => {
    const { animal_name, 
            animal_age, 
            animal_sex,
            animal_status,
            animal_weight, 
            animal_favorite_food, 
            animal_description, 
            fk_admin_user_id
        } = req.body; 

    if(!animal_name 
        || !animal_age 
        || !animal_sex 
        || !animal_status
        || !animal_weight 
        || !animal_favorite_food
        || !animal_description
        || !fk_admin_user_id){

        return res.status(400).json({error: error.message});
    }

    try {
        const newAnimal = await createAnimalModel(
            animal_name, 
            animal_age, 
            animal_sex,
            animal_status,
            animal_weight, 
            animal_favorite_food, 
            animal_description, 
            fk_admin_user_id
        );    
        res.status(201).json(newAnimal);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


const updateAnimalHandler = async (req, res) => {
    const animal_id = parseInt(req.params.animal_id);
    const { animal_name, 
            animal_age, 
            animal_sex,
            animal_status,
            animal_weight, 
            animal_favorite_food, 
            animal_description, 
            fk_admin_user_id 
        } = req.body;

    if(!animal_name 
        || !animal_age 
        || !animal_sex 
        || !animal_weight 
        || !animal_favorite_food
        || !animal_description
        || !fk_admin_user_id){

        return res.status(400).json({error: 'Todos os dados são obrigatórios.'});
    }

    try {
        const updatedAnimal = await updateAnimalModel(
            animal_id, 
            animal_name, 
            animal_age, 
            animal_sex,
            animal_status,
            animal_weight, 
            animal_favorite_food, 
            animal_description, 
            fk_admin_user_id
        );
        res.status(200).json(updatedAnimal);

    } catch (error) {
        if (error.message == 'Animal não encontrado.') {
            res.status(404).json({ error: 'Animal não encontrado.' });
        }
        res.status(500).json({ error: error.message });
    }
}



const deleteAnimalHandler = async(req, res) => {
    const animal_id = parseInt(req.params.animal_id); 

    try {
        await deleteAnimalModel(animal_id);
        res.status(204).send();
    } catch (error) {
        if(error.message == 'Animal não encontrado.'){
            res.status(404).json({error: 'Animal não encontrado.'});
        }
        res.status(500).json({error: 'Erro ao adicionar animal.'});
    }
}


module.exports = {
    getAllAnimalsHandler,
    getAnimalByIdHandler,
    createAnimalHandler,
    updateAnimalHandler,
    deleteAnimalHandler
}