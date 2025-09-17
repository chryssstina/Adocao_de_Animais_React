import api from '../services/api';

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem(import.meta.env.VITE_USER_KEY);
        const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);

        if (savedUser && token) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (error) {
                console.error('Erro ao parsear usuário do localStorage:', error);
                localStorage.removeItem(import.meta.env.VITE_USER_KEY);
                localStorage.removeItem(import.meta.env.VITE_TOKEN_KEY);
            }
        }
        setLoading(false);
    }, []);

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

    const value = {
        user,
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