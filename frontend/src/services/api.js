import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VITE_API_URL, 
});

export default api;

// VITE_API_URL -> corresponde ao endereço do back