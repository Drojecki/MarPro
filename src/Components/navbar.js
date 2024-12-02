import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
    return (
        <div className='flex outside'>
            <div className='navbar font'>
                <div className='Name'>
                    <a href='./'>
                        {/* <img src='./icons/Package.png' /> */}
                        <p><span className="mar">MAR</span><span className="pro">PRO</span></p>
                        </a>
                </div>
                <NavLink to="/" className={({ isActive }) => isActive ? 'current' : ''}>
                    <p>STRONA GŁÓWNA</p>
                </NavLink>
                <NavLink to="/oferta" className={({ isActive }) => isActive ? 'current' : ''}>
                    <p>OFERTA</p>
                </NavLink>
                <NavLink to="/realizacje" className={({ isActive }) => isActive ? 'current' : ''}>
                    <p>REALIZACJE</p>
                </NavLink>
                <NavLink to="/kontakt" className={({ isActive }) => isActive ? 'current' : ''}>
                    <p>KONTAKT</p>
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
