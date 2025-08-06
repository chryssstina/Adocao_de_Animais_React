import "./AdoptionCard.css";

function AdoptionCard({ animalName, adoptionDate, status, photo }) {
  return status === "disponivel" ? (
    <></>
  ) : (
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
              <i className="bi bi-calendar me-1"></i>
              {adoptionDate === "" ? (
                <span className="text-warning">Aguardando Adoção</span>
              ) : (
                <span className="no-underline">{adoptionDate}</span>
              )}
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-end align-items-center gap-2 flex-wrap">
            {status === "pendente" ? (
              <span className="badge bg-warning text-dark no-underline">
                Pendente
              </span>
            ) : status === "aprovado" ? (
              <span className="badge bg-success no-underline">Aprovado</span>
            ) : status === "rejeitado" ? (
              <span className="badge bg-danger no-underline">Rejeitado</span>
            ) : (
              <span className="badge bg-secondary no-underline">
                Desconhecido
              </span>
            )}
            <button className="btn btn-outline-secondary btn-sm button_black">
              Ver Detalhes
            </button>
            {
              status === "rejeitado" ? (
                <button className="btn btn-danger btn-sm" id="DeleteButton">Excluir</button>
              ) : (
                <button className="btn btn-danger btn-sm" id="CancelButton">Cancelar</button>
              )
            }
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdoptionCard;
