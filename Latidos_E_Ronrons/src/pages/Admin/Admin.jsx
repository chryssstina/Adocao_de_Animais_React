import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Admin.css";
import AdminAdoptions from "./AdminAdoptions/AdminAdoptions";
import AdminAnimals from "./AdminAnimals/AdminAnimals";
import AdminUsers from "./AdminUsers/AdminUsers";
// Páginas internas do admin

function Admin() {
  return (
    <section className="admin-section" id="admin-section">
      <div className="d-flex">
        {/* Layout fixo */}
        <Sidebar />

        {/* Conteúdo dinâmico */}
        <main className="flex-grow-1 p-4">
          <Routes>
            <Route path="/admin/adoptions" element={<AdminAdoptions />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/animals" element={<AdminAnimals />} />
          </Routes>
        </main>
      </div>
    </section>
  );
}

export default Admin;
