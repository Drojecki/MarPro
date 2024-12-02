import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Navbar from './navbar';
import MainContent from './MainContent';
import Oferta from './Oferta'; 
import Realizacje from './Realizacje'; 
import Kontakt from './Kontakt';
import Polityka from './Polityka';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/oferta" element={<Oferta />} />
        <Route path="/realizacje" element={<Realizacje />} />
        <Route path="/kontakt" element={<Kontakt/>} />
        <Route path="/polityka-prywatnosci" element={<Polityka/>} />
      </Routes>
      <Header />
    </Router>
  );
}

export default App;
