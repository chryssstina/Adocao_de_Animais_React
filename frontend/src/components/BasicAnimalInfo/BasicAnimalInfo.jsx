import './BasicAnimalInfo.css';

function BasicAnimalInfo({ animalName, animalAge, animalWeight, favoriteFood, animalCategory, photo, description, route }) {
    return (
            <main className="main-basic-animal-info">
                <img src={photo} alt={animalName} />
                <div className="left-info">
                    <h1 className="card-title"><i className="bi bi-hearts"></i>{animalName}</h1>

                    <div className="container-basic-animal-info">
                        <h3 className="card-title custom-title-basic-animal">Informações básicas</h3>
                        <p className="card-text">Nome: {animalName}</p>
                        <p className="card-text">Idade: {animalAge}</p>
                        <p className="card-text">Peso: {animalWeight}</p>
                        <p className="card-text">Comida favorita: {favoriteFood}</p>
                        <p className="card-text">Categoria: {animalCategory}</p>
                    </div>

                    <div className="container-basic-animal-info">
                        <h3 className="card-title custom-title-basic-animal">Sobre {animalName}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </main>
    );
}

export default BasicAnimalInfo;