import { useParams } from "react-router-dom";
import BasicAnimalInfo from "../../components/BasicAnimalInfo/BasicAnimalInfo";
import animalService from "../../services/animalService";
import { useEffect, useState } from "react";


function AnimalDetails({ route }) {

    const { id } = useParams();
    const animalId = parseInt(id);

    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function load() {
        try {
            setLoading(true);
            setError(null);
            const data = await animalService.getAnimalById(animalId);
            setAnimal(data);
        } catch (error) {
            setError("Erro ao carregar animal: " + error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        load();
    }, [animalId]);

    if (loading) return <p>Carregando informações...</p>;
    if (error) return <p>Não foi possível exibir as informações deste animal.</p>;
    if (!animal) return <p>Animal não encontrado.</p>;

    return (
        <>
            <BasicAnimalInfo
                id={animal.id}
                animalName={animal.animal_name}
                animalAge={animal.animal_age}
                animalWeight={animal.animal_weight}
                favoriteFood={animal.animal_favorite_food}
                animalCategory={animal.animal_category}
                description={animal.animal_description}
                photo={animal.photo}
                route={route} //para retornar a página de Todos os Animais
            />

        </>
    );
}

export default AnimalDetails;