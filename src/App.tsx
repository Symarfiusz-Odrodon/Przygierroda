import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Context } from 'vm';

import logo from'./zdjęcia/logo.png'; 
import OPrzygierrodzie from './podstrony/oPrzygierrodzie';

export const AppContext: Context = createContext("");

function App() {

  return (
    <Router>
    <div className="App">
      <div id="przyklejonaCzęść"  className="sticky">
        <header>
          <div className="logo"><img className="zdjęcieLogo" width={200} height={200} src={logo} alt="logo" /></div>
          <div className="przybocznyPasek">
            <img src="" alt="" className="ustawieniaStrony" />
            <img src="" alt="" className="ustawieniaStrony" />
            <img src="" alt="" className="ustawieniaStrony" />
          </div>
        </header>
        <nav>
          <Link to="/podstrony/oPrzygierrodzie"><div className="przyciskNaglowka">O Nas</div></Link>
          <Link to="/"><div className="przyciskNaglowka">Nasze Gry</div></Link>
          <Link to="/"><div className="przyciskNaglowka">Kontakt</div></Link>
          <Link to="/"><div className="przyciskNaglowka">Media Socjalne</div></Link>
          <Link to="/"><div className="przyciskNaglowka">Wesprzyj Nas!</div></Link>
          <Link to="/"><div className="przyciskNaglowka">Praca</div></Link>
          <Link to="/"><div className="przyciskNaglowka">Regulamin</div></Link>
        </nav>
      </div>
      <div id="stałaCzęść">
        <section id="lewaNauka"></section>
        <section id="głównaŚrodkowa">
                <Routes>
                  <Route path='/' element={<OPrzygierrodzie/>}/>
                  <Route path='/'/>
                  <Route/>
                  <Route/>
                </Routes>
        </section>
        <section id="prawaDrzewo"></section>
      </div>
    </div>
    </Router>
  );
}

export default App;
