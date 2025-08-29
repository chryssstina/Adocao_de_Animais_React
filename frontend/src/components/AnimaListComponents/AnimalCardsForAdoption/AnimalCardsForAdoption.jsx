import "./AnimalCardForAdoption.css";
import CustomBtn from "../../CustomBtn/CustomBtn";
import UserAdoptModal from "../UserAdoptModal/UserAdoptModal";
import React, { useState, useEffect } from "react"; // 👈 Adicionado useEffect

// --- SIMULAÇÃO DE UMA CHAMADA DE API ---
// Esta função simula o envio de dados para um servidor.
// Ela espera 1.5 segundos e depois resolve ou rejeita a Promise.
const fakeApiCall = (data) => {
  console.log("Iniciando chamada à API com os dados:", data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simula 75% de chance de sucesso e 25% de erro
      if (Math.random() > 0.25) {
        console.log("API: Sucesso!");
        resolve({ status: "ok", message: "Adoption request received!" });
      } else {
        console.log("API: Erro!");
        reject(new Error("Falha na comunicação com o servidor."));
      }
    }, 1500); // 1.5 segundos de delay
  });
};
// -----------------------------------------

function AnimalCardsForAdoption({
  id,
  animalName,
  animalAge,
  animalCategory,
  photo,
}) {
  const [showModal, setShowModal] = useState(false);
  const [adoptionRequest, setAdoptionRequest] = useState(null);
  const [requestStatus, setRequestStatus] = useState("idle"); // 'idle', 'loading', 'success', 'error'

  // useEffect para "observar" a mudança em adoptionRequest e disparar a API
  useEffect(() => {
    // Só executa se houver um pedido para ser enviado
    if (adoptionRequest) {
      const submitRequest = async () => {
        setRequestStatus("loading"); // Muda a UI para "carregando"
        try {
          // Adiciona o ID do animal ao objeto de requisição
          const requestData = { ...adoptionRequest, animalId: id };

          // Chama a nossa API (simulada)
          await fakeApiCall(requestData);

          setRequestStatus("success"); // Muda a UI para "sucesso"
        } catch (error) {
          console.error("Erro ao enviar o pedido:", error);
          setRequestStatus("error"); // Muda a UI para "erro"
        }
      };

      submitRequest();
    }
  }, [adoptionRequest, id]); // Dependências do useEffect

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Função para renderizar o conteúdo dos botões de acordo com o status
  const renderCardButtons = () => {
    switch (requestStatus) {
      case "loading":
        return (
          <div className="d-flex align-items-center justify-content-center p-2">
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <span className="ms-2">Enviando...</span>
          </div>
        );
      case "success":
        return (
          <div className="text-success p-2 text-center">
            <strong>Pedido enviado com sucesso!</strong>
          </div>
        );
      case "error":
        return (
          <div className="text-danger p-2 text-center">
            <p className="mb-1">Ops! Ocorreu um erro.</p>
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => setRequestStatus("idle")} // Reseta para o estado inicial
            >
              Tentar Novamente
            </button>
          </div>
        );
      case "idle":
      default:
        return (
          <>
            <CustomBtn
              label="Tenho interesse"
              className="custom-btn-tenho-interesse"
              onClick={handleOpenModal}
            />
            <CustomBtn
              route={`/detalhes-do-animal/${id}`}
              className="bi bi-eye"
            />
          </>
        );
    }
  };

  return (
    <section>
      <div className="card custom-card mb-5">
        <img src={photo} className="card-img-top" alt={animalName} />
        <div className="card-body">
          <h5 className="card-title">{animalName}</h5>
          <p className="card-text"> Idade: {animalAge}</p>
          <p className="card-text"> Categoria: {animalCategory}</p>
        </div>
        <div className="card-buttons">{renderCardButtons()}</div>
      </div>
      <UserAdoptModal
        show={showModal}
        onClose={handleCloseModal}
        onSave={(newRequest) => {
          console.log("Pedido de adoção recebido do modal:", newRequest);
          setAdoptionRequest(newRequest); // Guarda o pedido, o que vai disparar o useEffect
          handleCloseModal(); // Fecha o modal imediatamente
        }}
        animalName={animalName}
      />
    </section>
  );
}

export default AnimalCardsForAdoption;