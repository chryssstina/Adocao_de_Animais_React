const {
    getAllFavoritesByUserModel,
    getAllFavoritesModel,
    getFavoriteByIdModel,
    addFavoriteModel,
    updateFavoriteModel,
    removeFavoriteModel
} = require('../models/favoriteModel');


const getAllFavoritesByUserHandler = async (req, res) => {
    const fk_user_id = parseInt(req.params.fk_user_id);

    try {
        const allFavorites = await getAllFavoritesByUserModel(fk_user_id);
        res.status(200).json(allFavorites);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




const getAllFavoritesHandler = async(req, res) => {
    try{
        const favorites = await getAllFavoritesModel();
        res.status(200).json(favorites);
    }catch(error){
        res.status(500).json({error: 'Erro ao buscar os todos os favoritados'});
    }
}


const getFavoriteByIdHandler = async(req, res) => {
    const favorite_id = parseInt(req.params.favorite_id);

    try {
        const searchingFavorite = await getFavoriteByIdModel(favorite_id);
        if(!searchingFavorite){
            return res.status(404).json({error: 'Favorito não encontrado.'});
        }
        res.status(200).json(searchingFavorite);
        
    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar animal favoritado.'});
    }
}

//corresponde ao create
const addFavoriteHandler = async(req, res) => {
    const {fk_animal_id, fk_user_id} = req.body; 

    if(!fk_animal_id || !fk_user_id){
        return res.status(400).json({error: 'Todos os dados são obrigatórios.'});
    }

    try {
        const newFavorite = await addFavoriteModel(fk_animal_id, fk_user_id);
        res.status(201).json(newFavorite);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


const updateFavoriteHandler = async (req, res) => {
    const favorite_id = parseInt(req.params.favorite_id);
    const { fk_animal_id, fk_user_id } = req.body;

    if(!fk_animal_id || !fk_user_id){
        return res.status(400).json({error: 'Todos os dados são obrigatórios.'});
    }

    try {
        const updatedFavorite = await updateFavoriteModel(favorite_id, fk_animal_id, fk_user_id);
        res.status(200).json(updatedFavorite);
    } catch (error) {
        if (error.message == 'Favorito não encontrado.') {
            res.status(404).json({ error: 'Favorito não encontrado.' });
        }
        res.status(500).json({ error: error.message });
    }
}


const removeFavoriteHandler = async(req, res) => {
    const favorite_id = parseInt(req.params.favorite_id); 

    try {
        await removeFavoriteModel(favorite_id);
        res.status(204).send();
    } catch (error) {
        if(error.message == 'Favorito não encontrado".'){
            res.status(404).json({error: 'Favorito não encontrado".'});
        }
        res.status(500).json({error: 'Erro ao adicionar favorito.'});
    }
}



module.exports = {
    getAllFavoritesByUserHandler,
    getAllFavoritesHandler,
    getFavoriteByIdHandler,
    addFavoriteHandler,
    updateFavoriteHandler,
    removeFavoriteHandler
}