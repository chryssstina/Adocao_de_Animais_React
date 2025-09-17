import { Link } from "react-router-dom";
import {formatDate} from "../../../utils/formatters";
import "./AdoptionCard.css";

function AdoptionCard({id, animalName, adoptionDate, status, photo, onCancel }) {

  const handleCancelClick = () => {
        // Chama a função que veio do componente pai, passando o ID deste card
        onCancel(id);
  };

  return (
    <section className="adoption-card" id="adoption-card-section">
      <div className="card mb-3" id="adoption-card-content">
        <div className="row g-0 align-items-center">
          <div className="col-md-2 text-center">
            <img
              src={photo}
              className="img-fluid rounded-circle"
              alt="Animal adotado"
              id="adoption-card-image"
            />
          </div>

          <div className="col-md-4">
            <h5 className="card-title mb-1">{animalName}</h5>
            <div className="text-muted small">
              <i className="bi bi-calendar me-1"></i>
              {adoptionDate === "" ? (
                <span className="text-warning">Aguardando Adoção</span>
              ) : (
                <span className="no-underline">{formatDate(adoptionDate)}</span>
              )}
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-end align-items-center gap-2 flex-wrap">
            {status === "IN_PROGRESS" ? (
              <span className="badge bg-warning text-dark no-underline">
                Pendente
              </span>
            ) : status === "ACCEPTED" ? (
              <span className="badge bg-success no-underline">Aprovado</span>
            ) : status === "DECLINED" ? (
              <span className="badge bg-danger no-underline">Rejeitado</span>
            ) : (
              <span className="badge bg-secondary no-underline">
                Desconhecido
              </span>
            )}
            <Link className="btn btn-outline-secondary btn-sm button_black" to={`/pedido/${id}`}>
              Ver Detalhes
            </Link>
            {
              status === "rejeitado" ? (
                <button className="btn btn-danger btn-sm" id="DeleteButton" onClick={handleCancelClick}>Remover</button>
              ) : (
                <button className="btn btn-danger btn-sm" id="CancelButton" onClick={handleCancelClick}>Cancelar</button>
              )
            }
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdoptionCard;
