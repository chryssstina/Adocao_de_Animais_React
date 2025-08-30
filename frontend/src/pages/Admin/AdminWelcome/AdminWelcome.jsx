import React from "react";
import { Link } from "react-router-dom"; // Importe o Link se for usar para navegação
import "./AdminWelcome.css";

function AdminWelcome() {
  return (
    <section className="container-fluid bg-light py-4" id="admin-user-page">
      <div className="container bg-light pt-1" id="user-container">
        <header className="text-center mb-5">
          <div className="admin-header-icon">
            <i className="bi bi-heart" id="admin-header-icon"></i>
          </div>
          <h1 className="fw-bold mt-3">Painel Administrativo</h1>
          <p className="lead text-muted">
            Bem-vindo ao sistema de administração da ONG Latidos&Ronrons.
            <br />
            Gerencie todos os aspectos da nossa missão de cuidar dos animais.
          </p>
        </header>

        <div className="info-box text-center mb-5">
          <p className="mb-0">
            Use o menu lateral para navegar entre as diferentes seções
            administrativas. Cada seção foi projetada para facilitar o
            gerenciamento eficiente da nossa organização.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <Link
              to="/admin/gerenciar-animais"
              className="admin-card card-blue"
            >
              <div className="card-icon">
                <i className="bi bi-clipboard-data"></i>
              </div>
              <div className="card-content">
                <h5 className="card-title">Gerenciar Animais</h5>
                <p className="card-text">
                  Cadastre, edite e gerencie informações dos animais disponíveis
                  para adoção. Controle o status, histórico médico e fotos de
                  cada animal.
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link
              to="/admin/gerenciar-adocoes"
              className="admin-card card-green"
            >
              <div className="card-icon">
                <i className="bi bi-house-heart"></i>
              </div>
              <div className="card-content">
                <h5 className="card-title">Gerenciar Adoções</h5>
                <p className="card-text">
                  Acompanhe o processo de adoção e gerencie solicitações dos
                  adotantes. Monitore cada etapa do processo até a finalização.
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link
              to="/admin/gerenciar-usuarios"
              className="admin-card card-purple"
            >
              <div className="card-icon">
                <i className="bi bi-people"></i>
              </div>
              <div className="card-content">
                <h5 className="card-title">Gerenciar Usuários</h5>
                <p className="card-text">
                  Administre contas de usuários e suas permissões no sistema.
                  Controle o acesso e organize diferentes níveis de usuário.
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link
              to="/admin/gerenciar-voluntarios"
              className="admin-card card-yellow"
            >
              <div className="card-icon">
                <i className="bi bi-person-workspace"></i>
              </div>
              <div className="card-content">
                <h5 className="card-title">Gerenciar Voluntários</h5>
                <p className="card-text">
                  Organize e coordene as atividades dos voluntários da ONG,
                  distribua tarefas, eventos e comunicação com a equipe.
                </p>
              </div>
            </Link>
          </div>
        </div>

        <footer className="text-center mt-5">
          <div className="footer-note">
            Todas as funcionalidades estão acessíveis através do menu lateral.
          </div>
        </footer>
      </div>
    </section>
  );
}

export default AdminWelcome;
