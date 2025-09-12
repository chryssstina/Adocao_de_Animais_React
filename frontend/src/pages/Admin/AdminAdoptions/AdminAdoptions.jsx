import "./AdminAdoptions.css";
import { useEffect, useState } from "react";
import adoptionService from '../../../services/adoptionService'
import RegisteredAnimalsCardAdmin from "../../../components/RegisteredAnimalsCardAdmin/RegisteredAnimalsCardAdmin";

function AdminAdoptions() {
  const [userAdoptions, setUserAdoptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdoptions();
  }, []);

  const fetchAdoptions = async () => {
    try {
      const data = await adoptionService.getAllAdoptions();
      setUserAdoptions(data);
    } catch (error) {
      console.error("Erro ao buscar adoções:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (adoption_id, newStatus) => {

    const payload = {
      adoption_status: newStatus,
      fk_animal_id: adoption.animal.animal_id,
      fk_adopting_user_id: adoption.adopting_user.user_id,
    }
    try {
      await adoptionService.updateAdoption(adoption_id, payload);

      setUserAdoptions((prevAdoptions) =>
        prevAdoptions.map((a) =>
          a.adoption_id === adoption.adoption_id
            ? { ...a, adoption_status: newStatus, processed_date: new Date().toISOString() }
            : a
        )
      );
      if (newStatus == 'ACCEPTED') {
        alert("Pedido aceito!")
      } else {
        alert("Pedido recusado")
      }
    } catch (error) {
      console.error("Erro ao atualizar status da adoção:", error);
    }
  };




  return (
    <section className="container-fluid bg-light py-4" id="admin-adoptions-page">
      <div className="container bg-light pt-1" id="user-container">
        <div className="user-header mb-4" id="user-header">
          <h1 className="user-greeting fw-semibold">Pedidos de Adoção</h1>
          <p className="text-muted mb-0">
            Analise e aprove os pedidos de adoção
          </p>
        </div>

        <div className="row g-4" id="user-panel">
          <div className="col-12">
            <div className="card shadow-sm rounded-3 border-0">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-bag-heart me-2 fs-4 text-danger"></i>
                  <h5 className="card-title user_title mb-0">
                    Pedidos de Adoção
                  </h5>
                </div>

                <div className="table-responsive">
                  <table className="table align-middle">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Status</th>
                        <th scope="col">Data do pedido</th>
                        <th scope="col">Data de aceite/recusa</th>
                        <th scope="col">Razão</th>
                        <th scope="col">Animal ID</th>
                        <th scope="col">Adotante</th>
                        <th scope="col">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan="7" className="text-center">Carregando...</td>
                        </tr>
                      ) : userAdoptions.length === 0 ? (
                        <tr>
                          <td colSpan="8" className="text-center text-muted">
                            Nenhum pedido de adoção encontrado.
                          </td>
                        </tr>
                      ) : (
                        userAdoptions.map(adoption => (
                          <RegisteredAnimalsCardAdmin
                            key={adoption.adoption_id}
                            adoption_id={adoption.adoption_id}
                            adoption_status={adoption.adoption_status}
                            order_date={adoption.order_date}
                            processed_date={adoption.processed_date}
                            reason={adoption.reason}
                            animal={adoption.animal}
                            adopting_user={adoption.adopting_user}
                            onAccept={() => handleStatusChange(adoption.adoption_id, "ACCEPTED")}
                            onReject={() => handleStatusChange(adoption.adoption_id, "DECLINED")}
                          />
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminAdoptions;
