

function AnimalCardsForAdoption({ animalName, animalAge, animalWeight, favoriteFood, photo }) {

    return (
        <>
            <div class="row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={photo} class="card-img-top" alt={animalName} />
                        <div class="card-body">
                            <h5 class="card-title">{animalName}</h5>
                            <p class="card-text"> Idade: {animalAge}</p>
                            <p class="card-text"> Peso: {animalWeight}</p>
                            <p class="card-text"> Comida favorita: {favoriteFood}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default AnimalCardsForAdoption;