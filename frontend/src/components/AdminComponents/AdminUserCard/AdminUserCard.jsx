// Arquivo: /src/components/AdminComponents/AdminUserCard/AdminUserCard.jsx

// 1. Recebe a nova prop 'formatDate' que passamos no AdminUsers.jsx
function AdminUserCard({ user, onEdit, onDelete, formatDate }) {
  
  // 2. Desestrutura os campos com os NOMES CORRETOS vindos da sua API
  const { user_id, user_name, user_email, user_type, user_registration_date } = user;

  return (
    <tr>
      {/* 3. Usa os novos nomes de campos no JSX */}
      <td>{user_id}</td>
      <td><strong>{user_name}</strong></td>
      <td>{user_email}</td>
      <td>
        {/* 4. A lógica agora verifica 'user_type' e os valores do ENUM do seu backend */}
        {user_type === "DEFAULT_USER" && <span className="badge bg-info-subtle text-primary">Adotante</span>}
        {user_type === "ADMIN_USER" && <span className="badge bg-danger-subtle text-danger">Administrador</span>}
      </td>
      {/* 5. Usa a função formatDate para exibir a data corretamente */}
      <td>{formatDate(user_registration_date)}</td>
      <td className="text-center">
        <div className="d-flex gap-2 justify-content-center">
          <button 
            className="btn btn-outline-dark btn-sm"
            onClick={() => onEdit(user)} // Passa o objeto 'user' completo para a função de editar
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button className="btn btn-danger btn-sm" onClick={() => onDelete(user)}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default AdminUserCard;