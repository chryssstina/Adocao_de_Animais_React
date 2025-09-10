const {
    getAllAdoptionsModel,
    getAdoptionByIdModel,
    getAllAdoptionsByUserModel,
    createAdoptionModel,
    updateAdoptionModel,
    deleteAdoptionModel
} = require('../models/adoptionModel');




const getAllAdoptionssHandler = async(req, res) => {
    try{
        const adoptions = await getAllAdoptionsModel();
        res.status(200).json(adoptions);
    }catch(error){
        res.status(500).json({error: 'Erro ao buscar adoções'});
    }
}


const getAdoptionByIdHandler = async(req, res) => {
    const adoption_id = parseInt(req.params.adoption_id);

    try {
        const searchingAdoption = await getAdoptionByIdModel(adoption_id);
        if(!searchingAdoption){
            return res.status(404).json({error: 'Processo de adoção não encontrado.'});
        }
        res.status(200).json(searchingAdoption);
        
    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar processo de adoção.'});
    }
}


const getAllAdoptionsByUserHandler = async(req, res) => {
    const fk_adopting_user_id = parseInt(req.params.fk_adopting_user_id);

    try {
        const searchingAdoptionByUser = await getAllAdoptionsByUserModel(fk_adopting_user_id);
        if(!searchingAdoptionByUser){
            return res.status(404).json({error: 'Processo de adoção não encontrado.'});
        }
        res.status(200).json(searchingAdoptionByUser);
        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}



const createAdoptionHandler = async(req, res) => {
    const { adoption_status, 
            fk_animal_id, 
            fk_adopting_user_id,
            reason
              
        } = req.body; 

    if(!fk_animal_id || !fk_adopting_user_id || !reason){
        return res.status(400).json({error: 'Todos os dados são obrigatórios.'});
    }

    try {
        const newAdoption = await createAdoptionModel(
            adoption_status || "IN_PROGRESS", 
            fk_animal_id, 
            fk_adopting_user_id,
            reason
        );
        res.status(201).json(newAdoption);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
    console.log("Body recebido:", req.body);
}


const updateAdoptionHandler = async (req, res) => {
    const adoption_id = parseInt(req.params.adoption_id);
    const { adoption_status,
            fk_animal_id, 
            fk_adopting_user_id } = req.body;

    if(!fk_animal_id || !fk_adopting_user_id){
        return res.status(400).json({error: 'Todos os dados são obrigatórios.'});
    }

    let processed_date = null;
    if(adoption_status == "ACCEPTED" || adoption_status == "DECLINED"){
        processed_date = new Date();
        //processed_date recebe a hora atual se o status de adoção for atualizado para 'aceito' ou 'rejeitado'
    }
    try {
        const updatedAdoption = await updateAdoptionModel(adoption_id, adoption_status, fk_animal_id, fk_adopting_user_id, processed_date);
        res.status(200).json(updatedAdoption);
    } catch (error) {
        if (error.message == 'Processo de adoção não encontrado.') {
            res.status(404).json({ error: 'Processo de adoção não encontrado.' });
        }
        res.status(500).json({ error: error.message });
    }
}


const deleteAdoptionHandler = async(req, res) => {
    const adoption_id = parseInt(req.params.adoption_id); 

    try {
        await deleteAdoptionModel(adoption_id);
        res.status(204).send();
    } catch (error) {
        if(error.message == 'Processo de adoção não encontrado.'){
            res.status(404).json({error: 'Processo de adoção não encontrado.'});
        }
        res.status(500).json({error: 'Erro ao adicionar processo de adoção.'});
    }
}


module.exports = {
    getAllAdoptionssHandler,
    getAdoptionByIdHandler,
    getAllAdoptionsByUserHandler,
    createAdoptionHandler,
    updateAdoptionHandler,
    deleteAdoptionHandler
}