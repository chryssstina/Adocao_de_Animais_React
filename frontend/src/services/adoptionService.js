import api from "./api";


const getAllAdoptions = async () => {
  try {
    const response = await api.get('/api/adoptions/');
    return response.data;
  } catch (error) {
    console.error("Erro ao listar pedidos de adoções.", error);
    throw error;
  }
};




const getAllAdoptionsByUser = async (fk_adopting_user_id) => {
  try {
    const response = await api.get(`/api/user/${fk_adopting_user_id}/adoptions`);
    return response.data;
  } catch (error) {
    console.error("Erro ao listar adoções do usuário.", error);
    throw error;
  }
};




const getAdoptionById = async (adoption_id) => {
  try {
    const response = await api.get(`/api/adoption/${adoption_id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar adoção.", error);
    throw error;
  }
};



const createAdoption = async (payload) => {
  try {
    const response = await api.post(`/api/adoption`, payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao solicitar adoção.", error);
    throw error;
  }
};


const updateAdoption = async (adoption_id, payload) => {
  try {
    const response = await api.put(`/api/adoption/${adoption_id}`, payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar pedido de adoção.", error);
    throw error;
  }
};



const deleteAdoption = async (adoption_id) => {
  try {
    const response = await api.delete(`/api/adoptions/${adoption_id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar pedido de adoção.", error);
    throw error;
  }
};


export default {
  getAllAdoptions,
  getAllAdoptionsByUser,
  getAdoptionById,
  createAdoption,
  updateAdoption,
  deleteAdoption
};





// router.get('/adoptions', getAllAdoptionsHandler);
// router.get('/adoption/:adoption_id', getAdoptionByIdHandler);
// router.get('/user/:fk_adopting_user_id/adoptions', getAllAdoptionsByUserHandler);
// router.post('/adoption', createAdoptionHandler);
// router.put('/adoption/:adoption_id', updateAdoptionHandler);
// router.delete('/adoptions/:adoption_id', deleteAdoptionHandler);