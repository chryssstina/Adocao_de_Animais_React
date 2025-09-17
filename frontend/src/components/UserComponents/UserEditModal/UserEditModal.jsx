// Arquivo: /src/components/UserComponents/UserEditModal/UserEditModal.jsx

import "./UserEditModal.css";
import { useState, useEffect } from "react";

function UserEditModal({ show, onClose, onSave, initialData = {} }) {
    // 1. O estado agora só precisa guardar o nome
    const [nome, setNome] = useState(initialData.nome || "");

    // 2. O useEffect atualiza o nome se o 'initialData' mudar
    useEffect(() => {
        setNome(initialData.nome || "");
    }, [initialData]);

    const handleCloseModal = () => {
        // Reseta o nome para o valor original ao fechar
        setNome(initialData.nome || "");
        if (onClose) onClose();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 3. O onSave agora envia um objeto simples com o novo nome
        if (onSave) onSave({ nome: nome });
        // O modal não fecha mais aqui, ele vai fechar no User.jsx após o sucesso da API
    };

    if (!show) return null;

    return (
        <div className="modal fade show" id="user-edit-modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title">Editar Perfil</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={handleCloseModal}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Nome</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nome"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)} // Atualiza o estado do nome
                                    required
                                />
                            </div>
                            {/* O campo de email foi removido */}
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

export default UserEditModal;