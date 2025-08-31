import api from "./api";



const getAllFavorites = async () => {
  try {
    const response = await api.get('/api/favorites');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar lista de favoritos.", error);
    throw error;
  }
};



const getAllFavoritesByUser = async (fk_user_id) => {
  try {
    const response = await api.get(`/api/user/${fk_user_id}/favorites`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar lista de favoritos.", error);
    throw error;
  }
};





const getFavoriteById = async (favorite_id) => {
  try {
    const response = await api.get(`/api/favorite/${favorite_id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar favorito.", error);
    throw error;
  }
};



const addFavorite = async (payload) => {
  try {
    const response = await api.post(`/api/favorite/`, payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao favoritar.", error);
    throw error;
  }
};


const updateFavorite = async (favorite_id, payload) => {
  try {
    const response = await api.put(`/api/favorite/${favorite_id},${payload}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar favorito.", error);
    throw error;
  }
};



const removeFavorite = async (favorite_id) => {
  try {
    const response = await api.delete(`/api/user/${favorite_id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao remover da lista de favoritos.", error);
    throw error;
  }
};


export default {
  getAllFavorites,
  getAllFavoritesByUser,
  getFavoriteById,
  addFavorite,
  updateFavorite,
  removeFavorite
};







// ROTAS NO BACK DE FAVORITES

// router.get('/api/favorites', getAllFavoritesHandler);
// router.get('/api/user/:fk_user_id/favorites', getAllFavoritesByUserHandler);
// router.get('/api/favorite/:favorite_id', getFavoriteByIdHandler);
// router.post('/api/favorite', addFavoriteHandler);
// router.put('/api/favorite/:favorite_id', updateFavoriteHandler);
// router.delete('/api/favorite/:favorite_id', removeFavoriteHandler);