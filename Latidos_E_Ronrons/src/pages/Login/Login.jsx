import './Login.css';
import DogAdocao from '../../assets/PhotoGallery/varios-cachorros.jpg'
import Navbar from '../../components/Navbar/Navbar';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const{
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm();

    const onSubmit = (data) => {
        navigate("/"); //leva o usuário para a página Home
    }

    return (
        <>
        <Navbar />
        <main className="login-main">
            <div className="container-login">
                <form class="input-fields">
                    <div className="custom-title">
                        <h1>Login</h1>
                        <p>Entre na sua conta</p>
                    </div>
                    <div class="mb-3 input-login">
                        <label for="user-email" class="form-label">Email</label>
                        <input type="email" 
                                class="form-control"
                                placeholder="Insira seu e-mail" 
                                {...register('userEmail', {
                                    required: 'E-mail é obrigatório'
                                })} />
                                {errors.userEmail && <span>{errors.userEmail.message}</span>}
                    </div>

                    <div class="mb-3 input-login">
                        <label for="user-password" class="form-label">Senha</label>
                        <input type="password" 
                                class="form-control"
                                placeholder="Insira sua senha" 
                                {...register('userPassword', {
                                    required: 'Senha é obrigatório'
                                })} />
                                {errors.userPassword && <span>{errors.userPassword.message}</span>}
                    </div>
                    <button onClick={handleSubmit(onSubmit)} className="btn btn-lg btn-login">Entrar</button>
                </form>

                <img src={DogAdocao} alt="Dog Trovão" />

            </div>
        </main>
       
      
        </>
    );
}

export default Login;