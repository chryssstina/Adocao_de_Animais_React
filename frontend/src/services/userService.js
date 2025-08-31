import api from "./api";



const getAllUsers = async () => {
  try {
    const response = await api.get('/api/user');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários.", error);
    throw error;
  }
};



const getUserById = async (user_id) => {
  try {
    const response = await api.get(`/api/user/${user_id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário.", error);
    throw error;
  }
};



const createUser = async (payload) => {
  try {
    const response = await api.post(`/api/user/`, payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário.", error);
    throw error;
  }
};


const updateUser = async (user_id, payload) => {
  try {
    const response = await api.put(`/api/user/${user_id},${payload}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar usuário.", error);
    throw error;
  }
};



const deleteUser = async (user_id) => {
  try {
    const response = await api.delete(`/api/user/${user_id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar usuário.", error);
    throw error;
  }
};


export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};




// ROTAS NO BACK DE USERS
// app.use('/api/user', userRoutes);

// router.get('/', getAllUsersHandler);
// router.get('/:user_id', getUserByIdHandler);
// router.post('/', createUserHandler);
// router.put('/:user_id', updateUserHandler);
// router.delete('/:user_id', deleteUserHandler);
