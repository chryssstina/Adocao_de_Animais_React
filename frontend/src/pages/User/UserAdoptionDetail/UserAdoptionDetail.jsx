import "./UserAdoptionDetail.css"
import { useParams } from "react-router-dom";
import { animal_adoption_mock as mockData } from "../../../data/animal_adoption_mock";
import AdoptionDetailInfo from "../../../components/UserComponents/AdoptionDetailInfo/AdoptionDetailInfo";


function UserAdoptionDetail() {

    const { id } = useParams();
    const animalId = parseInt(id);

    const animal = mockData.find(a => a.id === animalId);

    if (!animal) {
        return <p>Não foi possível exibir as informações deste animal.</p>;
    }

    return (
        <>
            <AdoptionDetailInfo
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

export default UserAdoptionDetail;