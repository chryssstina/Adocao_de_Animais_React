import { useNavigate, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import LogoTitulo from '../../assets/LogoTitulo/LogoTitle2.png';
import Logo3 from '../../assets/Logos/logo3.png/';
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // --- 1. VERIFICAR SE O USUÁRIO ESTÁ LOGADO ---
  // Checamos se o token existe no localStorage.
  // O `!!` transforma o resultado (uma string ou null) em um booleano (true ou false).
  const isLoggedIn = !!localStorage.getItem('auth');


  const handleNavigateWithScroll = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
      <nav className="header-container navbar navbar-expand-lg sticky-top" id="navbar-container">
        <div className="container-fluid">
          <Link to={"/"}>
            <img
              className="navbar-img logo-grande"
              src={LogoTitulo}
              alt="Logo Latidos&Ronrons"
            />
            <img
              className="navbar-img logo-pequena"
              src={Logo3}
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
              <button className="nav-link navbar-link btn btn-link" onClick={() => handleNavigateWithScroll("about")}>
                Sobre
              </button>
              <button className="nav-link navbar-link btn btn-link" onClick={() => handleNavigateWithScroll("programming-section")}>
                Programação
              </button>
              <Link className="nav-link navbar-link btn btn-link" to={"/animais"}>
                Adoção
              </Link>
              <button className="nav-link navbar-link btn btn-link" onClick={() => handleNavigateWithScroll("photo-gallery-section")}>
                Galeria
              </button>
              
              {/* --- 3. RENDERIZAÇÃO CONDICIONAL DOS LINKS --- */}
              {isLoggedIn ? (
                // Se estiver LOGADO, mostra "Perfil" e "Sair"
                <>
                  <Link className="nav-link navbar-link btn btn-link" to={"/user"}>
                    Perfil
                  </Link>
                </>
              ) : (
                // Se NÃO estiver logado, mostra nada, pois o botao de login ja existe
                <></>
              )}
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;