import { useState, useEffect } from "react";
import './AnimalList.css';
import AnimalCardsForAdoption from "../../components/AnimaListComponents/AnimalCardsForAdoption/AnimalCardsForAdoption";
import { animal_adoption_mock as mockData } from "../../data/animal_adoption_mock";

function AnimalList() {
    // Estado para guardar todos os animais carregados do mock
    const [allAnimals, setAllAnimals] = useState([]);
    // Estado para a lista de animais que será de fato exibida na tela (já filtrada)
    const [filteredAnimals, setFilteredAnimals] = useState([]);
    
    const [loading, setLoading] = useState(true);

    // --- NOVOS ESTADOS PARA OS FILTROS ---
    const [searchTerm, setSearchTerm] = useState("");
    const [filterCategory, setFilterCategory] = useState("Todos"); // 'Todos', 'Cachorro', 'Gato'

    // Efeito para carregar os dados iniciais do mock (apenas uma vez)
    useEffect(() => {
        setTimeout(() => {
            // Pré-filtramos para pegar apenas animais disponíveis para adoção
            const availableAnimals = mockData.filter(
                (animal) => animal.statusAdoption === 'disponivel'
            );
            setAllAnimals(availableAnimals);
            setLoading(false);
        }, 1000);
    }, []);

    // --- EFEITO PARA APLICAR OS FILTROS ---
    // Roda sempre que a lista original, o termo de busca ou a categoria mudarem
    useEffect(() => {
        let result = allAnimals;

        // 1. Filtro por categoria
        if (filterCategory !== "Todos") {
            result = result.filter(animal => animal.animalCategory === filterCategory);
        }

        // 2. Filtro por termo de busca (nome)
        if (searchTerm.trim() !== "") {
            result = result.filter(animal =>
                animal.animalName.toLowerCase().includes(searchTerm.toLowerCase())
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
                                <option value="Cachorro">Apenas Cachorros</option>
                                <option value="Gato">Apenas Gatos</option>
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
                                <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center" key={animal.id}>
                                    <AnimalCardsForAdoption
                                        id={animal.id}
                                        animalName={animal.animalName}
                                        animalAge={animal.animalAge}
                                        animalCategory={animal.animalCategory}
                                        photo={animal.photo}
                                        // Passando todas as props para manter compatibilidade
                                        animalWeight={animal.animalWeight}
                                        favoriteFood={animal.favoriteFood}
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