import api from "./api";



const getAllAnimals = async () => {
  try {
    const response = await api.get('/api/animal');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar animais.", error);
    throw error;
  }
};



const getAnimalById = async (animal_id) => {
  try {
    const response = await api.get(`/api/animal/${animal_id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar animal.", error);
    throw error;
  }
};



const createAnimal = async (payload) => {
  try {
    const response = await api.post(`/api/animal`, payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar animal.", error);
    throw error;
  }
};


const updateAnimal = async (animal_id, payload) => {
  try {
    const response = await api.put(`/api/animal/${animal_id}`, payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar animal.", error);
    throw error;
  }
};



const deleteAnimal = async (animal_id) => {
  try {
    const response = await api.delete(`/api/animal/${animal_id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar animal.", error);
    throw error;
  }
};


export default {
  getAllAnimals,
  getAnimalById,
  createAnimal,
  updateAnimal,
  deleteAnimal
};



// ROTAS NO BACK DE ANIMAL 

// router.get('/', getAllAnimalsHandler);
// router.get('/:animal_id', getAnimalByIdHandler);
// router.post('/', createAnimalHandler);
// router.put('/:animal_id', updateAnimalHandler);
// router.delete('/:animal_id', deleteAnimalHandler);