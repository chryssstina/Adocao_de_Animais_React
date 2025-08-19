import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <section className="admin-section" id="admin-section">
      <div className="sidebar-container d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">

        {/* Navegação */}
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Gerenciar Animais
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#table"></use>
              </svg>
              Gerenciar Adoções
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#grid"></use>
              </svg>
              Gerenciar Usuários
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#people-circle"></use>
              </svg>
              Gerenciar Voluntários
            </a>
          </li>
        </ul>
        <hr />

        {/* Perfil / Dropdown */}
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="perfil"
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>Admin</strong>
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                Configurações
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Perfil
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
