import { useNavigate, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import LogoTitulo from '../../assets/LogoTitulo/LogoTitle2.png';
import "./Navbar.css"


function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateWithScroll = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      // Espera o componente ser montado para rolar até a seção
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100); // pequeno atraso
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
      <nav className="header-container navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <Link to={"/"}>
            <img
              className="navbar-img logo-grande"
              src={LogoTitulo}
              alt="Logo Latidos&Ronrons"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <button className="nav-link btn btn-link" onClick={() => handleNavigateWithScroll("about")}>
                Sobre
              </button>
              <button className="nav-link btn btn-link" onClick={() => handleNavigateWithScroll("programming-section")}>
                Programação
              </button>
              <Link className="nav-link btn btn-link" to={"/animais"}>
                Adoção
              </Link>
              <button className="nav-link btn btn-link" onClick={() => handleNavigateWithScroll("photo-gallery-section")}>
                Galeria
              </button>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
