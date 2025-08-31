import "./AdminAdoptions.css";
import { animal_adoption_mock as mockData } from "../../../data/animal_adoption_mock";
import RegisteredAnimalsCardAdmin from "../../../components/RegisteredAnimalsCardAdmin/RegisteredAnimalsCardAdmin";

function AdminAdoptions() {
  const userAdoptions = mockData;

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
                        <th scope="col">Id</th>
                        <th scope="col">Animal</th>
                        <th scope="col">Adotante</th>
                        <th scope="col">Email</th>
                        <th scope="col">Data do pedido</th>
                        <th scope="col">Status</th>
                        <th scope="col">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userAdoptions.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="text-center text-muted">
                            Nenhum pedido de adoção encontrado.
                          </td>
                        </tr>
                      ) : (
                        userAdoptions.map((adoption) => (
                          <RegisteredAnimalsCardAdmin
                            key={adoption.id}
                            id={adoption.id}
                            animalName={adoption.animalName}
                            adopterName={adoption.adopterName}
                            adopterEmail={adoption.adopterEmail}
                            adoptionDate={adoption.adoptionDate}
                            status={adoption.statusAdoption}
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
