import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, createContext } from 'react';
//import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Context } from 'vm';

import logo from'./zdjęcia/logo.png';
import ciasteczko from './zdjęcia/ikony/cookies-icon.png';
import polski from './zdjęcia/ikony/poland-flag-icon.png';
import angielski from './zdjęcia/ikony/united-kingdom-flag-icon.png'
import niemiecki from './zdjęcia/ikony/germany-flag-icon.png'
import rosyjski from './zdjęcia/ikony/russia-flag-icon.png'

import OPrzygierrodzie from './podstrony/oPrzygierrodzie';
import WesprzyjNas from './podstrony/WesprzyjNas';
import Praca from './podstrony/praca';
import Regulamin from './podstrony/regulamin';

function App() {

  const tablicaDostępnychJęzyków: Array<string>  = [polski, angielski, niemiecki, rosyjski];

  const [używanyJęzyk, ustawJęzyk] = useState<string>(polski);
  const zmieńJęzyk= () => {
    if(tablicaDostępnychJęzyków.indexOf(używanyJęzyk) + 1 < tablicaDostępnychJęzyków.length){
      ustawJęzyk(tablicaDostępnychJęzyków[tablicaDostępnychJęzyków.indexOf(używanyJęzyk) + 1]);
      console.log(tablicaDostępnychJęzyków.indexOf(używanyJęzyk) + 1)
    } else {
      ustawJęzyk(polski);
    }
  }

  return (
    <Router>
    <div className="App">
      <div id="przyklejonaCzęść"  className="sticky">
        <header>
          <div className="logo"><img className="zdjęcieLogo" width={200} height={200} src={logo} alt="logo" /></div>
          <div className="przybocznyPasek">
            <div className="ustawieniaStrony">
              <img src={ciasteczko} alt="ciasteczko"/>
            </div>
            <a onClick={zmieńJęzyk}>
              <div className="ustawieniaStrony">
                <img src={używanyJęzyk} alt="język"/>
              </div>
            </a>
          </div>
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
