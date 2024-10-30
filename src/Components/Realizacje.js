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
        {['chlopy.png', 'dzieciaki.png', 'Dziwak.jpg', 'idk.jpg', 'malpka.jpg', 'nwm.jpg', 'pies.jpg', 'obraz.jpg', 'ganek.png', 'kuchnia.png'].map((img, index) => (
          <div className='realizacje-karta' key={index} onClick={() => handleImageClick(`./photos/${img}`)}>
            <div className='realizacje-zdjęcie'>
              <img src={`./photos/${img}`} alt={img} />
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