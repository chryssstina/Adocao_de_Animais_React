import { useState, useEffect } from "react";
import './AnimalAdoption.css'
import AnimalCardsForAdoption from "../../components/AnimalCardsForAdoption/AnimalCardsForAdoption";
import { animal_adoption_mock as mockData } from "../../data/animal_adoption_mock";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function AnimalAdoption() {

    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // em 1seg, a página deixa de carregar e os dados mockados são atribuídos a animals paras serem usados
        setTimeout(() => {
            setAnimals(mockData);
            setLoading(false);
        }, 1000);

    }, []);


    return (
        <>
            <Navbar />
            <main className="animal-adoption-main">
                <div className="custom-title">
                    <h1>Pets para adoção</h1>
                    <p>Conheça alguns dos nossos amigos de quatro patas que estão disponíveis para adoção.</p>
                </div>
                <div className="row custom-row-animal-adoption justify-content-center">
                    {loading ? (
                        <p>Carregando animais disponíveis</p>
                    ) : (
                        animals.map((animal) => (
                            <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center" key={animal.id}>
                                <AnimalCardsForAdoption
                                    animalName={animal.animalName}
                                    animalAge={animal.animalAge}
                                    animalWeight={animal.animalWeight}
                                    favoriteFood={animal.favoriteFood}
                                    species={animal.species}
                                    photo={animal.photo}
                                />
                            </div>
                        ))
                    )}
                </div>
            </main>
            <Footer />
        </>



    );
}

export default AnimalAdoption;