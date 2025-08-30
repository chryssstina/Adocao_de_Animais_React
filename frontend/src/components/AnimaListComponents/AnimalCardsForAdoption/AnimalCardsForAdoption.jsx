import "./AnimalCardForAdoption.css";
import CustomBtn from "../../CustomBtn/CustomBtn";
import React, { useState } from "react"; // 👈 Não precisamos mais do useEffect aqui

// --- NOVA SIMULAÇÃO DE API PARA FAVORITAR ---
// Simula uma chamada rápida para adicionar/remover um favorito.
const fakeFavoriteApiCall = (animalId, shouldBeFavorited) => {
  console.log(
    `API: ${shouldBeFavorited ? "Adicionando" : "Removendo"} favorito para o animal ID:`,
    animalId
  );
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simula um erro ocasional
      if (Math.random() > 0.1) { // 90% de chance de sucesso
        console.log("API: Sucesso!");
        resolve({ status: "ok" });
      } else {
        console.log("API: Erro!");
        reject(new Error("Falha ao atualizar o favorito."));
      }
    }, 700); // Delay menor, pois favoritar é uma ação rápida
  });
};
// -----------------------------------------

function AnimalCardsForAdoption({
  id,
  animalName,
  animalAge,
  animalCategory,
  photo,
  // Opcional: receber o estado inicial do componente pai no futuro
  initialIsFavorited = false, 
}) {
  // --- ESTADOS SIMPLIFICADOS ---
  const [isFavorited, setIsFavorited] = useState(initialIsFavorited);
  const [isLoading, setIsLoading] = useState(false);

  // --- LÓGICA DE CLIQUE PARA FAVORITAR ---
  const handleFavoriteClick = async () => {
    setIsLoading(true); // Desabilita o botão

    try {
      // Chama a API com o estado desejado (o inverso do atual)
      await fakeFavoriteApiCall(id, !isFavorited);
      // Se a API funcionou, atualiza o estado local
      setIsFavorited((currentValue) => !currentValue);
    } catch (error) {
      console.error(error);
      // Poderíamos mostrar uma notificação de erro para o usuário aqui
      alert("Não foi possível favoritar o pet. Tente novamente.");
    } finally {
      setIsLoading(false); // Reabilita o botão, independente de sucesso ou erro
    }
  };

  return (
    <section>
      <div className="card mb-5">
        <img src={photo} className="card-img-top" alt={animalName} />
        <div className="card-body">
          <h5 className="card-title">{animalName}</h5>
          <p className="card-text"> Idade: {animalAge}</p>
          <p className="card-text"> Categoria: {animalCategory}</p>
        </div>
        <div className="card-buttons">
          {/* --- BOTÃO DE FAVORITAR DINÂMICO --- */}
          <CustomBtn
              label="Favoritar"
            // O ícone muda com base no estado 'isFavorited'
            icon={isFavorited ? "bi bi-star-fill" : "bi bi-star"}
            // A classe também muda para podermos estilizar o botão favoritado
            className={`custom-btn-favoritar ${isFavorited ? "favorited" : ""}`}
            onClick={handleFavoriteClick}
            // Desabilita o botão durante a chamada da API
            disabled={isLoading}
          />
          <CustomBtn
              label="Ver Detalhes"
              icon="bi bi-eye"
              route={`/detalhes-do-animal/${id}`}
          />
        </div>
      </div>
      {/* O Modal foi removido, não é mais necessário aqui */}
    </section>
  );
}

export default AnimalCardsForAdoption;