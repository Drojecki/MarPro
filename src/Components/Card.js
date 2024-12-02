export default function Card({text ,img ,text2}) {
    return (
        <div className='oferta-kontener'>
            <div className='oferta-karta'>
                <div className='oferta-photo'>
                    <img className="ImgOferta" src={`./oferta/${img}`} alt={`${text}`}/>
                </div>
                <div className='oferta-text'>
                    <p className="fontOferta">{text}</p>
                    <p className="fontOferta">{text2}</p>
                </div>
            </div>
        </div>
    );
}