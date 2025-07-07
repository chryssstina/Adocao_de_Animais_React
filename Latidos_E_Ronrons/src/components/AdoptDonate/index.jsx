import "./AdoptDonate.css";
import Bone from "../../assets/icons/Bone.svg";
import Heart from "../../assets/icons/Heart.svg";
import Arrow from "../../assets/icons/Frame.svg";

function AdoptDonate() {
  return (
    <section className="container-fluid adoptdonate-section" id="adoptdonate">
      <div className="container">
        <div className="adopt-container">
          <div className="adopt-icon">
            <img src={Heart} alt="Ícone de coração" />
          </div>
          <div className="adopt-content">
            <h1>Pronto para Adotar?</h1>
            <p>
              Nossos amigos de quatro patas estão esperando por você! Conheça os
              animais disponíveis para adoção e encontre seu novo companheiro de
              vida.
            </p>
            <button>Ver animais disponíveis <img src={Arrow}/></button>
            <span>+50 animais já encontraram um lar amoroso</span>
          </div>
        </div>

        <hr />

        <div className="donate-container">
          <div className="donate-icon">
            <img src={Bone} alt="Ícone de osso" />
          </div>
          <div className="donate-content">
            <h2>Deseja Ajudar Nossa ONG?</h2>
            <p>
              Gostaria de nos ajudar doando alimentos, brinquedos e ter a
              oportunidade de ajudar nossa causa? Clique abaixo!
            </p>
            <button>Doar</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdoptDonate;
