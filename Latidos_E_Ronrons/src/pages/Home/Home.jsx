import MainSection from "../../components/MainSection";
import AboutSection from "../../components/AboutSection";
import ProgrammingSection from "../../components/ProgrammingSection";
import PhotoGallerySection from "../../components/PhotoGallerySection";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AdoptDonate from "../../components/AdoptDonate";


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