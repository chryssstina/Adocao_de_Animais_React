import "./AdminUserCard.css";

function AdminUserCard({ name, email, role, createdAt }) {
  return (
    <tr>
      <td><strong>{name}</strong></td>
      <td>{email}</td>
      <td>
        {role === "Adotante" && <span className="badge bg-info-subtle text-primary">Adotante</span>}
        {role === "Administrador" && <span className="badge bg-danger-subtle text-danger">Administrador</span>}
      </td>
      
      <td>{createdAt}</td>
      <td>
        <div className="d-flex gap-2">
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
