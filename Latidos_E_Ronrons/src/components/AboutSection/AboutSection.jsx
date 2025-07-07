import "./AboutSection.css"

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <h3> Sobre a Latidos & Ronrons </h3>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Nossa Missão
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">A ONG Latidos & Ronrons surgiu a partir da necessidade de espalhar amor, carinho
              e responsabilidade em forma de quatro patas.
              Nossa missão é promover o bem-estar animal e incentivar a adoção responsável de cães e gatos que foram
              abandonados, maltratados ou estão em situação de vulnerabilidade.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Nossa Filosofia
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Acreditamos que todo animal merece uma segunda chance e, por isso, trabalhamos
              incansavelmente para proporcionar a eles cuidados veterinários,
              alimentação, abrigo seguro e, principalmente, a chance de encontrar um lar amoroso. Para isso, buscamos
              tornar o processo de adoção simples, acessível e seguro,
              tanto para os animais quanto para os adotantes.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Nossas Ações
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Além das adoções, a Latidos & Ronrons também atua em campanhas de castração,
              vacinação e vermifugação, e eventos comunitários como feiras de adoção, palestras e ações de doação.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
              Nosso Impacto
            </button>
          </h2>
          <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Com o apoio de voluntários, doadores e parceiros, seguimos transformando
              histórias e construindo pontes entre pessoas e animais.
              Acreditamos que adotar é um ato de amor — e estamos aqui para facilitar esse encontro.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
