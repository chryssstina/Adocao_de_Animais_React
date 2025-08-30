import './BasicAnimalInfo.css';
import CustomBtn from '../CustomBtn/CustomBtn';
import UserAdoptModal from '../AnimaListComponents/UserAdoptModal/UserAdoptModal';
import React, { useState, useEffect } from 'react';

// --- SIMULAÇÃO DE UMA CHAMADA DE API ---
// É a mesma função que usamos antes. O ideal seria movê-la para um arquivo separado (ex: /services/api.js)
const fakeApiCall = (data) => {
  console.log("Iniciando chamada à API com os dados:", data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.25) {
        resolve({ status: "ok", message: "Adoption request received!" });
      } else {
        reject(new Error("Falha na comunicação com o servidor."));
      }
    }, 1500);
  });
};
// -----------------------------------------

function BasicAnimalInfo({ id, animalName, animalAge, animalWeight, favoriteFood, animalCategory, photo, description, route }) {

    // --- 3. ADICIONAR OS ESTADOS ---
    const [showModal, setShowModal] = useState(false);
    const [adoptionRequest, setAdoptionRequest] = useState(null);
    const [requestStatus, setRequestStatus] = useState("idle"); // 'idle', 'loading', 'success', 'error'

    // --- 4. ADICIONAR O useEffect PARA A API ---
    useEffect(() => {
        if (adoptionRequest) {
            const submitRequest = async () => {
                setRequestStatus("loading");
                try {
                    const requestData = { ...adoptionRequest, animalId: id };
                    await fakeApiCall(requestData);
                    setRequestStatus("success");
                } catch (error) {
                    console.error("Erro ao enviar o pedido:", error);
                    setRequestStatus("error");
                }
            };
            submitRequest();
        }
    }, [adoptionRequest, id]);

    // Funções para controlar o modal
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    // --- 5. FUNÇÃO PARA RENDERIZAR O BOTÃO DE ADOÇÃO CONDICIONALMENTE ---
    const renderAdoptButton = () => {
        switch (requestStatus) {
            case "loading":
                return (
                    <button className="btn custom-btn-class" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span className="ms-2">Enviando...</span>
                    </button>
                );
            case "success":
                return (
                    <div className="btn custom-btn-class">
                        <strong className='me-2'>Pedido enviado com sucesso!</strong>
                        <i class="bi bi-heart-fill"></i>
                    </div>
                );
            case "error":
                return (
                    <div className="alert alert-danger p-2 text-center">
                        <p className="mb-1 small">Ops! Ocorreu um erro.</p>
                        <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => setRequestStatus("idle")} // Reseta para tentar novamente
                        >
                            Tentar Novamente
                        </button>
                    </div>
                );
            case "idle":
            default:
                return (
                    <CustomBtn
                        label='Tenho interesse'
                        icon="bi bi-heart"
                        onClick={handleOpenModal} // Ação de abrir o modal
                    />
                );
        }
    };

    return (
            <main className="main-basic-animal-info">
                <img src={photo} alt={animalName} />
                <div className="left-info">
                    <h1 className="card-title"><i className="bi bi-hearts"></i>{animalName}</h1>

                    <div className="container-basic-animal-info">
                        <h3 className="card-title custom-title-basic-animal">Informações básicas</h3>
                        <p className="card-text">Nome: {animalName}</p>
                        <p className="card-text">Idade: {animalAge}</p>
                        <p className="card-text">Peso: {animalWeight}</p>
                        <p className="card-text">Comida favorita: {favoriteFood}</p>
                        <p className="card-text">Categoria: {animalCategory}</p>
                    </div>

                    <div className="container-basic-animal-info">
                        <h3 className="card-title custom-title-basic-animal">Sobre {animalName}</h3>
                        <p>{description}</p>
                    </div>

                    {/* --- 6. RENDERIZAR OS BOTÕES --- */}
                    <div className='d-flex align-items-center'>
                        {renderAdoptButton()}
                        <CustomBtn
                            label='Voltar'
                            icon="bi bi-arrow-down-left-circle"
                            className="ms-2"
                            route={route}
                        />
                    </div>
                </div>
                {/* --- 7. ADICIONAR O MODAL AO FINAL DO COMPONENTE --- */}
                <UserAdoptModal
                    show={showModal}
                    onClose={handleCloseModal}
                    onSave={(newRequest) => {
                        setAdoptionRequest(newRequest);
                        handleCloseModal();
                    }}
                    animalName={animalName}
                />
            </main>
    );
}

export default BasicAnimalInfo;