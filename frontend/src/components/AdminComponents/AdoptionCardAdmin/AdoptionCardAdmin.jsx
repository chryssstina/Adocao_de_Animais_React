import "./AdoptionCardAdmin.css";
import { Link } from "react-router-dom";

function AdoptionCardAdmin({ animal, onDeleteClick }) {
  const { id, animalName, adoptionDate, statusAdoption: status } = animal;

  return (
    <div className="card mb-3">
      <div className="row g-0 align-items-center p-3">
        <div className="col-md-4">
          <h5 className="card-title mb-1">{animalName}</h5>
          <div className="text-muted small">
            <i className="bi bi-calendar me-1"></i>
            {adoptionDate ? <span>{adoptionDate}</span> : <span>Aguardando Adoção</span>}
          </div>
        </div>
        <div className="col-md-8 d-flex justify-content-end align-items-center gap-2 flex-wrap">
          {status === "pendente" && <span className="badge bg-warning text-dark">Pendente</span>}
          {status === "aprovado" && <span className="badge bg-success">Adotado</span>}
          {status === "rejeitado" && <span className="badge bg-primary">Disponível</span>}
          {status === "disponivel" && <span className="badge bg-primary">Disponível</span>}
          
          <Link className="btn btn-outline-secondary btn-sm" to={`/admin/animais/adotados/${id}`}>
            <i className="bi bi-eye"></i>
          </Link>
          <button className="btn btn-danger btn-sm" onClick={() => onDeleteClick(animal)}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdoptionCardAdmin;
