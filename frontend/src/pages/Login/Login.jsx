import './Login.css';
import DogAdocao from '../../assets/PhotoGallery/fred-cachorro.jpg'
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const{
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm();

    const onSubmit = () => {
        navigate("/user"); //leva o usuário para a página Home
    }

    return (
        <>
        
        <main className="login-main">
            <div className="container-login">
                <form className="input-fields">
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
                    <button onClick={handleSubmit(onSubmit)} className="btn btn-lg btn-login">Entrar</button>
                </form>

                <img src={DogAdocao} alt="Dog Trovão" />

            </div>
        </main>
       
      
        </>
    );
}

export default Login;