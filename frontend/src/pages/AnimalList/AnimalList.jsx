// Arquivo: /src/pages/AnimalList/AnimalList.jsx

import { useState, useEffect } from "react";
import './AnimalList.css';
import AnimalCardsForAdoption from "../../components/AnimaListComponents/AnimalCardsForAdoption/AnimalCardsForAdoption";
import animalService from "../../services/animalService";
import favoriteService from "../../services/favoriteService"; // 1. Importe o service de favoritos

function AnimalList() {
    const [allAnimals, setAllAnimals] = useState([]);
    const [filteredAnimals, setFilteredAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterCategory, setFilterCategory] = useState("Todos");
    
    // 2. Precisamos saber se o usuário está logado para o botão de favoritar
    const isLoggedIn = !!localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user")); // Pegamos os dados do usuário

    useEffect(() => {
        const loadAnimalsAndFavorites = async () => {
            try {
                setLoading(true);
                setError(null);

                // Busca TODOS os animais disponíveis
                const animalsData = await animalService.getAllAnimals();
                const availableAnimals = animalsData.filter(
                    (animal) => animal.animal_status === 'AVAILABLE'
                );

                // Se o usuário não estiver logado, apenas mostramos os animais
                if (!isLoggedIn) {
                    setAllAnimals(availableAnimals);
                    return;
                }

                // 3. Se estiver logado, BUSCA OS FAVORITOS DELE
                const userFavorites = await favoriteService.getAllFavoritesByUser(user.user_id);
                // Criamos um set (conjunto) com os IDs dos animais favoritados para uma busca rápida
                const favoriteAnimalIds = new Set(
                    userFavorites.map(fav => fav.animal.animal_id)
                );

                // 4. COMBINA AS DUAS INFORMAÇÕES
                // Adiciona uma propriedade `isFavorited` em cada animal
                const enrichedAnimals = availableAnimals.map(animal => ({
                    ...animal,
                    isFavorited: favoriteAnimalIds.has(animal.animal_id),
                    // Guarda o ID do favorito para podermos remover depois
                    favoriteId: userFavorites.find(fav => fav.animal.animal_id === animal.animal_id)?.favorite_id || null
                }));

                setAllAnimals(enrichedAnimals);

            } catch (error) {
                setError("Erro ao carregar animais: " + error.message);
            } finally {
                setLoading(false);
            }
        };

        loadAnimalsAndFavorites();
    }, [isLoggedIn, user?.user_id]); // Roda o efeito se o status de login mudar

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


    // 5. FUNÇÃO PARA ADICIONAR/REMOVER FAVORITO
    const handleToggleFavorite = async (animalId, isFavorited, favoriteId) => {
        try {
            if (isFavorited) {
                // Se já é favorito, REMOVE
                await favoriteService.removeFavorite(favoriteId);
            } else {
                // Se não é favorito, ADICIONA
                const payload = { fk_animal_id: animalId, fk_user_id: user.user_id };
                await favoriteService.addFavorite(payload);
            }
            // Recarrega os dados para atualizar o estado de todos os cards
            const updatedAnimals = await animalService.getAllAnimals();
            const availableAnimals = updatedAnimals.filter(a => a.animal_status === 'AVAILABLE');
            const userFavorites = await favoriteService.getAllFavoritesByUser(user.user_id);
            const favoriteAnimalIds = new Set(userFavorites.map(fav => fav.animal.animal_id));
            const enrichedAnimals = availableAnimals.map(animal => ({
                ...animal,
                isFavorited: favoriteAnimalIds.has(animal.animal_id),
                favoriteId: userFavorites.find(fav => fav.animal.animal_id === animal.animal_id)?.favorite_id || null
            }));
            setAllAnimals(enrichedAnimals);

        } catch (err) {
            console.error("Erro ao favoritar:", err);
            alert("Ocorreu um erro ao atualizar o favorito.");
        }
    };


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