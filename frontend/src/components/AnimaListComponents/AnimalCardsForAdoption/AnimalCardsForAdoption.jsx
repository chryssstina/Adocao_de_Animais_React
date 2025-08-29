import "./AnimalCardForAdoption.css";
import CustomBtn from "../../CustomBtn/CustomBtn";
import UserAdoptModal from "../UserAdoptModal/UserAdoptModal";
import React, { useState } from "react";

function AnimalCardsForAdoption({
  id,
  animalName,
  animalAge,
  animalCategory,
  photo,
}) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: "user",
    email: "user@example.com",
    password: "",
  });

  const handleEditClick = () => {
    console.log("Tenho interesse clicado!");
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <section id={`animal-${id}`}>
      <div className="card custom-card mb-5">
        <img src={photo} className="card-img-top" alt={animalName} />
        <div className="card-body">
          <h5 className="card-title">{animalName}</h5>
          <p className="card-text"> Idade: {animalAge}</p>
          <p className="card-text"> Categoria: {animalCategory}</p>
        </div>
        <div className="card-buttons">
          <CustomBtn
            label="Tenho interesse"
            className="custom-btn-tenho-interesse"
            onClick={handleEditClick}
          />
          <CustomBtn
            route={`/detalhes-do-animal/${id}`}
            className="bi bi-eye"
          />
        </div>
      </div>
      <UserAdoptModal
        show={showModal}
        onClose={handleCloseModal}
        onSave={(updatedData) => {
          console.log("Dados atualizados:", updatedData);
          setFormData(updatedData); // atualiza localmente
        }}
        initialData={formData}
      />
    </section>
  );
}

export default AnimalCardsForAdoption;
