import { useState, useEffect } from "react";
import "./AdminAnimals.css";
import AdoptionCardAdmin from "../../../components/AdminComponents/AdoptionCardAdmin/AdoptionCardAdmin";
import DeleteConfirmationModal from "../../../components/AdminComponents/DeleteComponentModal/DeleteComponentModal";
import animalService from "../../../services/animalService";


function AdminAnimals() {

  const [animals, setAnimals] = useState([]);
  const [saving, setSaving] = useState(true);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    animal_name: '',
    animal_age: '',
    animal_sex: '',
    animal_status: '',
    animal_weight: '',
    animal_favorite_food: '',
    animal_description: '',
    animal_category: ''
  })

  function onChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function onSubmit(e) {
    e.preventDefault();
    setError('');
    setSaving(true);

    // validaçaõ de data
    // if(form.data_nas && !/^\d{4}-\d{2}-\d{2}$/.test(form.data_nas)){
    //   return setError('Data de nascimento inválida')
    // }

    const admin_user_id=1;
    const payload = {
      animal_name: form.animal_name,
      animal_age: form.animal_age,
      animal_sex: form.animal_sex,
      animal_status: form.animal_status,
      animal_weight: form.animal_weight,
      animal_favorite_food: form.animal_favorite_food,
      animal_category: form.animal_category,
      animal_description: form.animal_description,
      fk_admin_user_id: admin_user_id
    }

    try{
      setSaving(true);
      animalService.createAnimal(payload);

      alert("Animal cadastrado com sucesso :)");

    } catch (error) {
      setError(error.message);

    } finally{
      setSaving(false);
    }
  }


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
                    {error && <p className="alert alert-danger">{error}</p>}
                  </div>

                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <label htmlFor="animal_name" className="form-label">Nome</label>
                      <input
                        type="text"
                        name="animal_name"
                        id="animal_name"
                        value={form.animal_name}
                        onChange={onChange}
                        className="form-control"
                        placeholder="Nome do animal"
                       
                         />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="animal_age" className="form-label">Idade</label>
                      <input
                        type="text"
                        name="animal_age"
                        id="animal_age"
                        value={form.animal_age}
                        onChange={onChange}
                        className="form-control"
                        placeholder="Ex: 2 anos" 
                         />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="animal_sex" className="form-label">Sexo</label>
                      <select
                       className="form-select" 
                       name="animal_sex" 
                       id="animal_sex" 
                       value={form.animal_sex} 
                       onChange={onChange}
                       >
                        <option value="">Selecione</option>
                        <option value="MALE">Macho</option>
                        <option value="FEMALE">Fêmea</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="animal_status" className="form-label">Status</label>
                      <select
                       className="form-select" 
                       name="animal_status" 
                       id="animal_status"
                       value={form.animal_status} 
                       onChange={onChange}
                       >
                        <option value="">Selecione</option>
                        <option value="AVAILABLE"> Disponível para adoção </option>
                        <option value="IN_PROCESS_ADOPTION"> Em processo de adoção </option>
                        <option value="ADOPTED"> Adotado </option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="animal_weight" className="form-label">Peso (Kg)</label>
                      <input
                        type="text"
                        name="animal_weight"
                        id="animal_weight"
                        value={form.animal_weight}
                        onChange={onChange}
                        className="form-control"
                        placeholder="Ex: 2Kg" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="animal_favorite_food" className="form-label"> Comida Favorita </label>
                      <input
                        type="text"
                        name="animal_favorite_food"
                        id="animal_favorite_food"
                        value={form.animal_favorite_food}
                        onChange={onChange}
                        className="form-control"
                        placeholder="Ex: Ração de carne" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="animal_category" className="form-label"> Categoria </label>
                      <select
                       className="form-select"
                       name="animal_category" 
                       id="animal_category"
                       value={form.animal_category} 
                       onChange={onChange}
                       >
                        <option value="">Selecione</option>
                        <option value="DOG"> Cachorrinho </option>
                        <option value="CAT"> Gatinho </option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="animal_description" className="form-label"> Breve Descrição </label>
                      <textarea
                        type="text"
                        name="animal_description"
                        id="animal_description"
                        value={form.animal_description}
                        onChange={onChange}
                        className="form-control"
                        placeholder="Descreva o temperamento e características. Ex: 'Cão leal e protetor, ideal para casas com quintal.'">
                      </textarea>
                    </div>



                    {/* <div className="mb-3">
                      <label htmlFor="imagem" className="form-label">Imagem</label>
                      <input
                        className="form-control"
                        type="file"
                        id="imagem" />
                    </div> */}

                    <button type="submit" className="btn btn-dark w-100"  >
                      {saving ? 'Cadastrar' : 'Cadastrando...'}
                    </button>
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
