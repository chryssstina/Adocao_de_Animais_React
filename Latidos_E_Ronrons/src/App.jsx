import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import AboutSection from "./components/AboutSection";
import ProgrammingSection from "./components/ProgrammingSection";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <MainSection />
        <AboutSection />
        <ProgrammingSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
