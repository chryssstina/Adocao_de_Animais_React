import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
});
// --- O INTERCEPTOR DE REQUISIÇÃO ---
// Isso vai ser executado ANTES de CADA chamada de API que usar a instância 'api'
api.interceptors.request.use(
  (config) => {
    // 1. Pega o token do localStorage
    const token = localStorage.getItem('authToken');

    // 2. Se o token existir, adiciona ao cabeçalho de autorização
    if (token) {
      // O formato 'Bearer <token>' é um padrão comum
      config.headers.Authorization = `Bearer ${token}`;
    }

    // 3. Retorna a configuração modificada para a chamada continuar
    return config;
  },
  (error) => {
    // Para erros na configuração da requisição
    return Promise.reject(error);
  }
);

export default api;