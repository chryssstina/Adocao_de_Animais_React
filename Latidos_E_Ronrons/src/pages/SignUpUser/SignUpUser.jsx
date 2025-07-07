import './SignUpUser.css';
import DogAdocao from '../../assets/PhotoGallery/dog_feira_adocao.jpg'
import Navbar from '../../components/Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

function SignUpUser() {

    const navigate = useNavigate(); //para fazer o redirecionamento para a página de login
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/login")
    }

    return (
        <>
        <Navbar />
        <main className="signUp-main">
            <div className="container-signUp">
                <form class="input-fields" onSubmit={handleSubmit}>
                    <div className="custom-title">
                        <h1>Cadastre-se</h1>
                        <p>Crie sua conta e conheça nossos AUmigos</p>
                    </div>
                    <div class="mb-3 input-signUp">
                        <label for="user-name" class="form-label">Nome</label>
                        <input type="text" 
                                class="form-control" 
                                value={userName}  
                                placeholder="Insira seu nome"
                                onChange={(e) => setUserName(e.target.value)} 
                                required/>
                    </div>

                    <div class="mb-3 input-signUp">
                        <label for="user-email" class="form-label">Email</label>
                        <input type="email" 
                                class="form-control" 
                                value={userEmail} 
                                placeholder="Insira seu e-mail"
                                onChange={(e) => setUserEmail(e.target.value)} 
                                required />
                    </div>

                    <div class="mb-3 input-signUp">
                        <label for="user-passsword" class="form-label">Senha</label>
                        <input type="password" 
                                class="form-control" 
                                value={userPassword} 
                                placeholder="Insira sua senha"
                                onChange={(e) => setUserPassword(e.target.value)} 
                                required />
                    </div>
                    <button className="btn btn-lg btn-signUp">
                        Salvar
                    </button>
                </form>

                <img src={DogAdocao} alt="Dog Trovão" />

            </div>
        </main>
       
      
        </>
    );
}

export default SignUpUser;