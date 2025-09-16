import { useState, useEffect } from "react";
import "./AdminAnimals.css";
import AdoptionCardAdmin from "../../../components/AdminComponents/AdoptionCardAdmin/AdoptionCardAdmin";
import DeleteConfirmationModal from "../../../components/AdminComponents/DeleteComponentModal/DeleteComponentModal";
import animalService from "../../../services/animalService";
import { useNavigate, useParams } from "react-router-dom";

function AdminAnimals() {

  //para editar os dados do animal 
  const { id } = useParams()
  const editing = Boolean(id)

  const [animals, setAnimals] = useState([]);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [editingAnimalById, setEditingAnimalById] = useState(null);


  const [form, setForm] = useState({
    animal_name: '',
    animal_age: '',
    animal_sex: '',
    animal_status: '',
    animal_weight: '',
    animal_favorite_food: '',
    animal_description: '',
    animal_category: '',
    fk_admin_user_id: ''
  });

  //carrega a lista de animais cadastrados
  async function loadAnimals() {
    try {
      setLoading(true);
      setError({});
      const data = await animalService.getAllAnimals();
      setAnimals(data);
    } catch (error) {
      setError("Erro ao carregar animais:" + error.message);
    } finally {
      setLoading(false);

    }
  }

  useEffect(() => {
    loadAnimals();
  }, []);

  function validateForm() {
    const newErrors = {}; //agrupa os erros e exibe nos campos obgrigatórios que não foram preenchidos

    if (!form.animal_name.trim()) newErrors.animal_name = "Nome é obrigatório";
    if (!form.animal_age.trim()) newErrors.animal_age = "Idade é obrigatória";
    if (!form.animal_sex) newErrors.animal_sex = "Selecione o sexo do animal";
    if (!form.animal_status) newErrors.animal_status = "Selecione o status do animal";
    if (!form.animal_weight.trim()) newErrors.animal_weight = "Peso é obrigatório";
    if (!form.animal_favorite_food.trim()) newErrors.animal_favorite_food = "Comida favorita é obrigatória";
    if (!form.animal_category) newErrors.animal_category = "Selecione a categoria do animal";
    if (!form.animal_description.trim()) newErrors.animal_description = "Descrição é obrigatória";

    return newErrors;
  }

  function onChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

   // função de edição
  const handleEditClick = (animal) => {
    //console.log("Animal para editar:", animal); 

    setForm({
      animal_name: animal.animal_name,
      animal_age: animal.animal_age,
      animal_sex: animal.animal_sex,
      animal_status: animal.animal_status,
      animal_weight: animal.animal_weight,
      animal_favorite_food: animal.animal_favorite_food,
      animal_category: animal.animal_category,
      animal_description: animal.animal_description,
      fk_admin_user_id: 1,
    });

    setEditingAnimalById(animal.animal_id);
  };



  const onSubmit = async (e) => {
    e.preventDefault();
    setError({}); // limpa erros anteriores
    const validationErrors = validateForm(); //recebe todos os erros

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    const payload = {
      animal_name: form.animal_name,
      animal_age: form.animal_age,
      animal_sex: form.animal_sex,
      animal_status: form.animal_status,
      animal_weight: form.animal_weight,
      animal_favorite_food: form.animal_favorite_food,
      animal_category: form.animal_category,
      animal_description: form.animal_description,
      fk_admin_user_id: 1
    }

    try {
      setSaving(true);
      if (editingAnimalById) {
        // Edição
        const updatedAnimal = await animalService.updateAnimal(editingAnimalById, payload);
        console.log(updatedAnimal);

        // Atualiza a lista local
        setAnimals(prev => prev.map(a => a.animal_id === editingAnimalById ? updatedAnimal : a));
        alert("Animal atualizado com sucesso :)");
      } else {
        // Criação
        const newAnimal = await animalService.createAnimal(payload);
        setAnimals(prev => [...prev, newAnimal]);
        alert("Animal cadastrado com sucesso :)");
      }
      // Limpa formulário e reseta edição
      setForm({
        animal_name: '',
        animal_age: '',
        animal_sex: '',
        animal_status: '',
        animal_weight: '',
        animal_favorite_food: '',
        animal_description: '',
        animal_category: ''
      });
      setEditingAnimalById(null);
    } catch (error) {
      setError(error.message);
    } finally {
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
  const handleConfirmDelete = async () => {
    if (!animalToDelete) return;

    try {
      await animalService.deleteAnimal(animalToDelete.animal_id);
      setAnimals(prev => prev.filter(a => a.animal_id !== animalToDelete.animal_id));
      handleCloseDeleteModal();

    } catch (err) {
      console.error("Erro ao excluir animal:", err);
      alert("Erro ao excluir animal. Tente novamente.");
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
                    {/* {error && <p className="alert alert-danger">{error}</p>} */}
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
                      {error.animal_name && <p className="text-danger">{error.animal_name}</p>}

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
                      {error.animal_age && <p className="text-danger">{error.animal_age}</p>}
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
                      {error.animal_sex && <p className="text-danger">{error.animal_sex}</p>}
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
                      {error.animal_status && <p className="text-danger">{error.animal_status}</p>}
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
                        placeholder="Ex: 2Kg"
                      />
                      {error.animal_weight && <p className="text-danger">{error.animal_weight}</p>}
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
                        placeholder="Ex: Ração de carne"
                      />
                      {error.animal_favorite_food && <p className="text-danger">{error.animal_favorite_food}</p>}
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
                      {error.animal_category && <p className="text-danger">{error.animal_category}</p>}
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
                        placeholder="Descreva o temperamento e características. Ex: 'Cão leal e protetor, ideal para casas com quintal.'"
                      >
                      </textarea>
                      {error.animal_description && <p className="text-danger">{error.animal_description}</p>}
                    </div>



                    {/* <div className="mb-3">
                      <label htmlFor="imagem" className="form-label">Imagem</label>
                      <input
                        className="form-control"
                        type="file"
                        id="imagem" />
                    </div> */}

                    <button type="submit" className="btn btn-dark w-100"  >
                      {saving ? 'Salvando...' : 'Salvar'}
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
                          key={animal.animal_id}
                          animal={animal}
                          onEditClick={handleEditClick}
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
        itemName={animalToDelete ? animalToDelete.animal_name : ""}
      />
    </>
  );
}

export default AdminAnimals;
