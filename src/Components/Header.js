import React from 'react';
import '../css/Header.css'
function Header() {
    return (
        <>
            <div className='outsideHeader'>
                <div className='header'>
                    <div className='headerInfo'>
                        <div className='Name'>
                            <a href='./'>
                                <img src='./icons/Package.png' />
                                <p>MARPRO</p>
                            </a>
                        </div>
                        <div className='contactInfo'>
                            <div className='flex gap'>
                                <img src='./icons/Phone.png' />
                                <p>+99 123-456-789</p>
                            </div>
                            <div className='flex gap'>
                                <img src='./icons/Mail.png' />
                                <p>example@example.pl</p>
                            </div>
                        </div>
                        <div className='NameEmpty'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;