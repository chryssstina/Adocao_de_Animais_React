
import Home from "./pages/Home/Home";
import AnimalAdoption from "./pages/AnimalAdoption/AnimalAdoption";

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adocao-de-animais" element={<AnimalAdoption />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
