import Links from "../Links";
import Logo from "../Logo";

function Navbar() {
  return (
    <>
      <div className="header-container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img className="navbar-img logo-grande" src="imgs/LogoTitulo/LogoTitle2.png" alt="Logo Latidos&Ronrons" />
            {/* <img className="navbar-img logo-pequena" src="imgs/Logos/logo3.png" alt="Logo Latidos&Ronrons" /> */}

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="nav-link" href="#about">Sobre</a>
                <a className="nav-link" href="#programming-section">Programação</a>
                <a className="nav-link" href="#form-section">Inscrição</a>
                <a className="nav-link" href="#photo-gallery-section">Galeria</a>
              </div>
            </div>
          </div>
        </nav>
      </div>

    </>
  );
}

export default Navbar;
