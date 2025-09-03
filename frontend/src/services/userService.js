import api from "./api";


const getUserProfile = async () => {
  try {
    const response = await api.get('/api/user/profile');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários.", error);
    throw error;
  }
};


const getAllUsers = async () => {
  try {
    const response = await api.get('/api/user/all-users');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários.", error);
    throw error;
  }
};



const getUserById = async (user_id) => {
  try {
    const response = await api.get(`/api/user/profile/${user_id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário.", error);
    throw error;
  }
};


// trocada pela register
// const createUser = async (payload) => {
//   try {
//     const response = await api.post(`/api/user/profile`, payload);
//     return response.data;
//   } catch (error) {
//     console.error("Erro ao criar usuário.", error);
//     throw error;
//   }
// };


const updateUser = async (user_id, payload) => {
  try {
    const response = await api.put(`/api/user/profile/${user_id}`,payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar usuário.", error);
    throw error;
  }
};



const deleteUser = async (user_id) => {
  try {
    const response = await api.delete(`/api/user/profile/${user_id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar usuário.", error);
    throw error;
  }
};


export default {
  getUserProfile,
  getAllUsers,
  getUserById,
  // createUser,
  updateUser,
  deleteUser
};




// ROTAS NO BACK DE USERS
// app.use('/api/user', userRoutes);

// router.get("/profile", authMiddleware, getUserProfileHandler); 
// router.get('/all-users', getAllUsersHandler);
// router.get('/profile/:user_id', authMiddleware, getUserByIdHandler);
// router.put('/profile/:user_id', updateUserHandler);
// router.delete('/profile/:user_id', deleteUserHandler);

