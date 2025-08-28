import "./AdoptSection.css";
import Bone from "../../../assets/icons/Bone.svg";
import Heart from "../../../assets/icons/Heart.svg";
import Arrow from "../../../assets/icons/Frame.svg";
import { Link } from 'react-router-dom';

function AdoptSection() {
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
            <Link className="btn btn-lg btn-adotar" to={"/animais"}>Ver animais disponíveis <img src={Arrow}/></Link>
            <span>+50 animais já encontraram um lar amoroso</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdoptSection;
