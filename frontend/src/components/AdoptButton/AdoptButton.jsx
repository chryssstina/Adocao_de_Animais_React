import CustomBtn from "../CustomBtn/CustomBtn";

function AdoptButton({ status, onOpenModal, onRetry }) {
  switch (status) {
    case "loading":
      return (
        <button className="btn custom-btn-class" type="button" disabled>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span className="ms-2">Enviando...</span>
        </button>
      );
    case "success":
      return (
        <div className="btn custom-btn-class">
          <strong className="me-2">Pedido enviado com sucesso!</strong>
          <i className="bi bi-heart-fill"></i>
        </div>
      );
    case "error":
      return (
        <div className="alert alert-danger p-2 text-center">
          <p className="mb-1 small">Ops! Ocorreu um erro.</p>
          <button className="btn btn-sm btn-outline-danger" onClick={onRetry}>
            Tentar Novamente
          </button>
        </div>
      );
    case "idle":
    default:
      return (
        <CustomBtn
          label="Tenho interesse"
          icon="bi bi-heart"
          onClick={onOpenModal}
        />
      );
  }
}

export default AdoptButton;
