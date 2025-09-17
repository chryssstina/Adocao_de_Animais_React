import { createContext, useContext, useState, useEffect } from 'react';
import userService from '../services/userService'; // Import your userService here!

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Starts as true

    // Este useEffect agora vai validar o token na inicialização
    useEffect(() => {
        const validateToken = async () => {
            const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);

            if (token) {
                try {
                    // O interceptor do axios já vai adicionar o token no header
                    // Tentamos buscar o perfil do usuário
                    const profileData = await userService.getUserProfile();
                    
                    // Se a chamada funcionou, o token é válido e o usuário existe
                    // Usamos a função login para garantir consistência
                    login(profileData, token);

                } catch (error) {
                    // Se deu erro (401, etc.), o token é inválido ou o usuário foi deletado
                    console.error("Token inválido, fazendo logout:", error);
                    logout(); // Limpa o localStorage
                }
            }
            // Só finalizamos o carregamento depois de tudo
            setLoading(false); 
        };

        validateToken();
    }, []); // O array vazio [] garante que isso só rode UMA VEZ quando a app carrega

    const login = (userData, token) => {
        setUser(userData);
        localStorage.setItem(import.meta.env.VITE_USER_KEY, JSON.stringify(userData));
        localStorage.setItem(import.meta.env.VITE_TOKEN_KEY, token);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem(import.meta.env.VITE_USER_KEY);
        localStorage.removeItem(import.meta.env.VITE_TOKEN_KEY);
    };

    // Adicionamos 'loading' ao valor do contexto
    const value = {
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}