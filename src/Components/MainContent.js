import React from 'react';
import '../css/MainContent.css';

function MainContent() {
    return (
        <>
            <div className='ContainerMainContent font'>
                <div className='backgroundImage'></div>
                <div className='content'>
                    <p>MARPRO</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className='contactButton font'><a href='./kontakt'>Skontaktuj się</a></button>
                </div>
            </div>
        </>
    );
}

export default MainContent;
