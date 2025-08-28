import "./AdminAnimals.css";
import { animal_adoption_mock as mockData } from "../../../data/animal_adoption_mock";
import AdoptionCardAdmin from "../../../components/AdminComponents/AdoptionCardAdmin/AdoptionCardAdmin";

function AdminAnimals() {
  const userAdoptions = mockData;

  return (
    <section className="container-fluid bg-light py-4" id="user-page">
      <div className="container bg-light pt-1" id="user-container">
        <div className="user-header mb-4" id="user-header">
          <h1 className="user-greeting fw-semibold">Gerenciar Animais</h1>
          <p className="text-muted mb-0">
            Cadastre, edite e gerencie os animais para adoção
          </p>
        </div>

        <div className="row g-4" id="user-panel">
          {/* FORMULÁRIO DE CADASTRO */}
          <div className="col-12 col-md-5">
            <div className="card shadow-sm rounded-3 border-0">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-plus-circle me-2 fs-4 text-success"></i>
                  <h5 className="card-title user_title mb-0">
                    Cadastrar Novo Animal
                  </h5>
                </div>

                <form>
                  <div className="mb-3">
                    <label htmlFor="nome" className="form-label">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      placeholder="Nome do animal"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="especie" className="form-label">
                      Espécie
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="especie"
                      placeholder="Cão, Gato, etc."
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="idade" className="form-label">
                      Idade
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="idade"
                      placeholder="Ex: 2 anos"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="descricao" className="form-label">
                      Descrição
                    </label>
                    <textarea
                      className="form-control"
                      id="descricao"
                      rows="3"
                      placeholder="Descreva o temperamento e características"
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="imagem" className="form-label">
                      Imagem
                    </label>
                    <input className="form-control" type="file" id="imagem" />
                  </div>

                  <button type="submit" className="btn btn-dark w-100">
                    Cadastrar
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* LISTA DE ANIMAIS CADASTRADOS */}
          <div className="col-12 col-md-7">
            <div className="card shadow-sm rounded-3 border-0">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-bag-heart me-2 fs-4 text-danger"></i>
                  <h5 className="card-title user_title mb-0">
                    Animais Cadastrados
                  </h5>
                </div>
                <div className="adoption-list">
                  {userAdoptions.length === 0 ? (
                    <p className="text-muted">
                      Você ainda não fez nenhum pedido de adoção.
                    </p>
                  ) : (
                    userAdoptions.map((adoption) => (
                      <AdoptionCardAdmin
                        key={adoption.id}
                        id={adoption.id}
                        animalName={adoption.animalName}
                        adoptionDate={adoption.adoptionDate}
                        status={adoption.statusAdoption}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminAnimals;
