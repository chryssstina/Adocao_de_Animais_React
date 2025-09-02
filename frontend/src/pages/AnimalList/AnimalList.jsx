import { useState, useEffect } from "react";
import './AnimalList.css';
import AnimalCardsForAdoption from "../../components/AnimaListComponents/AnimalCardsForAdoption/AnimalCardsForAdoption";
import animalService from "../../services/animalService";

function AnimalList() {
    
    const [allAnimals, setAllAnimals] = useState([]); // Estado para guardar todos os animais carregados do banco
    const [filteredAnimals, setFilteredAnimals] = useState([]); // Estado para a lista filtrada de animais
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // --- NOVOS ESTADOS PARA OS FILTROS ---
    const [searchTerm, setSearchTerm] = useState("");
    const [filterCategory, setFilterCategory] = useState("Todos"); // 'Todos', 'Cachorro', 'Gato'


    async function load(){
        try{
            setLoading(true);
            setError(null);
            const data = await animalService.getAllAnimals();
            // setAllAnimals(data);

            //EXIBE APENAS OS ANIMAIS MARCADOS COMO DISPONÍVEL NO BD
            const availableAnimals = data.filter(
                (animal) => animal.animal_status === 'AVAILABLE'
            );
            setAllAnimals(availableAnimals);
        }catch(error){
            setError("Erro ao carregar animais:" +error.message);
        }finally{
            setLoading(false);

        }
    }

    useEffect(() => {
        load();
    },[])


    // --- EFEITO PARA APLICAR OS FILTROS ---
    // Roda sempre que a lista original, o termo de busca ou a categoria mudarem
    useEffect(() => {
        let result = allAnimals;

        // 1. Filtro por categoria
        if (filterCategory !== "Todos") {
            result = result.filter(
                animal => animal.animal_category === filterCategory);
        }

        // 2. Filtro por nome
        if (searchTerm.trim() !== "") {
            result = result.filter(animal =>
                animal.animal_name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredAnimals(result);

    }, [allAnimals, searchTerm, filterCategory]); // Dependências que disparam o efeito

    return (
        <>
            <main className="animal-adoption-main">
                <div className="custom-title">
                    <h1>Pets para adoção</h1>
                    <p>Conheça alguns dos nossos amigos de quatro patas que estão disponíveis para adoção.</p>
                </div>

                {/* ======================= ÁREA DE FILTROS ======================= */}
                <div className="container mb-4 filter-container">
                    <div className="row g-3 justify-content-center align-items-center">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Buscar por nome..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <select
                                className="form-select"
                                value={filterCategory}
                                onChange={(e) => setFilterCategory(e.target.value)}
                            >
                                <option value="Todos">Todas as categorias</option>
                                <option value="DOG">Apenas Cachorros</option>
                                <option value="CAT">Apenas Gatos</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* ============================================================= */}

                <div className="row custom-row-animal-adoption justify-content-center">
                    {loading ? (
                        <p>Carregando animais disponíveis</p>
                    ) : (
                        // Renderiza a lista filtrada ou uma mensagem de "não encontrado"
                        filteredAnimals.length > 0 ? (
                            filteredAnimals.map((animal) => (
                                <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center" key={animal.animal_id}>
                                    <AnimalCardsForAdoption
                                        id={animal.animal_id}
                                        animalName={animal.animal_name}
                                        animalAge={animal.animal_age}
                                        animalCategory={animal.animal_category}
                                        photo={animal.photo}
                                        animalWeight={animal.animal_weight}
                                        favoriteFood={animal.animal_favorite_food}
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center mt-4">
                                <h5>Nenhum pet encontrado com esses critérios.</h5>
                                <p>Tente alterar sua busca ou filtros.</p>
                            </div>
                        )
                    )}
                </div>
            </main>
        </>
    );
}

export default AnimalList;