import './SignUpUser.css';
import DogAdocao from '../../assets/PhotoGallery/dog_feira_adocao.jpg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// 1. Importe o seu serviço de autenticação
import authService from '../../services/authService'; // Ajuste o caminho se necessário

function SignUpUser() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    // --- NOVOS ESTADOS PARA FEEDBACK ---
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // 2. Transforme a função em async
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Evita múltiplos envios
        if (isLoading) return;

        // Limpa erros anteriores e inicia o carregamento
        setError(null);
        setIsLoading(true);

        try {
            // 3. Monte o payload que sua API espera
            // (Verifique se os nomes dos campos `name`, `email`, `password` batem com o seu backend)
            const payload = {
                name: userName,
                email: userEmail,
                password: userPassword,
            };

            // 4. Chame o serviço de registro
            await authService.userRegister(payload);

            // Se chegou aqui, o cadastro foi um sucesso
            alert('Cadastro realizado com sucesso! Você será redirecionado para a página de login.');
            navigate("/login");

        } catch (err) {
            // Se a API retornar um erro, ele será capturado aqui
            console.error("Erro no cadastro:", err);
            // Define uma mensagem de erro amigável para o usuário
            setError("Falha ao realizar o cadastro. Verifique se o e-mail já está em uso ou tente novamente.");
        } finally {
            // Garante que o estado de loading seja desativado, mesmo se der erro
            setIsLoading(false);
        }
    };

    return (
        <>
            <main className="signUp-main">
                <div className="container-signUp">
                    <form className="input-fields" onSubmit={handleSubmit}>
                        <div className="custom-title">
                            <h1>Cadastre-se</h1>
                            <p>Crie sua conta e conheça nossos AUmigos</p>
                        </div>

                        {/* --- EXIBIÇÃO DE ERRO --- */}
                        {error && (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        )}

                        <div className="mb-3 input-signUp">
                            <label htmlFor="user-name" className="form-label">Nome</label>
                            <input type="text"
                                className="form-control"
                                id="user-name"
                                value={userName}
                                placeholder="Insira seu nome"
                                onChange={(e) => setUserName(e.target.value)}
                                required />
                        </div>

                        <div className="mb-3 input-signUp">
                            <label htmlFor="user-email" className="form-label">Email</label>
                            <input type="email"
                                className="form-control"
                                id="user-email"
                                value={userEmail}
                                placeholder="Insira seu e-mail"
                                onChange={(e) => setUserEmail(e.target.value)}
                                required />
                        </div>

                        <div className="mb-3 input-signUp">
                            <label htmlFor="user-password" className="form-label">Senha</label>
                            <input type="password"
                                className="form-control"
                                id="user-password"
                                value={userPassword}
                                placeholder="Insira sua senha"
                                onChange={(e) => setUserPassword(e.target.value)}
                                required />
                        </div>

                        {/* --- BOTÃO COM ESTADO DE LOADING --- */}
                        <button className="btn btn-lg btn-signUp" type="submit" disabled={isLoading}>
                            {isLoading ? 'Salvando...' : 'Salvar'}
                        </button>
                    </form>

                    <img src={DogAdocao} alt="Cachorro para adoção" />
                </div>
            </main>
        </>
    );
}

export default SignUpUser;