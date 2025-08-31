import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <section className="admin-section" id="admin-section">
      <div className="sidebar-container d-flex flex-column flex-shrink-0 p-3 ">

        {/* Navegação */}
        <div className="list-group mb-auto">
          <Link
            to="animais"
            className="list-group-item list-group-item-action"
          >
            Gerenciar Animais
          </Link>
          <Link
            to="adoptions"
            className="list-group-item list-group-item-action"
          >
            Gerenciar Adoções
          </Link>
          <Link
            to="users"
            className="list-group-item list-group-item-action"
          >
            Gerenciar Usuários
          </Link>
        </div>

        <hr />
      </div>
    </section>
  );
}

export default Sidebar;
