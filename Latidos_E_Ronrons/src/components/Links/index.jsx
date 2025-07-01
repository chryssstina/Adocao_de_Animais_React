import { handleScroll } from "../../resources/effects.js";

function Links() {
  return (
    <div
      className="collapse navbar-collapse justify-content-between"
      id="navbarLinks"
    >
      <button type="button" className="btn">Base class</button>


      <ul className="navbar-nav mb-2 mb-lg-0 flex-grow-1 justify-content-center">
        <li className="nav-item">
          <button
            onClick={() => handleScroll("root")}
            className="nav-link aIndex me-5"
            id=""
          >
            Home
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => handleScroll("sec2")}
            className="nav-link aIndex me-5"
            id=""
          >
            Destaques
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => handleScroll("section3")}
            className="nav-link aIndex me-5"
            id=""
          >
            Bairros
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => handleScroll("section4")}
            className="nav-link aIndex me-5"
            id=""
          >
            Recentes
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Links;
