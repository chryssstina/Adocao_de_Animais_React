
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUpUser from "./pages/SignUpUser/SignUpUser";
import AnimalAdoption from "./pages/AnimalAdoption/AnimalAdoption";

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUpUser />} />
          <Route path="/adocao-de-animais" element={<AnimalAdoption />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
