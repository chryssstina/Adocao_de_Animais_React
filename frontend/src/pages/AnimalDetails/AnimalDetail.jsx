import { useParams } from "react-router-dom";
import BasicAnimalInfo from "../../components/BasicAnimalInfo/BasicAnimalInfo";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import UserAdoptModal from "../../components/AnimaListComponents/UserAdoptModal/UserAdoptModal";
import './AnimalDetails.css'
import animalService from "../../services/animalService";
import adoptionService from "../../services/adoptionService";
import { useEffect, useState } from "react";


function AnimalDetails({ route }) {

    const { id } = useParams();
    const animalId = parseInt(id);

    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [showModal, setShowModal] = useState(false);


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

    const userId = 2;


    // reason = motivo de adoção
    const handleSaveAdoption = async (reason) => {
        try {
            const payload = {
                fk_animal_id: animalId,
                fk_adopting_user_id: userId,
                reason: reason
            };
            await adoptionService.createAdoption(payload);
            alert("Pedido de adoção enviado com sucesso!");
            setShowModal(false);
        } catch (error) {
            alert("Erro ao enviar pedido de adoção.");
        }
    };


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

            <div className="back-and-interest-buttons">

                <CustomBtn
                    label='Voltar'
                    icon="bi bi-arrow-down-left-circle"
                    className="ms-2"
                    route={route}
                />
                <CustomBtn
                    label='Quero Adotar'
                    icon="bi bi-arrow-down-left-circle"
                    className="ms-2"
                    onClick={() => setShowModal(true)}
                />


            </div>

            <UserAdoptModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onSave={handleSaveAdoption}
                animalName={animal.animal_name}
            />
        </>
    );
}

export default AnimalDetails;