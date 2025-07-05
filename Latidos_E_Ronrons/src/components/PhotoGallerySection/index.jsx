import Rufus from "../../assets/PhotoGallery/rufus_gato_laranja.jpg";
import Nina from "../../assets/PhotoGallery/nina_gata_cinza.jpg";
import Thor from "../../assets/PhotoGallery/thor_porte_medio.jpg";
import FeiraAdocao from "../../assets/PhotoGallery/dog_feira_adocao.jpg";
import CampanhaVacinacao from "../../assets/PhotoGallery/campanha_vacinacao.jpg";
import LimpezaManutencao from "../../assets/PhotoGallery/limpeza_manutencao.jpg";


function PhotoGallerySection() {
  return (
    <section className="photo-gallery-section" id="photo-gallery-section">
      <div className="photo-gallery-section-text">
        <h3> Galeria </h3>
        <p> Conheça alguns dos nossos amigos de quatro patas que estão disponíveis para adoção e veja registros das
          nossas atividades. </p>
      </div>

      <div className="card-gallery-container">
        <div className="card-gallery mb-3">
          <img src={Rufus} className="card-img-top" alt="Rufus, um gatinho laranja" />
          <div className="card-body">
            <h5 className="card-title"> Rufus </h5>
            <p className="card-text">Gato laranja, 2 anos, carinhoso e brincalhão </p>
          </div>
        </div>

        <div className="card-gallery mb-3">
          <img src={Nina} className="card-img-top" alt="Nina, uma gatinha cinza" />
          <div className="card-body">
            <h5 className="card-title"> Nina </h5>
            <p className="card-text"> Gata cinza, 5 meses, dócil e curiosa </p>
          </div>
        </div>

        <div className="card-gallery mb-3">
          <img src={Thor} className="card-img-top" alt="Thor, um cachorro de médio porte" />
          <div className="card-body">
            <h5 className="card-title"> Thor </h5>
            <p className="card-text"> Cachorro de porte médio, 3 anos, guardião e afetuoso </p>
          </div>
        </div>

        <div className="card-gallery mb-3">
          <img src={FeiraAdocao} className="card-img-top" alt="Feira de adoção" />
          <div className="card-body">
            <h5 className="card-title"> Feira de Adoção </h5>
            <p className="card-text"> Evento mensal no parque central </p>
          </div>
        </div>

        <div className="card-gallery mb-3">
          <img src={CampanhaVacinacao} className="card-img-top" alt="Campanha de vacinação" />
          <div className="card-body">
            <h5 className="card-title"> Campanha de vacinação </h5>
            <p className="card-text">Mutirão de saúde animal </p>
          </div>
        </div>

        <div className="card-gallery mb-3">
          <img src={LimpezaManutencao} className="card-img-top" alt="Dia de limpeza" />
          <div className="card-body">
            <h5 className="card-title"> Voluntários em ação </h5>
            <p className="card-text"> Dia de limpeza e manutenção do abrigo </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoGallerySection;
