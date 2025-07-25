import "./ProgrammingSection.css"

function ProgrammingSection() {

  const actions = [
    {
      icon: "vaccines",
      title: "Campanhas de vacinação e vermifugação",
      text: "Ações periódicas para garantir a saúde dos animais resgatados ou da comunidade.",
      when: "Primeiro sábado de cada mês",
      where: "Sede da ONG"
    },
    {
      icon: "pets",
      title: "Mutirões de castração",
      text: "Campanhas com veterinários parceiros para controlar a população animal.",
      when: "Último domingo de cada mês",
      where: "Clínicas veterinárias parceiras"
    },
    {
      icon: "volunteer_activism",
      title: "Campanhas de arrecadação",
      text: "Coleta de ração, cobertores, produtos de limpeza, medicamentos ou doações financeiras.",
      when: "Contínuo",
      where: "Online e pontos físicos de coleta"
    },
    {
      icon: "cleaning_services",
      title: "Dias de limpeza e manutenção do abrigo",
      text: "Ações colaborativas com voluntários para melhorar o espaço físico da ONG.",
      when: "Segundo sábado de cada mês",
      where: "Sede da ONG"
    }
  ];

  return (
    <section className="programming-section" id="programming-section">
      <div className="programming-section-text">
        <h3> Programação de Atividades </h3>
        <p> Confira o cronograma de atividades da Latidos & Ronrons e participe! Seu apoio é fundamental para
          continuarmos nossa missão. </p>
      </div>

      <div className="cards-conteiner">
        {actions.map((action, index) => (
          <div className="card">
            <div key={index} className="card-body">
              <span className="material-symbols-outlined">{action.icon}</span>
              <h5 className="card-title"> {action.title}</h5>
              <h6 className="card-subtitle mb-2 ">{action.text}</h6>
              <p className="card-text"> <strong> Quando:</strong> {action.when} </p>
              <p className="card-text"> <strong> Onde:</strong> {action.where} </p>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default ProgrammingSection;
