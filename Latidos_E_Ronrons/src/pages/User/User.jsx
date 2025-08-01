import AdoptionCard from "../../components/AdoptionCard/AdoptionCard";
import "./User.css";

function User() {
  const user = {
    nome: "João Silva",
    email: "joao.silva@example.com",
    tipo: "Adotante",
  };

  return (
    <section className="container-fluid" id="user-page">
      <div className="container py-4" id="user-container">
        <div className="user-header mb-4" id="user-header">
          <h1 className="user-greeting">Olá, {user.nome}!</h1>
          <h2 className="user-welcome">
            Bem-vindo à sua página de usuário.
          </h2>
        </div>

        <div className="row g-4" id="user-panel">
          <div className="col-12 col-md-5">
            <div className="card w-75 mb-3 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-person me-2 fs-4 text-success"></i>
                  <h5 className="card-title mb-0">Meu Perfil</h5>
                </div>
                <div className="mb-2">
                  <p className="card-text mb-1">
                    <strong>Nome:</strong> {user.nome}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Tipo de usuário:</strong> {user.tipo}
                  </p>
                </div>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <button className="btn btn-primary">Editar Perfil</button>
                  <button className="btn btn-secondary">Sair da Conta</button>
                  <button className="btn btn-danger">Excluir Conta</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-7">
            <div className="card w-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-heart me-2 fs-4 text-success"></i>
                  <h5 className="card-title mb-0">
                    Meus pedidos de adoção
                  </h5>
                </div>
                <AdoptionCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default User;