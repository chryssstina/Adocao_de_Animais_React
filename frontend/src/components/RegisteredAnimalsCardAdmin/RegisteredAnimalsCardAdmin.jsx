import { Link } from "react-router-dom";
import "./RegisteredAnimalsCardAdmin.css";

function RegisteredAnimalsCardAdmin({
  adoption_id,
  adoption_status,
  order_date,
  processed_date,
  reason,
  animal,
  adopting_user, //posso pegar qualuqer informação do usuario
  onAccept,
  onReject
}) {

 function formatDate(dateString) {
    if (!dateString) return null;
    const date = new Date(dateString);

    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  return (
    <tr>
      <td>{adoption_id}</td>
      <td>
        {adoption_status === "IN_PROGRESS" ? (
          <span className="badge bg-warning text-dark">Em processo</span>
        ) : adoption_status === "ACCEPTED" ? (
          <span className="badge bg-success">Aceito</span>
        ) : adoption_status === "DECLINED" ? (
          <span className="badge bg-danger">Recusado</span>
        ) : (
          <span className="badge bg-secondary">Desconhecido</span>
        )}
      </td>
      <td>{formatDate(order_date)}</td>
      <td>{processed_date ? formatDate(processed_date) : <span>-</span>}</td>
      <td>{reason}</td>
      <td>{animal.animal_id}</td>
      <td>{adopting_user.user_email}</td>
      <td>
        <div className="d-flex gap-2">
          {adoption_status === "IN_PROGRESS" && (
            <>
              <button className="btn btn-success btn-sm"  onClick={onAccept}>
                <i className="bi bi-check"></i>
              </button>
              <button className="btn btn-danger btn-sm" onClick={onReject}>
                <i className="bi bi-x"></i>
              </button>
            </>
          )}
          {/* <Link
            className="btn btn-outline-secondary btn-sm"
            to={`/adotados/${id}`}
          >
            <i className="bi bi-eye" id="view-icon"></i>
          </Link> */}
        </div>
      </td>
    </tr>
  );
}

export default RegisteredAnimalsCardAdmin;
