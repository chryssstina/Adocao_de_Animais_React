import "./AnimalCardForAdoption.css";
import BtnQueroAdotar from "../BtnQueroAdotar/BtnQueroAdotar";

function AnimalCardsForAdoption({ photo, animalName, description }) {
  return (
    <>
      <div className="card-gallery-container">
        <div className="card-gallery mb-3">
          <img
            src={photo}
            className="card-img-top"
            alt={`${animalName}, ${description}`}
          />
          <div className="card-body">
            <h5 className="card-title">{animalName}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimalCardsForAdoption;
