import "./PhotoCard.css";

function PhotoCard({ photo, animalName, description }) {
  return (
      <div className="card-gallery-container">
        <div className="card-gallery mb-3">
          <img
            src={photo}
            className="card-img-top-photocard"
            alt={`${animalName}, ${description}`}
          />
          <div className="card-body card-container">
            <h5 className="card-title">{animalName}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
  );
}

export default PhotoCard;
