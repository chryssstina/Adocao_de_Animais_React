// Arquivo: /src/pages/AnimalList/AnimalList.jsx

import { useState, useEffect, useCallback } from "react"; // Adicione useCallback
import './AnimalList.css';
import AnimalCardsForAdoption from "../../components/AnimaListComponents/AnimalCardsForAdoption/AnimalCardsForAdoption";
import animalService from "../../services/animalService";
import favoriteService from "../../services/favoriteService";

function AnimalList() {
    // ... (seus estados continuam os mesmos)
    const [allAnimals, setAllAnimals] = useState([]);
    const [filteredAnimals, setFilteredAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterCategory, setFilterCategory] = useState("Todos");
    
    const isLoggedIn = !!localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    // Usamos useCallback para otimizar e evitar recriações desnecessárias da função
    const getEnrichedAnimals = useCallback(async () => {
        try {
            const animalsData = await animalService.getAllAnimals();
            const availableAnimals = animalsData.filter(
                (animal) => animal.animal_status === 'AVAILABLE'
            );

            if (!isLoggedIn || !user?.user_id) {
                return availableAnimals; // Retorna animais sem dados de favorito
            }
            
            const userFavorites = await favoriteService.getAllFavoritesByUser(user.user_id);
            const favoriteAnimalIds = new Set(userFavorites.map(fav => fav.animal.animal_id));
            
            const enrichedAnimals = availableAnimals.map(animal => ({
                ...animal,
                isFavorited: favoriteAnimalIds.has(animal.animal_id),
                favoriteId: userFavorites.find(fav => fav.animal.animal_id === animal.animal_id)?.favorite_id || null
            }));

            return enrichedAnimals;

        } catch (error) {
            // Propaga o erro para quem chamou a função
            throw new Error("Erro ao carregar animais: " + error.message);
        }
    }, [isLoggedIn, user?.user_id]); // Dependências da função


    useEffect(() => {
        const loadInitialData = async () => {
            setLoading(true);
            setError(null);
            try {
                const enrichedData = await getEnrichedAnimals();
                setAllAnimals(enrichedData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadInitialData();
    }, [getEnrichedAnimals]); // A dependência agora é a própria função


    const handleToggleFavorite = async (animalId, isFavorited, favoriteId) => {
        try {
            if (isFavorited) {
                await favoriteService.removeFavorite(favoriteId);
            } else {
                const payload = { fk_animal_id: animalId, fk_user_id: user.user_id };
                await favoriteService.addFavorite(payload);
            }
            // ✨ PASSO 3: USAR A FUNÇÃO AQUI TAMBÉM ✨
            const updatedEnrichedAnimals = await getEnrichedAnimals();
            setAllAnimals(updatedEnrichedAnimals);

        } catch (err) {
            console.error("Erro ao favoritar:", err);
            alert("Ocorreu um erro ao atualizar o favorito.");
        }
    };
    
    // ... (o useEffect de filtros e o return continuam os mesmos)
    useEffect(() => {
        let result = allAnimals;
        if (filterCategory !== "Todos") {
            result = result.filter(animal => animal.animal_category === filterCategory);
        }
        if (searchTerm.trim() !== "") {
            result = result.filter(animal =>
                animal.animal_name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        setFilteredAnimals(result);
    }, [allAnimals, searchTerm, filterCategory]);

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
                        filteredAnimals.length > 0 ? (
                            filteredAnimals.map((animal) => (
                                <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center" key={animal.animal_id}>
                                    <AnimalCardsForAdoption
                                        id={animal.animal_id}
                                        animalName={animal.animal_name}
                                        animalAge={animal.animal_age}
                                        animalCategory={animal.animal_category}
                                        // photo={animal.animal_photo}
                                        
                                        // 6. PASSA AS NOVAS PROPS PARA O CARD
                                        isLoggedIn={isLoggedIn}
                                        isFavorited={animal.isFavorited}
                                        favoriteId={animal.favoriteId}
                                        onToggleFavorite={handleToggleFavorite}
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center mt-4">
                                <h5>Nenhum pet encontrado com esses critérios.</h5>
                            </div>
                        )
                    )}
                </div>
            </main>
        </>
    );
}

export default AnimalList;