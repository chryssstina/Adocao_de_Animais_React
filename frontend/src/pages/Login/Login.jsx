import './Login.css';
import DogAdocao from '../../assets/PhotoGallery/fred-cachorro.jpg';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; // 1. Importar o useState
import authService from '../../services/authService'; // 2. Importar o serviço de auth

function Login() {
    const navigate = useNavigate();

    // Estados para feedback visual
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // 3. Atualizar a função onSubmit
    const onSubmit = async (data) => {
        if (isLoading) return;
        
        setError(null);
        setIsLoading(true);

        try {
            // O payload que a API espera (geralmente 'email' e 'password')
            const payload = {
                user_email: data.user_email,
                user_password: data.user_password,
            };

            const response = await authService.userLogin(payload);

            // 4. Ponto-chave: Armazenar o token!
            if (response && response.token) {
                localStorage.setItem('authToken', response.token); // Salva o token no navegador
                
                // Opcional: você pode querer recarregar a página para que toda a aplicação
                // reconheça o novo estado de login, ou usar um Context API para isso.
                // window.location.href = '/user'; // Força um reload completo
                
                navigate("/user"); // Redireciona o usuário para a página de perfil/home
            } else {
                throw new Error("Token não recebido do servidor.");
            }

        } catch (err) {
            console.error("Erro no login:", err);
            setError("E-mail ou senha inválidos. Por favor, tente novamente.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <main className="login-main">
                <div className="container-login">
                    {/* 5. Conectar o handleSubmit ao 'onSubmit' do form */}
                    <form className="input-fields" onSubmit={handleSubmit(onSubmit)}>
                        <div className="custom-title">
                            <h1>Login</h1>
                            <p>Entre na sua conta</p>
                        </div>

                        {/* Exibição de Erro */}
                        {error && (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        )}

                        <div className="mb-3 input-login">
                            <label htmlFor="user_email" className="form-label">Email</label>
                            <input type="email"
                                className={`form-control ${errors.user_email ? 'is-invalid' : ''}`}
                                placeholder="Insira seu e-mail"
                                {...register('user_email', {
                                    required: 'E-mail é obrigatório'
                                })} />
                            {errors.user_email && <span className="invalid-feedback">{errors.user_email.message}</span>}
                        </div>

                        <div className="mb-3 input-login">
                            <label htmlFor="user_password" className="form-label">Senha</label>
                            <input type="password"
                                className={`form-control ${errors.user_password ? 'is-invalid' : ''}`}
                                placeholder="Insira sua senha"
                                {...register('user_password', {
                                    required: 'Senha é obrigatória'
                                })} />
                            {errors.user_password && <span className="invalid-feedback">{errors.user_password.message}</span>}
                        </div>
                        
                        {/* Botão com estado de loading */}
                        <button type="submit" className="btn btn-lg btn-login" disabled={isLoading}>
                            {isLoading ? 'Entrando...' : 'Entrar'}
                        </button>
                    </form>

                    <img src={DogAdocao} alt="Cachorro para adoção" />
                </div>
            </main>
        </>
    );
}

export default Login;