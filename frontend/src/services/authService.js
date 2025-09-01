import api from './api';




const userRegister = async (payload) => {
  try {
    const response = await api.post(`/api/auth/register`, payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário.", error);
    throw error;
  }
};



const userLogin = async (payload) => {
  try {
    const response = await api.post(`/api/auth/login`, payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login.", error);
    throw error;
  }
};


export default {
    userRegister,
    userLogin
}


// rota completa para register(cadastro):
// http://localhost:3000/api/auth/register


// rota completa para login:
// http://localhost:3000/api/auth/login