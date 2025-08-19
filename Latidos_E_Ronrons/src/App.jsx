
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUpUser from "./pages/SignUpUser/SignUpUser";
import AnimalList from "./pages/AnimalList/AnimalList";
import AnimalDetails from "./pages/AnimalDetails/AnimalDetail";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import User from "./pages/User/User";
import AdoptedAnimalDetails from "./pages/AdoptedAnimalDetails/AdoptedAnimalDetails";
import Admin from "./pages/Admin/Admin";

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
          <Route path="/detalhes-do-animal/:id" element={<AnimalDetails />} />
          <Route path="/adotados/:id" element={<AdoptedAnimalDetails />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
