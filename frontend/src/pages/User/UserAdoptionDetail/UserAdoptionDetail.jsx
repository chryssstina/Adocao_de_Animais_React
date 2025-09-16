// Arquivo: /src/pages/User/UserAdoptionDetail/UserAdoptionDetail.jsx

import { useState, useEffect } from "react"; // 1. Importamos os hooks do React
import { useParams } from "react-router-dom";
import adoptionService from "../../../services/adoptionService"; // 2. Importamos seu serviço de adoção
import AdoptionDetailInfo from "../../../components/UserComponents/AdoptionDetailInfo/AdoptionDetailInfo";

function UserAdoptionDetail() {
    const { id } = useParams(); // Este 'id' é o ID da Adoção (adoption_id)

    // 3. Criamos estados para guardar os dados, o carregamento e possíveis erros
    const [adoptionData, setAdoptionData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 4. Usamos o useEffect para buscar os dados da API assim que o componente for montado
    useEffect(() => {
        const fetchAdoptionDetails = async () => {
            try {
                // Usamos o serviço para buscar um processo de adoção específico pelo ID
                const data = await adoptionService.getAdoptionById(id);
                setAdoptionData(data);
            } catch (err) {
                console.error("Erro ao buscar detalhes da adoção:", err);
                setError("Não foi possível carregar os detalhes do pedido.");
            } finally {
                setLoading(false);
            }
        };

        fetchAdoptionDetails();
    }, [id]); // A busca será refeita se o ID na URL mudar

    // 5. Exibimos mensagens de carregamento e erro para o usuário
    if (loading) {
        return <p>Carregando detalhes do pedido...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    // Verificação para garantir que os dados e o animal dentro deles existem
    if (!adoptionData || !adoptionData.animal) {
        return <p>Não foi possível exibir as informações deste pedido de adoção.</p>;
    }

    // 6. Passamos os dados recebidos da API para o componente de exibição
    // Note que agora acessamos os dados do animal através de `adoptionData.animal`
    return (
        <AdoptionDetailInfo
            id={adoptionData.animal.animal_id}
            animalName={adoptionData.animal.animal_name}
            animalAge={adoptionData.animal.animal_age}
            animalWeight={adoptionData.animal.animal_weight}
            favoriteFood={adoptionData.animal.animal_favorite_food}
            animalCategory={adoptionData.animal.animal_category}
            description={adoptionData.animal.animal_description}
            // photo={adoptionData.animal.animal_photo} // Deixei comentado, como planejado
            
            // Você também pode passar dados da própria adoção, se o componente precisar
            adoptionStatus={adoptionData.adoption_status}
            orderDate={adoptionData.order_date}
            reason={adoptionData.reason}
        />
    );
}

export default UserAdoptionDetail;