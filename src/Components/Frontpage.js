import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Navbar from './navbar';
import MainContent from './MainContent';
import Oferta from './Oferta'; 
import Realizacje from './Realizacje'; 
import Cennik from './Cennik';
import Kontakt from './Kontakt';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/oferta" element={<Oferta />} />
        <Route path="/realizacje" element={<Realizacje />} />
        <Route path="/cennik" element={<Cennik/>} />
        <Route path="/kontakt" element={<Kontakt/>} />
      </Routes>
    </Router>
  );
}

export default App;
