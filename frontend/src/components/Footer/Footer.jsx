import "./Footer.css"
import LogoTitle from "../../assets/LogoTitulo/LogoTitle.png";
import FacebookLogo from "../../assets/Miscellaneous/facebook.png";
import InstagramLogo from "../../assets/Miscellaneous/instagram.png";
import TwitterLogo from "../../assets/Miscellaneous/twitter.png";


function Footer() {

  const contactInfo = [
    { icon: "bi-envelope", text: "contato@latidoseronrons.org" },
    { icon: "bi-telephone", text: "(00) 1234-5678" },
    { icon: "bi-geo-alt", text: "Rua dos Animais, 123 - Bairro Feliz" }
  ];


  const socialMedia = [
    { href: "#", imgSrc: FacebookLogo, alt: "Facebook" },
    { href: "#", imgSrc: InstagramLogo, alt: "Instagram" },
    { href: "#", imgSrc: TwitterLogo, alt: "Twitter" }
  ];

  return (
    <div className="container-fluid" id="footer">
      <footer className="py-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <img
              src={LogoTitle}
              alt="Latidos & Ronrons"
              className="mb-2"
              id="LogoFooter"
            />
            <p>Promovendo o bem-estar animal e a adoção responsável de pets.</p>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Contato</h5>
            <ul className="list-unstyled">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <i className={`bi ${item.icon} me-2`}></i>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Rede Sociais</h5>
            {socialMedia.map((link, index) => (
              <a key={index} href={link.href} className="me-3">
                <img src={link.imgSrc} alt={link.alt} />
              </a>
            ))}
          </div>
        </div>

        <hr class="border-white" />

        <div class="text-center pt-3">
          <small>
            © 2025 Latidos & Ronrons. Todos os direitos reservados.
          </small>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
