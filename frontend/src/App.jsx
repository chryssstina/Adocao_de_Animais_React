import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUpUser from "./pages/SignUpUser/SignUpUser";
import AnimalList from "./pages/AnimalList/AnimalList";
import AnimalDetails from "./pages/AnimalDetails/AnimalDetail";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User/User";
import AdoptedAnimalDetails from "./pages/AdoptedAnimalDetails/AdoptedAnimalDetails";
import Admin from "./pages/Admin/Admin";
import AdminAdoptions from "./pages/Admin/AdminAdoptions/AdminAdoptions";
import AdminAnimals from "./pages/Admin/AdminAnimals/AdminAnimals";
import AdminUsers from "./pages/Admin/AdminUsers/AdminUsers";
import UserAdoptionDetail from "./pages/User/UserAdoptionDetail/UserAdoptionDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUpUser />} />
          <Route path="/animais" element={<AnimalList />} />
          <Route path="/detalhes-do-animal/:id" element={<AnimalDetails route="/animais" />} />
          <Route path="/adotados/:id" element={<AnimalDetails route="/user" />} />
          <Route path="/pedido/:id" element={<UserAdoptionDetail />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="/admin/adoptions" element={<AdminAdoptions />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/animals" element={<AdminAnimals />} />
          </Route>
          <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
