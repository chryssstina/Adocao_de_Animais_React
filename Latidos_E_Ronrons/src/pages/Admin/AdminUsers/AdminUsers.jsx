import "./AdminUsers.css"; 
import { users_mock as mockData } from "../../../data/users_mock";
import AdminUserCard from "../../../components/AdminUserCard/AdminUserCard";
import UserStatsCard from "../../../components/UserStatsCard/UserStatsCard";

function AdminUsers() {
  const users = mockData;

  // Cálculos
  const adopters = users.filter((u) => u.role === "Adotante").length;
  const volunteers = users.filter((u) => u.role === "Voluntário").length;
  const activeUsers = users.filter((u) => u.status === "Ativo").length;
  const totalUsers = users.length;

  return (
    <section className="container-fluid bg-light py-4" id="user-page">
      <div className="container bg-light pt-1" id="user-container">
        <div className="user-header mb-4" id="user-header">
          <h1 className="user-greeting fw-semibold">Lista de Usuários</h1>
          <p className="text-muted mb-0">
            Gerencie permissões, status e cadastros de usuários
          </p>
        </div>

        {/* Cards informativos */}
        <div className="row mb-4">
          <UserStatsCard value={adopters} label="Adotantes" color="primary" />
          <UserStatsCard value={volunteers} label="Voluntários" color="purple" />
          <UserStatsCard value={activeUsers} label="Usuários Ativos" color="success" />
          <UserStatsCard value={totalUsers} label="Total de Usuários" color="secondary" />
        </div>

        {/* Tabela de usuários */}
        <div className="row g-4" id="user-panel">
          <div className="col-12">
            <div className="card shadow-sm rounded-3 border-0">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-people me-2 fs-4 text-primary"></i>
                  <h5 className="card-title user_title mb-0">Usuários</h5>
                </div>

                <div className="table-responsive">
                  <table className="table align-middle">
                    <thead>
                      <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Status</th>
                        <th scope="col">Data de Cadastro</th>
                        <th scope="col">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="text-center text-muted">
                            Nenhum usuário cadastrado.
                          </td>
                        </tr>
                      ) : (
                        users.map((user) => (
                          <AdminUserCard
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            role={user.role}
                            status={user.status}
                            createdAt={user.createdAt}
                          />
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminUsers;
