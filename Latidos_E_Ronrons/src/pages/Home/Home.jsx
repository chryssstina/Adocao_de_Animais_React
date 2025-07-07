import "../../index.css";
import MainSection from "../../components/MainSection/MainSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProgrammingSection from "../../components/ProgrammingSection/ProgrammingSection";
import PhotoGallerySection from "../../components/PhotoGallerySection/PhotoGallerySection";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AdoptDonate from "../../components/AdoptDonate/AdoptDonate";


function Home() {
    return (
        <>
            <Navbar/>
            <main>
                <MainSection />
                <AboutSection />
                <ProgrammingSection />
                <AdoptDonate />
                <PhotoGallerySection />
                <Footer />
            </main>
        </>
    )

}


export default Home;