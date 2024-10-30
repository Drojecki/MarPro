import React, { useState } from 'react';
import "../css/oferta.css"
const Oferta = () => {

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
   <div className='oferta-kontener'>
      {selectedCard === null ? (
        <>
          <div className='oferta-karta' onClick={() => handleCardClick('Kuchnie')}>
            <div className='oferta-zdjęcie'><img src='./photos/ganek.png' alt="Kuchnie" /></div>
            <div className='oferta-text'>
              <div className='oferta-header'>Kuchnie</div>
              <div className='oferta-content'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
            </div>
          </div>
          <div className='oferta-karta' onClick={() => handleCardClick('Schody')}>
            <div className='oferta-zdjęcie'><img src='./photos/kuchnia.png' alt="Schody" /></div>
            <div className='oferta-text'>
              <div className='oferta-header'>Schody</div>
              <div className='oferta-content'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
            </div>
          </div>
        </>
      ) : (
        <div className='oferta-szczegóły'>
          <div className='flex'>
          <button onClick={() => setSelectedCard(null)}><img src='./photos/Arrow left.png' alt="ArrowLeft" /></button>
          <p className='oferta-header-details'>{selectedCard}</p>
          </div>
          <p className='oferta-text-details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et sodales felis. In mollis a tellus eget lacinia. Donec ut eros eu dui consequat commodo. Donec at porta quam. Pellentesque eu elit tortor. Nam venenatis ac magna non viverra. Proin elementum ligula et pharetra aliquet. Nunc id leo erat. Proin sed luctus nulla. Vestibulum porta justo in molestie porttitor. Praesent sed felis felis. Quisque tortor eros, interdum quis lobortis id, euismod in quam. Nunc quis mauris tincidunt, laoreet metus vel, sollicitudin enim. Quisque non est sit amet leo cursus feugiat sed at neque. Mauris mollis magna et justo porta facilisis.

Aliquam commodo magna mi, ac consequat augue scelerisque at. Integer aliquet augue libero, id pretium risus gravida ac. Aliquam ultricies justo quis eros dignissim, id auctor mi blandit. Pellentesque in fringilla orci. Pellentesque non gravida odio. Nam feugiat, lectus id blandit semper, dui massa sagittis sapien, non commodo mi nibh ut quam. Quisque rutrum euismod nisl, nec aliquam metus tempus et.</p>
        </div>
      )}
    </div>
  );
};

export default Oferta;