import "./DeleteAccountModal.css";
import { useEffect } from "react";

function DeleteAccountModal({ show, onClose, onDelete, userName = "" }) {
  // Fecha o modal ao pressionar ESC
  useEffect(() => {
    if (!show) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose && onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="modal fade show"
      id="delete-account-modal"
      tabIndex="-1"
      style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-danger">Excluir Conta</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Fechar"
            ></button>
          </div>
          <div className="modal-body">
            <p>
              Tem certeza que deseja <span className="fw-bold text-danger">excluir sua conta</span>
              {userName && <> (<span className="fw-semibold">{userName}</span>)</>}? <br />
              <span className="text-danger">Essa ação não pode ser desfeita.</span>
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={onDelete}
            >
              Excluir Conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccountModal;
