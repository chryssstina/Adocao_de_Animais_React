import { useState, useEffect } from "react";
import "./AdminUserEditModal.css"

function AdminUserEditModal({ show, onClose, onSave, userData }) {
  const initialFormState = {
    name: "",
    email: "",
    role: "Adotante", // Valor padrão
    password: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  // Efeito para popular o formulário quando o modal é aberto com dados de um usuário
  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name || "",
        email: userData.email || "",
        role: userData.role || "Adotante",
        password: "", // Senha sempre vazia por segurança
      });
    }
  }, [userData]);

  // Handler para atualizar o estado do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler para fechar o modal e resetar o estado
  const handleCloseModal = () => {
    onClose();
    setFormData(initialFormState);
  };

  // Handler para submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Cria um objeto de dados para salvar, omitindo a senha se estiver vazia
    const dataToSave = { ...formData };
    if (!dataToSave.password) {
      delete dataToSave.password;
    }
    onSave(userData.id, dataToSave); // Envia o ID do usuário e os novos dados
    handleCloseModal();
  };

  // Não renderiza nada se 'show' for falso
  if (!show) return null;

  return (
      <div className="modal fade show" id="admin-user-edit-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">Editar Usuário</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nome</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">Tipo</label>
                  <select
                    id="role"
                    className="form-select"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option value="Adotante">Adotante</option>
                    <option value="Administrador">Administrador</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Nova Senha</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Deixe em branco para não alterar"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Salvar Alterações
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default AdminUserEditModal;
