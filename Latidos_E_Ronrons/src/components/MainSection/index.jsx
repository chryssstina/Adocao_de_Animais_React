import Animals from '../../assets/Miscellaneous/animals.png/';
import BtnQueroAdotar from '../BtnQueroAdotar/BtnQueroAdotar';

function MainSection() {
  return (
    <section className="home-section">
      <div className="home-section-text">
        <h1> Adotar é um ato de amor </h1>
        <h2> Conheça nossos amigos de quatro patas que estão em busca de um lar amoroso. </h2>
        <button type="button" className="btn btn-lg btn-adotar"> <a href="#form-section"> Quero adotar </a> </button>

      </div>
      <img className="home-section-img mt-3 me-3" src={Animals} alt="Logo Latidos&Ronrons" />
    </section>
  );
}

export default MainSection;
