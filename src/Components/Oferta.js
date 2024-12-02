import React from 'react';
import "../css/oferta.css"
import Card from './Card';
const Oferta = () => {
  const MarginBottom = {
    marginBottom: '90px',
  };
  const textSchody = "Specjalizujemy się w projektowaniu, produkcji i montażu schodów drewnianych. Łączymy tradycyjne rzemiosło z nowoczesnymi technologiami, aby dostarczyć produkty, które zachwycają trwałością, funkcjonalnością i estetyką. Z pasją tworzymy schody, które łączą funkcjonalność z niepowtarzalnym designem, nadając przestrzeni wyjątkowy charakter."
  const textSchodyV2 = "Tworzymy schody na miarę, dopasowane do każdego wnętrza — od klasycznych po nowoczesne projekty. Korzystamy wyłącznie z najwyższej jakości drewna, które podkreśla naturalne piękno i dodaje ciepła każdemu pomieszczeniu. Zapewniamy indywidualne podejście do każdego zlecenia, dbając o każdy detal, od pierwszego szkicu aż po montaż."

  const textKuchnia = "Tworzymy kuchnie na miarę Twoich marzeń! Specjalizujemy się w projektowaniu i produkcji mebli kuchennych, które łączą estetykę, funkcjonalność i najwyższą jakość wykonania. Każda nasza kuchnia jest unikalna, dostosowana do potrzeb i stylu życia naszych klientów."
  const textKuchniaV2 = "Nasze kuchnie powstają z najlepszych materiałów, co gwarantuje trwałość i łatwość w utrzymaniu. Oferujemy szeroki wybór stylów — od nowoczesnych, minimalistycznych aranżacji po klasyczne i rustykalne projekty. Dbamy o każdy detal, aby Twoja kuchnia była nie tylko piękna, ale również wygodna i praktyczna."

  return (
    <>
      <Card text={textSchody} text2={textSchodyV2} img='Schody.jpeg'></Card>
      <Card text={textKuchnia} text2={textKuchniaV2} img='Kuchnia.JPG'></Card>
      <div className='kreska'></div>
      <div style={MarginBottom}>
        <div style={{ textAlign: 'center' }}>
          <h1>Jak działamy?</h1>
        </div>
        <div className='kartyDisplay' style={{ gap: '20px', justifyContent: 'center' }}>
          <div className='CardStyle'>
            <img className='ImgDziałanie' src='./oferta/Dymek.png' alt='dymek'/>
            <p className='Bold'>Rozmowa</p>
            <p>Zapraszamy do kontaktu! Chętnie omówimy szczegóły współpracy i pomożemy dopasować nasze rozwiązania do Twoich oczekiwań.</p>
          </div>
          <div className='CardStyle'>
            <img className='ImgDziałanie' src='./oferta/Kartka.png' alt='kartka'/>
            <p className='Bold'>Wycena</p>
            <p>Opracujemy szczegółową ofertę wraz z terminem realizacji</p>
          </div>
          <div className='CardStyle'>
            <img className='ImgDziałanie' src='./oferta/Schody.webp' alt='schody'/>
            <p className='Bold'>Realizacja</p>
            <p>Zrealizujemy projekt w pełni, zgodnie z ustalonymi wcześniej warunkami.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Oferta;