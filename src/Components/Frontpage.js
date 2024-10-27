import React from 'react';
import Header from './Header';
import Navbar from './navbar';
import MainContent from './MainContent';

function FrontPage() {
    return (
        <>
            <div className='Container'>
               <Header/>
               <Navbar/>
               <MainContent/>
            </div>
        </>
    );
}

export default FrontPage;