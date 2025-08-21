import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Admin.css";

// Páginas internas do admin
import Dashboard from "./Dashboard";
import Users from "./Users";
import Settings from "./Settings";

function Admin() {
  return (
    <section className="admin-section" id="admin-section">
      <div className="d-flex">
        {/* Layout fixo */}
        <Sidebar />

        {/* Conteúdo dinâmico */}
        <main className="flex-grow-1 p-4">
          <Routes>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </section>
  );
}

export default Admin;
