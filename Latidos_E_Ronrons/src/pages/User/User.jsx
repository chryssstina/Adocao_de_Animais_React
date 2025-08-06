import AdoptionCard from "../../components/AdoptionCard/AdoptionCard";
import "./User.css";
import { animal_adoption_mock as mockData } from "../../data/animal_adoption_mock";

function User() {
  const user = {
    id: 1,
    nome: "João Silva",
    email: "joao.silva@example.com",
    tipo: "Adotante",
  };
  const userAdoptions = mockData.filter(adoption => adoption.userId === user.id);

  return (
    <section className="container-fluid bg-light py-4" id="user-page">
      <div className="container bg-light" id="user-container">
        <div className="user-header mb-4" id="user-header">
          <h1 className="user-greeting fw-semibold">Olá, {user.nome}!</h1>
          <p className="text-muted mb-0">Bem-vindo à sua página de usuário.</p>
        </div>

        <div className="row g-4" id="user-panel">
          <div className="col-12 col-md-5">
            <div className="card shadow-sm rounded-3 border-0">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-person me-2 fs-4 text-primary"></i>
                  <h5 className="card-title mb-0">Meu Perfil</h5>
                </div>

                <div className="mb-3">
                  <p className="text-muted small">Nome</p>
                  <p className="fw-semibold">{user.nome}</p>
                </div>

                <div className="mb-3">
                  <p className="text-muted small">Email</p>
                  <p className="fw-semibold">{user.email}</p>
                </div>

                <div className="mb-4">
                  <p className="text-muted small">Tipo de Usuário</p>
                  <p className="fw-semibold">{user.tipo}</p>
                </div>

                <div className="d-flex flex-column gap-2">
                  <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2 button_black">
                    <i className="bi bi-pencil"></i>
                    Editar Perfil
                  </button>
                  <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2 button_black">
                    <i className="bi bi-box-arrow-right"></i>
                    Sair da Conta
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-7">
            <div className="card shadow-sm rounded-3 border-0">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-heart me-2 fs-4 text-danger"></i>
                  <h5 className="card-title mb-0">Meus Pedidos de Adoção</h5>
                </div>
                <div className="adoption-list">
                  {userAdoptions.length === 0 ? (
                    <p className="text-muted">Você ainda não fez nenhum pedido de adoção.</p>
                  ) : (
                    userAdoptions.map((adoption) => (
                      <AdoptionCard
                        key={adoption.id}
                        animalName={adoption.animalName}
                        adoptionDate={adoption.adoptionDate}
                        status={adoption.statusAdoption}
                        photo={adoption.photo}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default User;
