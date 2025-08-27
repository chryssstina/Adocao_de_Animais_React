import "./MainSection.css"
import Animals from '../../assets/Miscellaneous/animals.png/';
import CustomBtn from "../CustomBtn/CustomBtn";

function MainSection() {
  return (
    <section className="home-section">
      <div className="home-section-text">
        <h1> Adotar é um ato de amor </h1>
        <h2> Conheça nossos amigos de quatro patas que estão em busca de um lar amoroso. </h2>
        <CustomBtn
          route="/sign-up"
          label="Ser membro"
          className="btn-lg me-2 mb-2"
        />
        <CustomBtn
          route="/login"
          label="Já sou membro"
          className="btn-lg mb-2"
        />

      </div>
      <img className="home-section-img mt-3 me-3" src={Animals} alt="Logo Latidos&Ronrons" />
    </section>
  );
}

export default MainSection;
