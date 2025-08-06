import Rufus from "../../assets/PhotoGallery/rufus_gato_laranja.jpg";

function AdoptionCard() {
  return (
    <section className="adoption-card" id="adoption-card">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={Rufus}
              className="img-fluid rounded-start"
              alt="Animal adotado"
            />
            <div>
              <p className="card-text">Data da Adoção: 01/01/2023</p>
              <h5 className="card-title">Luna</h5>
            </div>
            <div class="flex items-center text-sm text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="lucide lucide-calendar h-4 w-4 mr-1" data-lov-id="src/pages/UserDashboard.tsx:116:32" data-lov-name="Calendar" data-component-path="src/pages/UserDashboard.tsx" data-component-line="116" data-component-file="UserDashboard.tsx" data-component-name="Calendar" data-component-content="%7B%22className%22%3A%22h-4%20w-4%20mr-1%22%7D"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>2024-01-15</div>
          </div>
          <div className="col-md-8">
            <p className="card-text">Status: Aguardando Resposta</p>
            <button className="btn btn-primary me-2">Ver Detalhes</button>
            <button className="btn btn-danger">Cancelar</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdoptionCard;
