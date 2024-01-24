import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react';
//import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Context } from 'vm';

import logo from'./zdjęcia/logo.png';
import ciasteczko from './zdjęcia/ikony/cookies-icon.png';

import { useUżywanyJęzyk } from './haki/useUżywanyJęzyk';

import OPrzygierrodzie from './podstrony/oPrzygierrodzie';
import WesprzyjNas from './podstrony/WesprzyjNas';
import Praca from './podstrony/praca';
import Regulamin from './podstrony/regulamin';

function App() {

  const [używanyJęzyk, zmieńJęzyk] = useUżywanyJęzyk();

  console.log(używanyJęzyk);

  return (
    <Router>
    <div className="App">
      <div id="przyklejonaCzęść"  className="sticky">
        <header>
          <div className="logo"><img className="zdjęcieLogo" width={200} height={200} src={logo} alt="logo" /></div>
        </header>
        <nav>
          <Link to="/"><div className="przyciskNaglowka">O Nas</div></Link>
          <Link to="/"><div className="przyciskNaglowka">Nasze Gry</div></Link>
          <Link to="/"><div className="przyciskNaglowka">Kontakt</div></Link>
          <Link to="/"><div className="przyciskNaglowka">Media Socjalne</div></Link>
          <Link to="/wesprzyjnas"><div className="przyciskNaglowka">Wesprzyj Nas!</div></Link>
          <Link to="/praca"><div className="przyciskNaglowka">Praca</div></Link>
          <Link to="/regulamin"><div className="przyciskNaglowka">Regulamin</div></Link>
        </nav>
      </div>
      <div className="przybocznyPasek sticky">
            <div className="ustawieniaStrony">
              <img src={ciasteczko} alt="ciasteczko"/>
            </div>
            <a onClick={() => zmieńJęzyk}>
              <div className="ustawieniaStrony">
                <img src={(używanyJęzyk as string)} alt="język"/>
              </div>
            </a>
          </div>
      <div id="stałaCzęść">
        <section id="lewaNauka"></section>
        <section id="głównaŚrodkowa">
                <Routes>
                  <Route path='/' element={<OPrzygierrodzie/>}/>
                  <Route path='/wesprzyjnas' element={<WesprzyjNas/>}/>
                  <Route path='/praca' element={<Praca/>}/>
                  <Route path='/regulamin' element={<Regulamin/>}/>
                </Routes>
        </section>
        <section id="prawaDrzewo"></section>
      </div>
    </div>
    </Router>
  );
}

export default App;
