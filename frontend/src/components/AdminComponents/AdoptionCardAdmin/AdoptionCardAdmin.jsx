import { Link } from "react-router-dom";
import "./AdoptionCardAdmin.css";

function AdoptionCardAdmin({ id, animalName, adoptionDate, status }) {
  return (
    <section className="adoption-card" id="adoption-card-section">
      <div className="card mb-3" id="adoption-card-content">
        <div className="row g-0 align-items-center">
          <div className="col-md-4">
            <h5 className="card-title mb-1">{animalName}</h5>
            <div className="text-muted small">
              <i className="bi bi-calendar me-1"></i>
              {adoptionDate === "" ? (
                <span className="no-underline">Aguardando Adoção</span>
              ) : (
                <span className="no-underline">{adoptionDate}</span>
              )}
            </div>
          </div>

          <div className="col-md-8 d-flex justify-content-end align-items-center gap-2 flex-wrap">
            {status === "pendente" ? (
              <span className="badge bg-warning text-dark no-underline"> Pendente </span>
            ) : status === "aprovado" ? (
              <span className="badge bg-success no-underline"> Adotado </span>
            ) : status === "rejeitado" ? (
              // disponivel, pois se o pedido de adoção foi rejeitado, ele ainda não saiu da adoção
              <span className="badge bg-primary no-underline"> Disponível </span>
            ) : status === "disponivel" ? (
              <span className="badge bg-primary no-underline"> Disponível </span>
            ) : (
              <span className="badge bg-secondary no-underline">
                Desconhecido
              </span>
            )}
            <Link className="btn btn-outline-secondary btn-sm button_black" to={`/admin/animais/adotados/${id}`}>
              <i className="bi bi-eye"></i>
            </Link>
            <button className="btn btn-danger btn-sm" id="DeleteButton">
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdoptionCardAdmin;
