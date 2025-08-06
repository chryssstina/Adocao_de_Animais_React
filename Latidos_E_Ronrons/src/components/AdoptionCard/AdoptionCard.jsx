import "./AdoptionCard.css";
import Rufus from "../../assets/PhotoGallery/rufus_gato_laranja.jpg";

function AdoptionCard() {
  return (
    <section className="adoption-card" id="adoption-card-section">
      <div className="card mb-3" id="adoption-card-content">
        <div className="row g-0 align-items-center">
          <div className="col-md-2 text-center">
            <img
              src={Rufus}
              className="img-fluid rounded-circle"
              alt="Animal adotado"
              id="adoption-card-image"
            />
          </div>

          <div className="col-md-4">
            <h5 className="card-title mb-1">Luna</h5>
            <div className="text-muted small">
              <i className="bi bi-calendar me-1"></i>
              <span>2024-01-15</span>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-end align-items-center gap-2 flex-wrap">
            <span className="badge bg-warning text-dark no-underline">Pendente</span>
            <span className="badge bg-success no-underline">Aprovado</span>
            <span className="badge bg-danger no-underline">Rejeitado</span>
            <button className="btn btn-outline-primary btn-sm">
              Ver Detalhes
            </button>
            <button className="btn btn-danger btn-sm">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdoptionCard;
