import { useState, useEffect } from "react";
import AdminUserCard from "../../../components/AdminComponents/AdminUserCard/AdminUserCard";
import AdminUserEditModal from "../../../components/AdminComponents/AdminUserEditModal/AdminUserEditModal";
import UserStatsCard from "../../../components/AdminComponents/UserStatsCard/UserStatsCard";
import DeleteConfirmationModal from "../../../components/AdminComponents/DeleteComponentModal/DeleteComponentModal";
import userService from "../../../services/userService"; // 1. Importar o service
import { formatDate } from "../../../utils/formatters"; // Helper para formatar data

function AdminUsers() {
    // 2. Inicializar o estado de usuários como um array vazio
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    // 3. Criar função para carregar usuários da API
    const loadUsers = async () => {
        try {
            setLoading(true);
            const data = await userService.getAllUsers();
            setUsers(data);
        } catch (err) {
            setError("Não foi possível carregar os usuários.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // 4. Chamar a função de carregar usuários quando o componente montar
    useEffect(() => {
        loadUsers();
    }, []);

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

    // 5. Integrar a função de salvar com a API
    const handleSaveUser = async (userId, updatedData) => {
        try {
            const payload = {
                user_name: updatedData.name,
                user_email: updatedData.email,
                user_type: updatedData.role,
            };
            const updatedUserFromApi = await userService.updateUser(userId, payload);
            
            setUsers(users.map(user =>
                user.user_id === userId ? { ...user, ...updatedUserFromApi } : user
            ));
            handleCloseModal();
            alert("Usuário atualizado com sucesso!");
        } catch (err) {
            console.error("Erro ao salvar usuário:", err);
            alert("Não foi possível salvar as alterações.");
        }
    };

    // 6. Integrar a função de deletar com a API
    const handleDeleteUser = async () => {
        if (userToDelete) {
            try {
                await userService.deleteUser(userToDelete.user_id);
                setUsers(users.filter(user => user.user_id !== userToDelete.user_id));
                setShowDeleteModal(false);
                setUserToDelete(null);
                alert("Usuário deletado com sucesso!");
            } catch (err) {
                console.error("Erro ao deletar usuário:", err);
                alert("Não foi possível deletar o usuário.");
            }
        }
    };

    // 7. Ajustar os cálculos para o padrão da API (user_type)
    const adopters = users.filter((u) => u.user_type === "DEFAULT_USER").length;
    const totalAdmins = users.filter((u) => u.user_type === "ADMIN_USER").length;
    const totalUsers = users.length;
    
    // Renderização de Loading e Erro
    if (loading) return <p>Carregando usuários...</p>;
    if (error) return <p className="text-danger">{error}</p>;

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

                    <div className="card shadow-sm rounded-3 border-0">
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-people me-2 fs-4 text-primary"></i>
                                <h5 className="card-title user_title mb-0">Usuários Cadastrados</h5>
                            </div>
                            <div className="table-responsive">
                                <table className="table align-middle">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome</th>
                                            <th>Email</th>
                                            <th>Tipo</th>
                                            <th>Data de Cadastro</th>
                                            <th className="text-center">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.length === 0 ? (
                                            <tr><td colSpan="6" className="text-center text-muted">Nenhum usuário cadastrado.</td></tr>
                                        ) : (
                                            users.map((user) => (
                                                <AdminUserCard
                                                    key={user.user_id}
                                                    user={user}
                                                    onEdit={handleEditUser}
                                                    onDelete={handleDeleteClick}
                                                    formatDate={formatDate} // Passa a função de formatação
                                                />
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                itemName={userToDelete ? userToDelete.user_name : ""}
            />
        </>
    );
}

export default AdminUsers;