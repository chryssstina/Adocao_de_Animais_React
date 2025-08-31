import { Link } from "react-router-dom";
import "./RegisteredAnimalsCardAdmin.css";

function RegisteredAnimalsCardAdmin({
  id,
  animalName,
  adopterName,
  adopterEmail,
  adoptionDate,
  status,
}) {
  return (
    <tr>
      <td>{id}</td>
      <td><strong>{animalName}</strong></td>
      <td>{adopterName}</td>
      <td>{adopterEmail}</td>
      <td>{adoptionDate || <span className="text-muted">Aguardando</span>}</td>
      <td>
        {status === "pendente" ? (
          <span className="badge bg-warning text-dark">Pendente</span>
        ) : status === "aprovado" ? (
          <span className="badge bg-success">Aprovado</span>
        ) : status === "rejeitado" ? (
          <span className="badge bg-danger">Rejeitado</span>
        ) : (
          <span className="badge bg-secondary">Desconhecido</span>
        )}
      </td>
      <td>
        <div className="d-flex gap-2">
          {status === "pendente" && (
            <>
              <button className="btn btn-success btn-sm">
                <i className="bi bi-check"></i>
              </button>
              <button className="btn btn-danger btn-sm">
                <i className="bi bi-x"></i>
              </button>
            </>
          )}
          <Link
            className="btn btn-outline-secondary btn-sm"
            to={`/adotados/${id}`}
          >
            <i className="bi bi-eye" id="view-icon"></i>
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default RegisteredAnimalsCardAdmin;
