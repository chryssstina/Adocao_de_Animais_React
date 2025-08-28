import "../../index.css";
import MainSection from "../../components/HomeComponents/MainSection/MainSection";
import AboutSection from "../../components/HomeComponents/AboutSection/AboutSection";
import ProgrammingSection from "../../components/HomeComponents/ProgrammingSection/ProgrammingSection";
import PhotoGallerySection from "../../components/HomeComponents/PhotoGallerySection/PhotoGallerySection";
import AdoptSection from "../../components/HomeComponents/AdoptSection/AdoptSection";


function Home() {
    return (
        <>
            <main>
                <MainSection />
                <AboutSection />
                <ProgrammingSection />
                <AdoptSection />
                <PhotoGallerySection />
            </main>
        </>
    )

}


export default Home;