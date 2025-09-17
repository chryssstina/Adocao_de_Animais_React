import './Login.css';
import DogAdocao from '../../assets/PhotoGallery/fred-cachorro.jpg'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

function Login() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const payload = {
                user_email: data.userEmail,
                user_password: data.userPassword
            };

            const response = await authService.userLogin(payload);

            // salva token no localStorage
            localStorage.setItem(import.meta.env.VITE_TOKEN_KEY, response.token);
            localStorage.setItem(import.meta.env.VITE_USER_KEY, JSON.stringify(response.user));
            
            alert("Login realizado com sucesso!");
            navigate("/user"); // perfil de usuário comum
            
        } catch (erro) {
            console.error(erro);
            alert("E-mail ou senha inválidos.");
        }
    }

    return (
        <>
            <main className="login-main">
                <div className="container-login">
                    <form className="input-fields" onSubmit={handleSubmit(onSubmit)}>
                        <div className="custom-title">
                            <h1>Login</h1>
                            <p>Entre na sua conta</p>
                        </div>

                        <div className="mb-3 input-login">
                            <label htmlFor="user-email" className="form-label">Email</label>
                            <input type="email"
                                className="form-control"
                                placeholder="Insira seu e-mail"
                                {...register('userEmail', {
                                    required: 'E-mail é obrigatório'
                                })} />
                            {errors.userEmail && <span>{errors.userEmail.message}</span>}
                        </div>

                        <div className="mb-3 input-login">
                            <label htmlFor="user-password" className="form-label">Senha</label>
                            <input type="password"
                                className="form-control"
                                placeholder="Insira sua senha"
                                {...register('userPassword', {
                                    required: 'Senha é obrigatório'
                                })} />
                            {errors.userPassword && <span>{errors.userPassword.message}</span>}
                        </div>
                        <button type="submit" className="btn btn-lg btn-login">Entrar</button>
                    </form>

                    <img src={DogAdocao} alt="Dog Trovão" />

                </div>
            </main>
        </>
    );
}

export default Login;