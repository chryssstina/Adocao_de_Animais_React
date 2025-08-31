import { useState } from "react";
import AdminUserCard from "../../../components/AdminComponents/AdminUserCard/AdminUserCard";
import AdminUserEditModal from "../../../components/AdminComponents/AdminUserEditModal/AdminUserEditModal";
import UserStatsCard from "../../../components/AdminComponents/UserStatsCard/UserStatsCard";
import { users_mock as mockData } from "../../../data/users_mock";
import DeleteConfirmationModal from "../../../components/AdminComponents/DeleteComponentModal/DeleteComponentModal";
// import "./AdminUsers.css";

// --- COMPONENTE PRINCIPAL: AdminUsers ---
function AdminUsers() {
  const [users, setUsers] = useState(mockData);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  // Lógica do Modal de Edição
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };
  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentUser(null);
  };

  const handleSaveUser = (userId, updatedData) => {
    console.log("Salvando dados para o usuário ID:", userId, updatedData);
    setUsers(users.map(user =>
      user.id === userId ? { ...user, ...updatedData } : user
    ));
    // Aqui você chamaria sua API para salvar os dados no backend
  };

  const handleDeleteUser = () => {
    if (userToDelete) {
      console.log(`Excluindo usuário ID: ${userToDelete.id}`);
      setUsers(users.filter(user => user.id !== userToDelete.id));
      setShowDeleteModal(false);
      setUserToDelete(null);
    }
  };

  // Cálculos para os cards de estatísticas
  const adopters = users.filter((u) => u.role === "Adotante").length;
  const totalAdmins = users.filter((u) => u.role === "Administrador").length;
  const totalUsers = users.length;

  return (
    <>
      <section className="container-fluid bg-light py-4" id="admin-user-page">
        <div className="container bg-light pt-1" id="user-container">
          <div className="user-header mb-4" id="user-header">
            <h1 className="user-greeting fw-semibold">Lista de Usuários</h1>
            <p className="text-muted mb-0">Gerencie permissões, status e cadastros de usuários</p>
          </div>

          <div className="row justify-content-center mb-4 gap-3">
            <UserStatsCard value={adopters} label="Adotantes" color="primary" />
            <UserStatsCard value={totalUsers} label="Total de Usuários" color="secondary" />
            <UserStatsCard value={totalAdmins} label="Total de Administradores" color="success" />
          </div>

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
                          <th scope="col">Data de Cadastro</th>
                          <th scope="col">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.length === 0 ? (
                          <tr><td colSpan="5" className="text-center text-muted">Nenhum usuário cadastrado.</td></tr>
                        ) : (
                          users.map((user) => (
                            <AdminUserCard
                              key={user.id}
                              user={user}
                              onEdit={handleEditUser}
                              onDelete={handleDeleteClick}
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

      {/* Renderização do Modal */}
      <AdminUserEditModal
        show={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveUser}
        userData={currentUser}
      />

      <DeleteConfirmationModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onDelete={handleDeleteUser}
        userName={userToDelete ? userToDelete.name : ""}
      />
    </>
  );
}

export default AdminUsers;

