import { useState, useEffect } from "react";
import AnimalCardsForAdoption from "../../components/AnimalCardsForAdoption/AnimalCardsForAdoption";
import { animal_adoption as mockData } from "../../data/animal_adoption_mock";

function AnimalAdoption(){

    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        // em 1seg, a página deixa de carregar e os dados mockados são atribuídos a animals paras serem usados
        setTimeout(()=>{
            setAnimals(mockData);
            setLoading(false);
        }, 1000);

    },[]);


    return(
        <>
            <main>
                <div>
                    <h1>Pets para adoção</h1>
                    <h2>Conheça alguns dos nossos amigos de quatro patas que estão disponíveis para adoção.</h2>
                </div>
                <div>
                    {loading ? (<p>Carregando animais disponíveis</p>) : (
                        animals.map(animal => (
                            <AnimalCardsForAdoption
                                key={animal.id}
                                animalName={animal.animalName}
                                animalAge={animal.animalAge}
                                animalWeight={animal.animalWeight}
                                favoriteFood={animal.favoriteFood}
                                photo={animal.photo}
                            />
                        ))
                    )}
                </div>
            </main>
        </>
        


    );
}

export default AnimalAdoption;