import "../../index.css";
import MainSection from "../../components/MainSection/MainSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProgrammingSection from "../../components/ProgrammingSection/ProgrammingSection";
import PhotoGallerySection from "../../components/PhotoGallerySection/PhotoGallerySection";
import AdoptDonate from "../../components/AdoptDonate/AdoptDonate";


function Home() {
    return (
        <>
            <main>
                <MainSection />
                <AboutSection />
                <ProgrammingSection />
                <AdoptDonate />
                <PhotoGallerySection />
            </main>
        </>
    )

}


export default Home;