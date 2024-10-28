import React from 'react';
import '../css/navbar.css'
function Navbar() {
    return (
        <>
            <div className='flex outside'>
                <div className='navbar font'>
                    <a href='./'>
                        <p className='current'>STRONA GŁOWNA</p>
                    </a>
                    <a href='./oferta'>
                        <p>OFERTA</p>
                    </a>
                    <a href='./realizacje'>
                        <p>REALIZACJE</p>
                    </a>
                    <a href='./cennik'>
                        <p>CENNIK</p>
                    </a>
                    <a href='./kontakt'>
                        <p>KONTAKT</p>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Navbar;