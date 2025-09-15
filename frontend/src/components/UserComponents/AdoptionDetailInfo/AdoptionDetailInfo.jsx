import './AdoptionDetailInfo.css'
import CustomBtn from '../../CustomBtn/CustomBtn';

function AdoptionDetailInfo({ animalName, animalAge, animalWeight, favoriteFood, animalCategory, photo, description }) {

    return (
        <>
            <main className="main-basic-animal-info">
                <img src={photo} />
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
                <div className="left-info">
                    <h1 className="card-title">Usuario</h1>

                    <div className="container-basic-animal-info">
                        <h3 className="card-title custom-title-basic-animal">Informações básicas</h3>
                        <p className="card-text">Nome: José</p>
                        <p className="card-text">Email: jose@example.com</p>
                        <p className="card-text">Data do pedido: 01/01/2022</p>
                    </div>

                    <div className="container-basic-animal-info">
                        <h3 className="card-title custom-title-basic-animal">Descrição</h3>
                        <p>Quero adotar por que amo animais e quero proporcionar um lar feliz para {animalName}.</p>
                    </div>
                    <CustomBtn
                    label='Voltar'
                    icon="bi bi-arrow-down-left-circle"
                    route="/user"
                    />
                </div>
                
            </main>
        </>
    );
}

export default AdoptionDetailInfo;