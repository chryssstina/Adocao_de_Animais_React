import AdoptionCard from "../../components/UserComponents/AdoptionCard/AdoptionCard";
import "./User.css";
import FavoritesCard from "../../components/UserComponents/FavoritesCard/FavoritesCard";
import React, { useState, useEffect } from "react"; // 👈 Importar useEffect
import { Link, useNavigate } from "react-router-dom";
import UserEditModal from "../../components/UserComponents/UserEditModal/UserEditModal";
import DeleteAccountModal from "../../components/UserComponents/DeleteAccountModal/DeleteAccountModal";

// --- 1. IMPORTE SEU SERVIÇO DE USUÁRIO ---
import userService from "../../services/userService"; // Ajuste o caminho se necessário

function User() {
  const navigate = useNavigate();

  // --- 2. ESTADOS PARA GERENCIAR DADOS, CARREGAMENTO E ERROS ---
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- 3. BUSCAR DADOS DA API QUANDO O COMPONENTE MONTAR ---
  useEffect(() => {
    // Primeiro, checamos se há um token. Se não houver, redirecionamos.
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
      return; // Interrompe a execução do useEffect
    }

    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        // Chama a função do serviço que busca o perfil
        const profileData = await userService.getUserProfile();
        setUserData(profileData);
      } catch (err) {
        console.error("Falha ao buscar dados do usuário:", err);
        setError("Não foi possível carregar suas informações. Tente novamente mais tarde.");
        // Se o token for inválido (erro 401/403), deslogue o usuário
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
          handleLogout();
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate, handleLogout]); // Adicionamos navigate e handleLogout como dependências

  const handleLogout = React.useCallback(() => {
    localStorage.removeItem('authToken');
    navigate('/');
    window.location.reload();
  }, [navigate]);

  // Funções dos modais (mantidas como estavam)
  const [showModal, setShowModal] = useState(false);
  const handleEditClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleDeleteAccount = () => setShowDeleteModal(true);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleConfirmDelete = () => {
    console.log("Conta excluída!");
    setShowDeleteModal(false);
    navigate("/login");
  };

  // --- RENDERIZAÇÃO DE CARREGAMENTO E ERRO ---
  if (loading) {
    return <div className="container text-center py-5"><h4>Carregando seu perfil...</h4></div>;
  }

  if (error) {
    return <div className="container text-center py-5"><h4 className="text-danger">{error}</h4></div>;
  }
  
  // Se userData ainda não carregou por algum motivo, não renderize o resto
  if (!userData) {
    return null;
  }
  
  // --- O RESTANTE DO SEU COMPONENTE ---
  return (
    <section className="container-fluid bg-light py-4" id="user-page">
      <div className="container bg-light pt-1" id="user-container">
        {/* Usamos o 'optional chaining' (?.) para evitar erros caso a propriedade não exista */}
        <div className="user-header mb-4" id="user-header">
          <h1 className="user-greeting fw-semibold">Olá, {userData?.user_name}!</h1>
          <p className="text-muted mb-0">Bem-vindo à sua página de usuário.</p>
        </div>

        <div className="row g-4" id="user-panel">
          <div className="col-12 col-md-5">
            <div className="card shadow-sm rounded-3 border-0">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-person me-2 fs-4 text-primary "></i>
                  <h5 className="card-title user_title mb-0">Meu Perfil</h5>
                </div>
                <div className="mb-3">
                  <p className="text-muted small">Nome</p>
                  <p className="fw-semibold">{userData?.user_name}</p>
                </div>
                <div className="mb-3">
                  <p className="text-muted small">Email</p>
                  <p className="fw-semibold">{userData?.user_email}</p>
                </div>
                <div className="mb-4">
                  <p className="text-muted small">Tipo de Usuário</p>
                  <p className="fw-semibold">{userData?.user_type || 'Adotante'}</p>
                </div>
                <div className="d-flex flex-column gap-2">
                  <button className="btn btn-outline-secondary ... button_black" onClick={handleEditClick}>
                    <i className="bi bi-pencil"></i> Editar Perfil
                  </button>
                  <button className="btn btn-outline-secondary ... button_black" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right"></i> Sair da Conta
                  </button>
                  <button className="btn btn-outline-secondary ... button_black" onClick={handleDeleteAccount}>
                    <i className="bi bi-trash"></i> Excluir Conta
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-7" id="adoption-favorites-section">
            {/* ... Seções de Adoção e Favoritos ... */}
            {/* TODO: Esses dados também devem vir da API, provavelmente de `userData.adoptions` e `userData.favorites` */}
          </div>
        </div>
      </div>
      
      {/* Seus modais aqui */}
      <UserEditModal
        show={showModal}
        onClose={handleCloseModal}
        onSave={(updatedData) => console.log("Dados atualizados:", updatedData)}
        initialData={{ nome: userData.user_name, email: userData.user_email, password: '' }}
      />
      <DeleteAccountModal
        show={showDeleteModal}
        onClose={handleCloseDeleteModal}
        onDelete={handleConfirmDelete}
      />
    </section>
  );
}

export default User;