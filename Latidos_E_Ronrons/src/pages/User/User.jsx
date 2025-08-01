import AdoptionCard from "../../components/AdoptionCard/AdoptionCard";
import "./User.css";

function User() {
  return (
    <section className="container-fluid" id="user-page">
      <div className="container" id="user-container">
        <div className="user-header" id="user-header">
          <h1 className="user-greeting">Olá, 123!</h1>
          <h2 className="user-welcome">Bem-vindo à sua página de usuário.</h2>
        </div>
        <div className="container" id="user-panel">
          <div className="row">
            <div className="col" id="user-card">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-heart me-2"></i>
                <h5 className="mb-0">Meu Perfil</h5>
              </div>
              <p>Nome: João Silva</p>
              <p>Email: joao.silva@example.com</p>
              <p>Tipo de usuário: Adotante</p>
              <div className="d-flex flex-column">
              <button className="btn btn-primary">Editar Perfil</button>
              <button className="btn btn-secondary">Sair da Conta</button>
              <button className="btn btn-danger">Excluir Conta</button>
            </div>
            </div>
            <div className="col" id="user-adoptions">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-person me-2"></i>
                <h5 className="mb-0">Meus pedidos de adoção</h5>
              </div>
              <AdoptionCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default User;
