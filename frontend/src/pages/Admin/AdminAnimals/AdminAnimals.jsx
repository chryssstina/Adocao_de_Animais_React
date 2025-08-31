import { useState } from "react";
import { Link } from "react-router-dom";
import { animal_adoption_mock as mockData } from "../../../data/animal_adoption_mock";
import "./AdminAnimals.css";
import AdoptionCardAdmin from "../../../components/AdminComponents/AdoptionCardAdmin/AdoptionCardAdmin";
import DeleteConfirmationModal from "../../../components/AdminComponents/DeleteComponentModal/DeleteComponentModal";

// --- DADOS MOCK ---
const animal_adoption_mock = mockData;

function AdminAnimals() {
  const [animals, setAnimals] = useState(animal_adoption_mock);

  // --- LÓGICA DO MODAL DE DELEÇÃO ---
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [animalToDelete, setAnimalToDelete] = useState(null);

  // Abre o modal e define qual animal será deletado
  const handleDeleteClick = (animal) => {
    setAnimalToDelete(animal);
    setShowDeleteModal(true);
  };

  // Fecha o modal
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setAnimalToDelete(null);
  };

  // Confirma a exclusão e atualiza a lista
  const handleConfirmDelete = () => {
    if (animalToDelete) {
      console.log(`Excluindo animal ID: ${animalToDelete.id}`);
      setAnimals(animals.filter(animal => animal.id !== animalToDelete.id));
      handleCloseDeleteModal();
    }
  };

  return (
    <>
      <section className="container-fluid bg-light py-4" id="admin-animals-page">
        <div className="container bg-light pt-1" id="user-container">
          <div className="admin-animals-header mb-4">
            <h1 className="user-greeting fw-semibold">Gerenciar Animais</h1>
            <p className="text-muted mb-0">Cadastre, edite e gerencie os animais para adoção</p>
          </div>

          <div className="row g-4" id="user-panel">
            {/* FORMULÁRIO DE CADASTRO (col-md-5) */}
            <div className="col-12 col-md-5">
              <div className="card shadow-sm rounded-3 border-0">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-plus-circle me-2 fs-4 text-success"></i>
                    <h5 className="card-title user_title mb-0">Cadastrar Novo Animal</h5>
                  </div>
                  <form>
                    {/* Campos do formulário... */}
                    <div className="mb-3"><label htmlFor="nome" className="form-label">Nome</label><input type="text" className="form-control" id="nome" placeholder="Nome do animal" /></div>
                    <div className="mb-3"><label htmlFor="especie" className="form-label">Espécie</label><input type="text" className="form-control" id="especie" placeholder="Cão, Gato, etc." /></div>
                    <div className="mb-3"><label htmlFor="sexo" className="form-label">Sexo</label><select className="form-select" id="sexo"><option value="">Selecione</option><option value="macho">Macho</option><option value="femea">Fêmea</option></select></div>
                    <div className="mb-3"><label htmlFor="peso" className="form-label">Peso (kg)</label><input type="number" className="form-control" id="peso" placeholder="Peso do animal" /></div>
                    <div className="mb-3"><label htmlFor="idade" className="form-label">Idade</label><input type="text" className="form-control" id="idade" placeholder="Ex: 2 anos" /></div>
                    <div className="mb-3"><label htmlFor="comida_favorita" className="form-label">Comida Favorita</label><input type="text" className="form-control" id="comida_favorita" placeholder="Comida favorita do animal" /></div>
                    <div className="mb-3"><label htmlFor="descricao" className="form-label">Descrição</label><textarea className="form-control" id="descricao" rows="3" placeholder="Descreva o temperamento e características"></textarea></div>
                    <div className="mb-3"><label htmlFor="imagem" className="form-label">Imagem</label><input className="form-control" type="file" id="imagem" /></div>
                    <button type="submit" className="btn btn-dark w-100">Cadastrar</button>
                  </form>
                </div>
              </div>
            </div>

            {/* LISTA DE ANIMAIS CADASTRADOS (col-md-7) */}
            <div className="col-12 col-md-7">
              <div className="card shadow-sm rounded-3 border-0">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-bag-heart me-2 fs-4 text-danger"></i>
                    <h5 className="card-title user_title mb-0">Animais Cadastrados</h5>
                  </div>
                  <div className="adoption-list">
                    {animals.length === 0 ? (
                      <p className="text-muted">Nenhum animal cadastrado.</p>
                    ) : (
                      animals.map((animal) => (
                        <AdoptionCardAdmin
                          key={animal.id}
                          animal={animal}
                          onDeleteClick={handleDeleteClick}
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

      {/* RENDERIZAÇÃO DO MODAL DE DELEÇÃO */}
      <DeleteConfirmationModal
        show={showDeleteModal}
        onClose={handleCloseDeleteModal}
        onDelete={handleConfirmDelete}
        itemName={animalToDelete ? animalToDelete.animalName : ""}
      />
    </>
  );
}

export default AdminAnimals;
