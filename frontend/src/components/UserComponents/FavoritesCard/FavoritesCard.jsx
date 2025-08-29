import { Link } from "react-router-dom";
import "./FavoritesCard.css";

function FavoritesCard({ id, animalName, animalAge, animalCategory, photo }) {
  return  (
    <section className="adoption-card" id="adoption-card-section">
      <div className="card mb-3" id="adoption-card-content">
        <div className="row g-0 align-items-center">
          <div className="col-md-2 text-center">
            <img
              src={photo}
              className="img-fluid rounded-circle"
              alt="Animal adotado"
              id="adoption-card-image"
            />
          </div>

          <div className="col-md-4">
            <h5 className="card-title mb-1">{animalName}</h5>
            <div className="text-muted small">
              <i className="bi bi-house-heart me-1"></i>
                <span className="no-underline">{animalCategory}</span>
            </div>
            <div className="text-muted small">
              <i className="bi bi-cake me-1"></i>
                <span className="no-underline">{animalAge}</span>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-end align-items-center gap-2 flex-wrap">
            <Link
              className="btn btn-outline-secondary btn-sm button_black"
              to={`/adotados/${id}`}
            >
              Ver Detalhes
            </Link>
            <button className="btn btn-danger btn-sm" id="DeleteButton">
              Remover
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FavoritesCard;
