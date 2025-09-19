// Arquivo: /src/components/AnimaListComponents/AnimalCardsForAdoption/AnimalCardsForAdoption.jsx

import "./AnimalCardForAdoption.css";
import CustomBtn from "../../CustomBtn/CustomBtn";
import React, { useState } from "react";

// O card agora é mais simples e recebe tudo via props
function AnimalCardsForAdoption({
    id,
    animalName,
    animalAge,
    animalCategory,
    photo,
    isLoggedIn,         // Sabe se o usuário está logado
    isFavorited,        // Recebe se JÁ É um favorito
    favoriteId,         // Recebe o ID do favorito (para remover)
    onToggleFavorite    // Recebe a FUNÇÃO para ser chamada no clique
}) {
    const [isLoading, setIsLoading] = useState(false);

    const handleFavoriteClick = async () => {
        setIsLoading(true);
        try {
            // Apenas chama a função que veio do pai
            await onToggleFavorite(id, isFavorited, favoriteId);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section>
            <div className="card mb-5">
                <img src={photo} className="card-img-top" alt={animalName} />
                <div className="card-body">
                    <h5 className="card-title">{animalName}</h5>
                    <p className="card-text"> Idade: {animalAge}</p>
                    <p className="card-text"> Espécie: {animalCategory === "DOG" ? "Cachorro" : "Gato"}</p>
                </div>
                <div className="card-buttons">
                    {/* O botão de favoritar só aparece se o usuário estiver logado */}
                    {isLoggedIn && (
                        <CustomBtn
                            label="Favoritar"
                            icon={isFavorited ? "bi bi-star-fill" : "bi bi-star"}
                            className={`custom-btn-favoritar ${isFavorited ? "favorited" : ""}`}
                            onClick={handleFavoriteClick}
                            disabled={isLoading}
                        />
                    )}
                    <CustomBtn
                        label="Ver Detalhes"
                        icon="bi bi-eye"
                        route={`/detalhes-do-animal/${id}`}
                    />
                </div>
            </div>
        </section>
    );
}

export default AnimalCardsForAdoption;