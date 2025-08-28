import "./AboutSection.css"

function AboutSection() {


  const aboutItems = [
    {
      title: "Nossa Missão",
      text: "A ONG Latidos & Ronrons surgiu a partir da necessidade de espalhar amor, carinho e responsabilidade em forma de quatro patas. Nossa missão é promover o bem-estar animal e incentivar a adoção responsável de cães e gatos que foram abandonados, maltratados ou estão em situação de vulnerabilidade.",
      accordion: "flush-collapseOne"
    },
    {
      title: "Nossa Filosofia",
      text: "Acreditamos que todo animal merece uma segunda chance e, por isso, trabalhamos incansavelmente para proporcionar a eles cuidados veterinários, alimentação, abrigo seguro e, principalmente, a chance de encontrar um lar amoroso. Para isso, buscamos tornar o processo de adoção simples, acessível e seguro, tanto para os animais quanto para os adotantes.",
      accordion: "flush-collapseTwo"
    },
    {
      title: "Nossas Ações",
      text: "Além das adoções, a Latidos & Ronrons também atua em campanhas de castração, vacinação e vermifugação, e eventos comunitários como feiras de adoção, palestras e ações de doação.",
      accordion: "flush-collapseThree"
    }, {
      title: "Nosso Impacto",
      text: "Com o apoio de voluntários, doadores e parceiros, seguimos transformando histórias e construindo pontes entre pessoas e animais. Acreditamos que adotar é um ato de amor — e estamos aqui para facilitar esse encontro.",
      accordion: "flush-collapseFour"
    }
  ]

  return (
    <section className="about-section" id="about">
      <h3> Sobre a Latidos & Ronrons </h3>
      <div className="accordion accordion-flush" id="accordionFlushExample">


        {aboutItems.map((item) => (
          <div key={item.accordion} className="accordion-item">

            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target={`#${item.accordion}`} aria-expanded="false" aria-controls={item.accordion}>
                {item.title}
              </button>
            </h2>

            <div id={item.accordion} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                {item.text}
              </div>
            </div>

          </div>

        ))}
      </div>

    </section>
  );
}

export default AboutSection;
