// import "./AdminUserCard.css"; // Se tiver estilos específicos

// ALTERADO: Recebe o objeto 'user' completo e a função 'onEdit'
function AdminUserCard({ user, onEdit }) {
  const { name, email, role, createdAt } = user;

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
          {/* ALTERADO: O onClick agora chama a função 'onEdit' passada pelo pai */}
          <button 
            className="btn btn-outline-dark btn-sm"
            onClick={() => onEdit(user)} // Passa os dados deste usuário para o pai
          >
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
