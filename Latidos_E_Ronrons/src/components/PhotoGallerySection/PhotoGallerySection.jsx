import "./PhotoGallerySection.css";
import { useEffect, useState } from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import { animal_adoption_mock as mockData } from "../../data/animal_adoption_mock";

function PhotoGallerySection() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento com os dados mockados
    setTimeout(() => {
      setPhotos(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="photo-gallery-section" id="photo-gallery-section">
      <div className="photo-gallery-section-text">
        <h3>Galeria</h3>
        <p>
          Conheça alguns dos nossos amigos de quatro patas que estão disponíveis
          para adoção e veja registros das nossas atividades.
        </p>
      </div>

      <div className="row card-gallery-container">
        {loading ? (
          <p>Carregando galeria...</p>
        ) : (
          // slice determina quantos cards vão aparecer (índice inicial, índice final)
          photos.slice(0,5).map((animal) => (
            <div
              className="col-sm-4 col-md-4 col-lg-3 d-flex justify-content-center"
              key={animal.id}
            >
              <PhotoCard
                photo={animal.photo}
                animalName={animal.animalName}
                description={animal.description}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default PhotoGallerySection;
