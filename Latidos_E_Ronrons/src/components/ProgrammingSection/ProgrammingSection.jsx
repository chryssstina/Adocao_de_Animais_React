import "./ProgrammingSection.css"

function ProgrammingSection() {
  return (
    <section className="programming-section" id="programming-section">
      <div className="programming-section-text">
        <h3> Programação de Atividades </h3>
        <p> Confira o cronograma de atividades da Latidos & Ronrons e participe! Seu apoio é fundamental para
          continuarmos nossa missão. </p>
      </div>

      <div className="cards-conteiner">
        <div className="card">
          <div className="card-body">
            <span className="material-symbols-outlined">vaccines </span>
            <h5 className="card-title"> Campanhas de vacinação e vermifugação</h5>
            <h6 className="card-subtitle mb-2 ">Ações periódicas para garantir a saúde dos animais resgatados ou da
              comunidade.</h6>
            <p className="card-text"> <strong> Quando:</strong> Primeiro sábado de cada mês </p>
            <p className="card-text"> <strong> Onde:</strong> Sede da ONG </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <span className="material-symbols-outlined">pets</span>
            <h5 className="card-title"> Mutirões de castração </h5>
            <h6 className="card-subtitle mb-2">Campanhas com veterinários parceiros para controlar a população animal.</h6>
            <p className="card-text"> <strong> Quando:</strong> Último domingo de cada mês </p>
            <p className="card-text"> <strong> Onde: </strong> Clínicas veterinárias parceiras </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <span className="material-symbols-outlined"> volunteer_activism </span>
            <h5 className="card-title"> Campanhas de arrecadação </h5>
            <h6 className="card-subtitle mb-2">Coleta de ração, cobertores, produtos de limpeza, medicamentos ou doações
              financeiras.</h6>
            <p className="card-text"> <strong> Quando:</strong> Contínuo </p>
            <p className="card-text"> <strong> Onde: </strong> Online e pontos físicos de coleta </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <span className="material-symbols-outlined">cleaning_services</span>
            <h5 className="card-title"> Dias de limpeza e manutenção do abrigo </h5>
            <h6 className="card-subtitle mb-2">Ações colaborativas com voluntários para melhorar o espaço físico da ONG.
            </h6>
            <p className="card-text"> <strong> Quando:</strong> Segundo sábado de cada mês </p>
            <p className="card-text"> <strong> Onde:</strong> Sede da ONG </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProgrammingSection;
