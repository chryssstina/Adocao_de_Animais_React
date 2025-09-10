import "./UserAdoptModal.css";
import { useState, useEffect } from "react";

function UserAdoptModal({ show, onClose, onSave, animalName }) {
  const [reason, setReason] = useState("");

  // reseta o campo sempre que abrir o modal
  useEffect(() => {
    if (show) {
      setReason("");
    }
  }, [show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave( reason );
    }
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setReason("");
    if (onClose) onClose();
  };

  if (!show) return null;

  return (
    <div className="modal fade show d-block" id="user-adopt-modal">
      <div className="modal-dialog">
        <div className="modal-content">

          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">
                Pedido de Adoção - {animalName}
              </h5>

              <button
                type="button"
                className="btn-close"
                onClick={handleCloseModal}>
              </button>
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">
                  Por que você gostaria de adotar este animal?
                </label>
                <textarea
                  className="form-control"
                  name="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows="4"
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCloseModal}>
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary">
                Enviar Pedido
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserAdoptModal;

