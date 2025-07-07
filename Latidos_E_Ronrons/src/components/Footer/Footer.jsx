
import LogoTitle from "../../assets/LogoTitulo/LogoTitle.png";
import EmailLogo from "../../assets/Miscellaneous/email.png";
import TelefoneLogo from "../../assets/Miscellaneous/telefone.png";
import LocalLogo from "../../assets/Miscellaneous/local.png";
import FacebookLogo from "../../assets/Miscellaneous/facebook.png";
import InstagramLogo from "../../assets/Miscellaneous/instagram.png";
import TwitterLogo from "../../assets/Miscellaneous/twitter.png";
 

function Footer() {
  return (
    <div className="container-fluid" id="footer">
      <footer className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <img
                src={LogoTitle}
                alt="Latidos & Ronrons"
                className="mb-2"
                id="LogoFooter"
              />
              <p>
                Promovendo o bem-estar animal e a adoção responsável de pets.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h5>Contato</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-envelope">
                    <img src={EmailLogo} />
                  </i>{" "}
                  contato@latidoseronrons.org
                </li>
                <li>
                  <i className="bi bi-telephone">
                    <img src={TelefoneLogo} />
                  </i>{" "}
                  (00) 1234-5678
                </li>
                <li>
                  <i className="bi bi-geo-alt">
                    <img src={LocalLogo} />
                  </i>{" "}
                  Rua dos Animais, 123 - Bairro Feliz
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb-4">
              <h5>Rede Sociais</h5>
              <a href="#" className="me-3">
                <img src={FacebookLogo} />
              </a>
              <a href="#" className="me-3">
                <img src={InstagramLogo} />
              </a>
              <a href="#" className="me-3">
                <img src={TwitterLogo} />
              </a>
            </div>
          </div>

          <hr class="border-white" />

          <div class="text-center pt-3">
            <small>
              © 2025 Latidos & Ronrons. Todos os direitos reservados.
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
