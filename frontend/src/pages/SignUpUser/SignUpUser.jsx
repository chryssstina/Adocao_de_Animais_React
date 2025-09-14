import './SignUpUser.css';
import DogAdocao from '../../assets/PhotoGallery/dog_feira_adocao.jpg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import authService from '../../services/authService';

function SignUpUser() {
    const navigate = useNavigate();
    const [user_name, setUserName] = useState('');
    const [user_email, setUserEmail] = useState('');
    const [user_password, setUserPassword] = useState('');
    const navigate = useNavigate(); //para fazer o redirecionamento para a página de login
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = {
                user_name: userName,
                user_email: userEmail,
                user_password: userPassword
            };

            await authService.userRegister(payload);

            alert("Seu cadastrado foi realizado com sucesso! Agora você será redirecionado para a página de login.");
            navigate("/login"); // após cadastrar, redireciona para a pág. de login
        } catch (err) {
            console.error(err);
            setError("Erro ao cadastrar usuário. Verifique seus dados e tente novamente.");
        }
    }

    return (
        <>
            <main className="signUp-main">
                <div className="container-signUp">
                    <form class="input-fields" onSubmit={handleSubmit}>
                        <div className="custom-title">
                            <h1>Cadastre-se</h1>
                            <p>Crie sua conta e conheça nossos AUmigos</p>
                        </div>

                        {error && <p className="text-danger">{error}</p>}

                        <div class="mb-3 input-signUp">
                            <label for="user-name" class="form-label">Nome</label>
                            <input type="text"
                                class="form-control"
                                value={userName}
                                placeholder="Insira seu nome"
                                onChange={(e) => setUserName(e.target.value)}
                                required />
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