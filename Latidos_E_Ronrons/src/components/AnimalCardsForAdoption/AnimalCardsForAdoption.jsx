import './AnimalCardForAdoption.css'
import BtnQueroAdotar from '../BtnQueroAdotar/BtnQueroAdotar';

function AnimalCardsForAdoption({ animalName, animalAge, animalWeight, favoriteFood, photo }) {

    return (
        <>

            <div class="card custom-card mb-5">
                <img src={photo} class="card-img-top" alt={animalName} />
                <div class="card-body">
                    <h5 class="card-title">{animalName}</h5>
                    <p class="card-text"> Idade: {animalAge}</p>
                    <p class="card-text"> Peso: {animalWeight}</p>
                    <p class="card-text"> Comida favorita: {favoriteFood}</p>
                    <BtnQueroAdotar/>
                </div>
            </div>

        </>

    );
}

export default AnimalCardsForAdoption;