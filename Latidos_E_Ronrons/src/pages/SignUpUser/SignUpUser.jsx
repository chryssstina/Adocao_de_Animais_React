import './SignUpUser.css';
import DogAdocao from '../../assets/PhotoGallery/dog_feira_adocao.jpg';
import Navbar from '../../components/Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import animal_adoption_mock from '../../data/animal_adoption_mock.js';

function SignUpUser() {

    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    // Random animal photo logic
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const animal = animal_adoption_mock.find(a => a.id === randomNumber);
    const animalPhoto = animal ? animal.photo : DogAdocao;

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/login");
    }

    return (
        <>
        <Navbar />
        <main className="signUp-main">
            <div className="container-signUp">
                <form className="input-fields" onSubmit={handleSubmit}>
                    <div className="custom-title">
                        <h1>Cadastre-se</h1>
                        <p>Crie sua conta e conheça nossos AUmigos</p>
                    </div>
                    <div className="mb-3 input-signUp">
                        <label htmlFor="user-name" className="form-label">Nome</label>
                        <input type="text" 
                                className="form-control" 
                                value={userName}  
                                placeholder="Insira seu nome"
                                onChange={(e) => setUserName(e.target.value)} 
                                required/>
                    </div>

                    <div className="mb-3 input-signUp">
                        <label htmlFor="user-email" className="form-label">Email</label>
                        <input type="email" 
                                className="form-control" 
                                value={userEmail} 
                                placeholder="Insira seu e-mail"
                                onChange={(e) => setUserEmail(e.target.value)} 
                                required />
                    </div>

                    <div className="mb-3 input-signUp">
                        <label htmlFor="user-password" className="form-label">Senha</label>
                        <input type="password" 
                                className="form-control" 
                                value={userPassword} 
                                placeholder="Insira sua senha"
                                onChange={(e) => setUserPassword(e.target.value)} 
                                required />
                    </div>
                    <button className="btn btn-lg btn-signUp">
                        Salvar
                    </button>
                </form>

                <img src={animalPhoto} alt="Animal para adoção" />

            </div>
        </main>
        </>
    );
}

export default SignUpUser;