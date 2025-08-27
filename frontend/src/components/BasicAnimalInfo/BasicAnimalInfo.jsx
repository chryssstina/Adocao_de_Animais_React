import './BasicAnimalInfo.css'
import CustomBtn from '../CustomBtn/CustomBtn';

function BasicAnimalInfo({ animalName, animalAge, animalWeight, favoriteFood, animalCategory, photo, description }) {

    return (
        <>
            <main className="main-basic-animal-info">
                <img src={photo} />
                <div className="left-info">
                    <h1 className="card-title"><i class="bi bi-hearts"></i>{animalName}</h1>

                    <div className="container-basic-animal-info">
                        <h3 className="card-title custom-title-basic-animal">Informações básicas</h3>
                        <p class="card-text">Nome: {animalName}</p>
                        <p class="card-text">Idade: {animalAge}</p>
                        <p class="card-text">Peso: {animalWeight}</p>
                        <p class="card-text">Comida favorita: {favoriteFood}</p>
                        <p class="card-text">Categoria: {animalCategory}</p>
                    </div>

                    <div className="container-basic-animal-info">
                        <h3 className="card-title custom-title-basic-animal">Sobre {animalName}</h3>
                        <p>{description}</p>
                    </div>

                    <CustomBtn
                    label='Tenho interesse'
                    icon="bi bi-heart"
                    />
                    <CustomBtn
                    label='Voltar'
                    icon="bi bi-arrow-down-left-circle"
                    className="custom-btn-basic-info-back"
                    route="/animais"
                    />
                </div>
                
            </main>
        </>
    );
}

export default BasicAnimalInfo;