import React, { useState } from 'react';
import "../css/realizacje.css"
const Realizacje = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleClose = () => {
    setSelectedImage(null); 
  };
  return (
    <div className='realizacje-kontener'>
      <>
        {['Kuchnia1.jpeg','Schody1.jpg','Schody2.jpg','Schody3.jpeg','Schody4.jpeg','Schody5.jpeg',].map((img, index) => (
          <div className='realizacje-karta' key={index} onClick={() => handleImageClick(`./MarPro/${img}`)}>
            <div className='realizacje-zdjęcie'>
              <img src={`./MarPro/${img}`} alt={img} />
            </div>
          </div>
        ))}

        {selectedImage && (
          <div className='overlay' onClick={handleClose}>
            <img className='enlarged-image' src={selectedImage} alt="Powiększone" />
          </div>
        )}
      </>
    </div>
  );
};

export default Realizacje;