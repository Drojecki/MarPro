import React from 'react';
import '../css/MainContent.css';

function MainContent() {
    return (
        <>
            <div className='ContainerMainContent font'>
                <img src='./icons/TEST.webp' alt='Kuchnia' />
                <div className='content'>
                    <p>MARPRO</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className='contactButton font'>Skontaktuj się</button>
                </div>
            </div>
        </>
    );
}

export default MainContent;
