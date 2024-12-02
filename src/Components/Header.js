import React from 'react';
import '../css/Header.css'
function Header() {
    return (
        <>
            <div className='outsideHeader'>
                <div className='header'>
                    <div className='headerInfo'>
                        <div className='contactInfo'>
                            <div className='flex gap'>
                                <img src='./icons/Phone.png' alt='phone'/>
                                <p>+48 691-839-928</p>
                            </div>
                            <div className='flex gap'>
                                <img src='./icons/Mail.png' alt='mail'/>
                                <p>marpro.kontakt@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;