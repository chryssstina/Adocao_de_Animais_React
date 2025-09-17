import { useParams } from "react-router-dom";
import BasicAnimalInfo from "../../components/BasicAnimalInfo/BasicAnimalInfo";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import UserAdoptModal from "../../components/AnimaListComponents/UserAdoptModal/UserAdoptModal";
import './AnimalDetails.css'
import animalService from "../../services/animalService";
import adoptionService from "../../services/adoptionService";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


function AnimalDetails({ route }) {

    const { id } = useParams();
    const animalId = parseInt(id);
    const { user, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
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
        load();
    }, [animalId]);

    //const userId = 2;

    const handleOpenModal = () => {
        if (!isAuthenticated) {
            alert("Você precisa estar logado para solicitar uma adoção!");
            navigate("/login");
            return;
        }

        if (!user || !user.user_id) {
            alert("Erro ao identificar usuário. Por favor, faça login novamente.");
            navigate("/login");
            return;
        }

        setShowModal(true);
    };
    // reason = motivo de adoção
    const handleSaveAdoption = async (reason) => {
        try {
            const payload = {
                fk_animal_id: animalId,
                fk_adopting_user_id: user.user_id,
                reason: reason
            };
            await adoptionService.createAdoption(payload);
            alert("Pedido de adoção enviado com sucesso!");
            setShowModal(false);
        } catch (error) {
            console.error("Erro ao criar adoção:", error);
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
                    onClick={handleOpenModal}
                />


            </div>

            {isAuthenticated && (
                <UserAdoptModal
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    onSave={handleSaveAdoption}
                    animalName={animal.animal_name}
                />
            )}
        </>
    );
}

export default AnimalDetails;