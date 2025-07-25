import './AnimalCardForAdoption.css'
import CustomBtn from '../CustomBtn/CustomBtn';

function AnimalCardsForAdoption({ id, animalName, animalAge, animalCategory, photo }) {

    return (
        <>

            <div class="card custom-card mb-5">
                <img src={photo} class="card-img-top" alt={animalName} />
                <div class="card-body">
                    <h5 class="card-title">{animalName}</h5>
                    <p class="card-text"> Idade: {animalAge}</p>
                    <p class="card-text"> Categoria: {animalCategory}</p>
                </div>
                <div className='card-buttons'>
                    <CustomBtn
                        route="/"
                        label="Tenho interesse"
                        className="custom-btn-tenho-interesse"
                    />
                    <CustomBtn
                        route={`/detalhes-do-animal/${id}`}
                        label="+"
                        className="custom-btn-ver-mais"
                    />
                </div>

            </div>

        </>

    );
}

export default AnimalCardsForAdoption;