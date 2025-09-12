import "./AdoptionCardAdmin.css";
import { Link } from "react-router-dom";

function AdoptionCardAdmin({ animal, onDeleteClick }) {
  const { animal_id, animal_name, animal_status } = animal;
  // console.log("Animal recebido:", animal);


  function formatDate(dateString) {
    if (!dateString) return null;
    const date = new Date(dateString);

    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  //exibe a data de acordo com o status do animal
  function getDisplayDate(animal) {
    const firstAdoption = animal.adoptions[0];

    if (animal.animal_status === "ADOPTED") {
      const date = formatDate(firstAdoption?.processed_date);
      return date ? `Adotado em: ${date}` : "Data de adoção pendente";
    }

    if (animal.animal_status == "IN_PROCESS_ADOPTION") {
      const date = formatDate(animal.order_date);
      return date ? `Pedido de adoção: ${date}` : "Pedido de adoção: aguardando";
    }

    const date = formatDate(animal.animal_registration_date);
    return date ? `Registrado em: ${date}` : "Data de registro não informada";
  }


  return (
    <div className="card mb-3">
      <div className="row g-0 align-items-center p-3">
        <div className="col-md-4">
          <h5 className="card-title mb-1">{animal_name}</h5>
          <div className="text-muted small">
            <i className="bi bi-calendar me-1"></i>
            <span>{getDisplayDate(animal)}</span>

          </div>
        </div>
        <div className="col-md-8 d-flex justify-content-end align-items-center gap-2 flex-wrap">
          {animal_status === "AVAILABLE" && <span className="badge bg-primary">Disponível</span>}
          {animal_status === "IN_PROCESS_ADOPTION" && <span className="badge bg-warning text-dark">Em processo de adoção</span>}
          {animal_status === "ADOPTED" && <span className="badge bg-success">Adotado</span>}

          <Link className="btn btn-outline-secondary btn-sm" to={`/admin/animais/adotados/${animal_id}`}>
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
