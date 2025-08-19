import Sidebar from "../../components/Sidebar/Sidebar";
import "./Admin.css";

function Admin() {
  return (
    <section className="admin-section" id="admin-section">
      <div className="d-flex">
        <Sidebar />
        <main className="flex-grow-1 p-4">
          <h1>Bem-vindo ao Painel Admin</h1>
        </main>
      </div>
    </section>
  );
}

export default Admin;
