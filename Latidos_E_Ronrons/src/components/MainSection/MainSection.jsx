import "./MainSection.css"
import Animals from '../../assets/Miscellaneous/animals.png/';
import { Link } from 'react-router-dom';

function MainSection() {
  return (
    <section className="home-section">
      <div className="home-section-text">
        <h1> Adotar é um ato de amor </h1>
        <h2> Conheça nossos amigos de quatro patas que estão em busca de um lar amoroso. </h2>
        <Link type="button" className="btn btn-lg btn-adotar me-2" to={"/sign-up"}> Ser Membro </Link>
        <Link type="button" className="btn btn-lg btn-adotar ms-2" to={"/login"}> Já sou membro </Link>

      </div>
      <img className="home-section-img mt-3 me-3" src={Animals} alt="Logo Latidos&Ronrons" />
    </section>
  );
}

export default MainSection;
