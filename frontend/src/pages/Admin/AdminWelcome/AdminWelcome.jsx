import "./AdminWelcome.css";
import AdminInfoCard from "../../../components/AdminComponents/AdminInfoCard/AdminInfoCard";
import { useEffect, useState } from "react";


function AdminWelcome() {

  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem(import.meta.env.VITE_USER_KEY);
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.user_type === "ADMIN_USER") {
        setAdminName(user.user_name); // pega o nome do admin
      }
    }
  }, []);


  return (
    <section className="container-fluid bg-light py-4" id="admin-user-page">
      <div className="container bg-light pt-1" id="user-container">
        <header className="text-center mb-5">
          <div className="admin-header-icon">
            <i className="bi bi-heart" id="admin-header-icon"></i>
          </div>
          <h1 className="fw-bold mt-3">Painel Administrativo</h1>
          <h3>{adminName && <strong>{adminName}</strong>}  </h3>
          <p className="lead text-muted">
            Bem-vindo(a) ao sistema de administração da ONG Latidos&Ronrons.
            <br />
            Gerencie todos os aspectos da nossa missão de cuidar dos animais.
          </p>
        </header>

        <div
          className="card shadow-sm rounded-3 border-0 mb-5"
          id="admin-info-card"
        >
          <div className="card-body p-4">
            <div className="info-box text-center ">
              <p className="mb-0">
                Use o menu lateral para navegar entre as diferentes seções
                administrativas. Cada seção foi projetada para facilitar o
                gerenciamento eficiente da nossa organização.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center d-flex gap-3 mb-5" id="admin-cards-row">
          <AdminInfoCard
            id="animals-info-card"
            title="Gerenciar Animais"
            text="Cadastre, edite e gerencie informações dos animais disponíveis para adoção. Controle o status, histórico médico e fotos de cada animal."
            icon="bi-clipboard-data"
          />

          <AdminInfoCard
            id="adoptions-info-card"
            title="Gerenciar Adoções"
            text="Acompanhe o processo de adoção e gerencie solicitações dos adotantes. Monitore cada etapa do processo até a finalização."
            icon="bi-house-heart"
          />

          <AdminInfoCard
            id="users-info-card"
            title="Gerenciar Usuários"
            text="Administre contas de usuários e suas permissões no sistema. Controle o acesso e organize diferentes níveis de usuário."
            icon="bi-people"
          />
        </div>


        <div className="card border-0 bg-light justify-content-end align-items-center d-flex" id="admin-footer-card">
          <div className="card-body">
            <div className="info-box text-center">
              <p className="mb-0 border border-2 rounded-3 p-2 px-4 bg-body-secondary text-secondary">
                Todas as funcionalidades estão acessíveis através do menu
                lateral.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminWelcome;
