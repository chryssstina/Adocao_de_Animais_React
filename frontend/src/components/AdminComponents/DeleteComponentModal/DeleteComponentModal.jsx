import "./DeleteComponentModal.css";
import { useEffect } from "react";

function DeleteConfirmationModal({ show, onClose, onDelete, itemName = "" }) {
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
    <div className="modal fade show" id="deleteConfirmationModal">
      <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-danger">Confirmar Exclusão</h5>
              <button type="button" className="btn-close" onClick={onClose} aria-label="Fechar"></button>
            </div>
            <div className="modal-body">
              <p>
                Tem certeza que deseja <span className="text-danger">excluir</span>
                {itemName && <> o animalzinho <span className="fw-semibold">"{itemName}"</span></>}?
                <br />
                <span className="text-danger">Essa ação não pode ser desfeita.</span>
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
              <button type="button" className="btn btn-danger" onClick={onDelete}>Excluir</button>
            </div>
          </div>
      </div>
    </div>
  );
}


export default DeleteConfirmationModal;
