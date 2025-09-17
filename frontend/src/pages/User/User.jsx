import AdoptionCard from "../../components/UserComponents/AdoptionCard/AdoptionCard";
import "./User.css";
import FavoritesCard from "../../components/UserComponents/FavoritesCard/FavoritesCard";
import React, { useState, useEffect, useCallback } from "react"; // 👈 Importar useEffect
import { Link, useNavigate } from "react-router-dom";
import UserEditModal from "../../components/UserComponents/UserEditModal/UserEditModal";
import DeleteAccountModal from "../../components/UserComponents/DeleteAccountModal/DeleteAccountModal";

// --- 1. IMPORTE SEU SERVIÇO DE USUÁRIO ---
import userService from "../../services/userService"; // Ajuste o caminho se necessário
import adoptionService from "../../services/adoptionService"; // Ajuste o caminho se necessário
import favoriteService from "../../services/favoriteService"; // Ajuste o caminho se necessário

function User() {
  const navigate = useNavigate();

  // --- 2. ESTADOS PARA GERENCIAR DADOS, CARREGAMENTO E ERROS ---
  const [showModal, setShowModal] = useState(false);
  const handleEditClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleDeleteAccount = () => setShowDeleteModal(true);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  const [userData, setUserData] = useState(null);
  // Removido: const [allAnimals, setAllAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [userAdoptions, setUserAdoptions] = useState([]);
  const [userFavorites, setUserFavorites] = useState([]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem(import.meta.env.VITE_TOKEN_KEY);
    navigate("/");
    window.location.reload();
  }, [navigate]);

  const handleConfirmDelete = async () => {
    try {
      setShowDeleteModal(false);
      await userService.deleteUser(userData.user_id);
      handleLogout();
    } catch (err) {
      console.error("Falha ao excluir a conta:", err);
      setError(
        "Não foi possível excluir sua conta. Tente novamente mais tarde."
      );
    }
  };

  const handleUpdateUser = async (updatedData) => {
    // 'updatedData' is now an object like { nome: "New Name" }
    try {
      const payload = {
        user_name: updatedData.nome,
      };

      const updatedUser = await userService.updateUser(
        userData.user_id,
        payload
      );

      // Atualiza os dados do usuário na tela com a resposta da API
      setUserData(updatedUser);

      // Fecha o modal
      setShowModal(false);
      alert("Nome atualizado com sucesso!");
    } catch (err) {
      console.error("Falha ao atualizar dados do usuário:", err);
      setError(
        "Não foi possível atualizar suas informações. Tente novamente mais tarde."
      );
    }
  };

  const handleCancelAdoption = async (adoptionId) => {
    try {
      // Chama o serviço para deletar o pedido no backend
      await adoptionService.deleteAdoption(adoptionId);

      // Atualiza a lista de adoções na tela, removendo a que foi cancelada
      // Isso evita a necessidade de recarregar a página
      setUserAdoptions((currentAdoptions) =>
        currentAdoptions.filter(
          (adoption) => adoption.adoption_id !== adoptionId
        )
      );

      alert("Pedido de adoção cancelado com sucesso!");
    } catch (err) {
      console.error("Erro ao cancelar o pedido de adoção:", err);
      alert("Não foi possível cancelar o pedido. Tente novamente.");
    }
  };

  const handleRemoveFavorite = async (favoriteId) => {
    try {
      // Chama o serviço para deletar o favorito no backend
      await favoriteService.removeFavorite(favoriteId);
      // Atualiza a lista de favoritos na tela, removendo o que foi cancelado
      // Isso evita a necessidade de recarregar a página
      setUserFavorites((currentFavorites) =>
        currentFavorites.filter(
          (favorite) => favorite.favorite_id !== favoriteId
        )
      );

      alert("Favorito removido com sucesso!");
    } catch (err) {
      console.error("Erro ao remover favorito:", err);
      alert("Não foi possível remover o favorito. Tente novamente.");
    }
  };

  // --- 3. BUSCAR DADOS DA API QUANDO O COMPONENTE MONTAR ---
  useEffect(() => {
    const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        const profileData = await userService.getUserProfile();
        const userAdoptions = await adoptionService.getAllAdoptionsByUser(
          profileData.user_id
        );

        const enrichedUserFavorites =
          await favoriteService.getAllFavoritesByUser(profileData.user_id);

        setUserData(profileData);
        setUserAdoptions(userAdoptions);
        setUserFavorites(enrichedUserFavorites); // Define o estado diretamente com a resposta da API
      } catch (err) {
        console.error("Erro ao buscar dados do usuário:", err);
        setError(
          "Não foi possível carregar os dados do usuário. Tente novamente mais tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate, handleLogout]);

  // --- RENDERIZAÇÃO DE CARREGAMENTO E ERRO ---
  if (loading) {
    return (
      <div className="container text-center py-5">
        <h4>Carregando seu perfil...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center py-5">
        <h4 className="text-danger">{error}</h4>
      </div>
    );
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
          <h1 className="user-greeting fw-semibold">
            Olá, {userData?.user_name}!
          </h1>
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
                  <p className="fw-semibold">
                    {userData?.user_type === "DEFAULT_USER"
                      ? "Adotante"
                      : userData?.user_type === "ADMIN_USER"
                      ? "Administrador"
                      : "Erro: Tipo Desconhecido"}
                  </p>
                </div>
                <div className="d-flex flex-column gap-2">
                  {userData?.user_type === "ADMIN_USER" && (
                    <Link
                      className="btn btn-primary" // Usei uma classe diferente para destacar
                      to="/admin"
                    >
                      <i className="bi bi-shield-lock"></i> Painel do
                      Administrador
                    </Link>
                  )}

                  <button
                    className="btn btn-outline-secondary ... button_black"
                    onClick={handleEditClick}
                  >
                    <i className="bi bi-pencil"></i> Editar Perfil
                  </button>
                  <button
                    className="btn btn-outline-secondary ... button_black"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right"></i> Sair da Conta
                  </button>
                  <button
                    className="btn btn-outline-secondary ... button_black"
                    onClick={handleDeleteAccount}
                  >
                    <i className="bi bi-trash"></i> Excluir Conta
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-7" id="adoption-favorites-section">
            <div className="row mb-4" id="adoption-requests">
              <div className="card shadow-sm rounded-3 border-0">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-heart me-2 fs-4 text-danger"></i>
                    <h5 className="card-title user_title mb-0">
                      Meus Pedidos de Adoção
                    </h5>
                  </div>
                  <div className="adoption-list">
                    {userAdoptions.length === 0 ? (
                      <p className="text-muted">
                        Você ainda não fez nenhum pedido de adoção.
                      </p>
                    ) : (
                      userAdoptions.map((userAdoptions) => (
                        <AdoptionCard
                          key={userAdoptions.adoption_id}
                          id={userAdoptions.adoption_id}
                          animalName={userAdoptions.animal.animal_name}
                          adoptionDate={userAdoptions.order_date}
                          status={userAdoptions.adoption_status}
                          onCancel={handleCancelAdoption}
                          photo={userAdoptions.animal.animal_photo}
                        />
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="favorites-section">
              <div className="card shadow-sm rounded-3 border-0">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-heart me-2 fs-4 text-danger"></i>
                    <h5 className="card-title user_title mb-0">
                      Minha Lista de Desejos
                    </h5>
                  </div>
                  <div className="adoption-list">
                    {userFavorites.length === 0 ? (
                      <div>
                        <p className="text-muted">
                          Você ainda não fez nenhum pedido de adoção.
                        </p>
                        <Link to="/animais" className="btn btn-link p-0">
                          Explorar Animais
                        </Link>
                      </div>
                    ) : (
                      userFavorites.map((userFavorites) => (
                        <FavoritesCard
                          key={userFavorites.animal.animal_id}
                          id={userFavorites.animal.animal_id}
                          favoriteId={userFavorites.favorite_id}
                          animalName={userFavorites.animal.animal_name}
                          animalAge={userFavorites.animal.animal_age}
                          animalGender={userFavorites.animal.animal_sex}
                          photo={userFavorites.animal.animal_photo}
                          onCancel={handleRemoveFavorite}
                        />
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seus modais aqui */}
      <UserEditModal
        show={showModal}
        onClose={handleCloseModal}
        onSave={handleUpdateUser}
        initialData={{
          nome: userData.user_name,
          email: userData.user_email,
        }}
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
