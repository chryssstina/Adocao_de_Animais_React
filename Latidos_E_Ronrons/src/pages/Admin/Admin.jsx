import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Admin.css";

function Admin() {
  return (
    <section className="admin-section" id="admin-section">
      <div className="d-flex">
        {/* Sidebar fixa */}
        <Sidebar />

        {/* Conteúdo dinâmico */}
        <main className="flex-grow-1 p-4">
          <Outlet />
        </main>
      </div>
    </section>
  );
}

export default Admin;
