function Footer() {
  return (
    <div className="container-fluid" id="footer">
      <footer className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <img
                src="imgs/LogoTitulo/LogoTitle.png"
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
                    <img src="imgs/Miscellaneous/email.png" />
                  </i>{" "}
                  contato@latidoseronrons.org
                </li>
                <li>
                  <i className="bi bi-telephone">
                    <img src="imgs/Miscellaneous/telefone.png" />
                  </i>{" "}
                  (00) 1234-5678
                </li>
                <li>
                  <i className="bi bi-geo-alt">
                    <img src="imgs/Miscellaneous/local.png" />
                  </i>{" "}
                  Rua dos Animais, 123 - Bairro Feliz
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb-4">
              <h5>Rede Sociais</h5>
              <a href="#" className="me-3">
                <img src="imgs/Miscellaneous/facebook.png" />
              </a>
              <a href="#" className="me-3">
                <img src="imgs/Miscellaneous/instagram.png" />
              </a>
              <a href="#" className="me-3">
                <img src="imgs/Miscellaneous/twitter.png" />
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
