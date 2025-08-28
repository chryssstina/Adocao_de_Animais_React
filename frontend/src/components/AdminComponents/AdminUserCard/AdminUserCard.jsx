import "./AdminUserCard.css";

function AdminUserCard({ name, email, role, status, createdAt }) {
  return (
    <tr>
      <td><strong>{name}</strong></td>
      <td>{email}</td>
      <td>
        {role === "Adotante" && <span className="badge bg-info-subtle text-primary">Adotante</span>}
        {role === "Voluntário" && <span className="badge bg-purple-subtle text-purple">Voluntário</span>}
        {role === "Administrador" && <span className="badge bg-danger-subtle text-danger">Administrador</span>}
      </td>
      <td>
        {status === "Ativo" ? (
          <span className="badge bg-success-subtle text-success">Ativo</span>
        ) : (
          <span className="badge bg-secondary-subtle text-dark">Inativo</span>
        )}
      </td>
      <td>{createdAt}</td>
      <td>
        <div className="d-flex gap-2">
          {status === "Ativo" ? (
            <button className="btn btn-outline-danger btn-sm">
              <i className="bi bi-person-x"></i>
            </button>
          ) : (
            <button className="btn btn-outline-success btn-sm">
              <i className="bi bi-person-check"></i>
            </button>
          )}
          <button className="btn btn-outline-dark btn-sm">
            <i className="bi bi-pencil"></i>
          </button>
          <button className="btn btn-danger btn-sm">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default AdminUserCard;
