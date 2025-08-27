import { useParams } from "react-router-dom";
import { animal_adoption_mock as mockData } from "../../data/animal_adoption_mock";
import AdoptedAnimalInfo from "../../components/AdoptedAnimalInfo/AdoptedAnimalInfo";


function AdoptedAnimalDetails() {

    const { id } = useParams();
    const animalId = parseInt(id);

    const animal = mockData.find(a => a.id === animalId);

    if (!animal) {
        return <p>Não foi possível exibir as informações deste animal.</p>;
    }

    return (
        <>
            <AdoptedAnimalInfo
                id={animal.id}
                animalName={animal.animalName}
                animalAge={animal.animalAge}
                animalWeight={animal.animalWeight}
                favoriteFood={animal.favoriteFood}
                animalCategory={animal.animalCategory}
                description={animal.description}
                photo={animal.photo}
            />

        </>
    );
}

export default AdoptedAnimalDetails;