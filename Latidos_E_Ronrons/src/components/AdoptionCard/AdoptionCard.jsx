function AdoptionCard() {
  return (
    <section className="adoption-card" id="adoption-card">
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
            <div className="col-md-4">
                <img
                    src="https://via.placeholder.com/150"
                    className="img-fluid rounded-start"
                    alt="Animal adotado"
                />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Nome do Animal</h5>
                    <p className="card-text">Data da Adoção: 01/01/2023</p>
                    <p className="card-text">Status: Aguardando Resposta</p>
                    <button className="btn btn-primary me-2">Ver Detalhes</button>
                    <button className="btn btn-danger">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
    </section>
  );
}

export default AdoptionCard;
