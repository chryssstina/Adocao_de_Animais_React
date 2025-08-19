import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <section className="admin-section" id="admin-section">
      <div className="sidebar-container d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">

        {/* Navegação */}
        <div className="list-group mb-auto">
          <Link
            to="/animais"
            className="list-group-item list-group-item-action"
          >
            Gerenciar Animais
          </Link>
          <Link
            to="/adocoes"
            className="list-group-item list-group-item-action"
          >
            Gerenciar Adoções
          </Link>
          <Link
            to="/usuarios"
            className="list-group-item list-group-item-action"
          >
            Gerenciar Usuários
          </Link>
          <Link
            to="/voluntarios"
            className="list-group-item list-group-item-action"
          >
            Gerenciar Voluntários
          </Link>
        </div>

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
              <Link className="dropdown-item" to="/configuracoes">
                Configurações
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/perfil">
                Perfil
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="/logout">
                Sair
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
