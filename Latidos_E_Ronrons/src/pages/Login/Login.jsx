import './Login.css';
import DogAdocao from '../../assets/PhotoGallery/varios-cachorros.jpg'
import Navbar from '../../components/Navbar/Navbar';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import animal_adoption_mock from '../../data/animal_adoption_mock.js';

function Login() {

    const navigate = useNavigate();
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Gera um número aleatório de 1 a 10

    const{
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm();

    const onSubmit = (data) => {
        navigate("/"); //leva o usuário para a página Home
    }

    // Import the mock data

    // Get the photo using randomNumber as the id
    const animal = animal_adoption_mock.find(a => a.id === randomNumber);
    const animalPhoto = animal ? animal.photo : DogAdocao;

    return (
        <>
        <Navbar />
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

                <img src={animalPhoto} alt="Animal para adoção" />

            </div>
        </main>
        </>
    );
}

export default Login;