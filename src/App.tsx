import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react';
//import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Context } from 'vm';
import { useCookies } from 'react-cookie';
import { WyskakująceOkienko } from './komponenty/WyskakująceOkienko';
import "./i18n";
import { useTranslation } from 'react-i18next';

import logo from'./zdjęcia/logo.png';

import { useUżywanyJęzyk } from './haki/useUżywanyJęzyk';

import ZanieśDoKotwicy from './komponenty/ZanieśDoKotwicy';

import OPrzygierrodzie from './podstrony/oPrzygierrodzie';
import WesprzyjNas from './podstrony/WesprzyjNas';
import Praca from './podstrony/praca';
import Regulamin from './podstrony/regulamin';



function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  const [ciasteczka, ustawCiasteczka] = useCookies(["czyPokazacOkienko","czyZezwalaNaZPU","czyZezwalaNaZAI","jakiJezyk"]);
  useEffect(() => {
    if(!ciasteczka.czyZezwalaNaZPU){
      ustawCiasteczka("jakiJezyk", null);
    }
    if(ciasteczka.czyPokazacOkienko == null){
      ustawCiasteczka("czyPokazacOkienko", true, {path: "/", expires: new Date(Date.now() + 5*24*3600*1000)});
      ustawCiasteczka("czyZezwalaNaZPU", true, {path: "/", expires: new Date(Date.now() + 5*24*3600*1000)});
      ustawCiasteczka("czyZezwalaNaZAI", true, {path: "/", expires: new Date(Date.now() + 5*24*3600*1000)});
      ustawCiasteczka("jakiJezyk", "Polski", {path: "/", expires: new Date(Date.now() + 5*24*3600*1000)})
    }
  }, [ciasteczka.czyPokazacOkienko == null]);
  

  const [używanyJęzyk, nazwa, zmieńJęzyk] = useUżywanyJęzyk();
  
  return (
    <Router><ZanieśDoKotwicy/>
    <div className="App">
      <div id="przyklejonaCzęść"  className="sticky">
        <header>
          <div className="logo"><img className="zdjęcieLogo" width={200} height={200} src={logo} alt="logo" /></div>
        </header>
        <nav>
          <Link to="/#oNas"><div className="przyciskNaglowka">{t("oNas")}</div></Link>
          <Link to="/#naszeGry"><div className="przyciskNaglowka">{t("naszeGry")}</div></Link>
          <Link to="/#kontakt"><div className="przyciskNaglowka">{t("kontakt")}</div></Link>
          <Link to="/#media"><div className="przyciskNaglowka">{t("media")}</div></Link>
          <Link to="/wesprzyjnas"><div className="przyciskNaglowka">Wesprzyj Nas!</div></Link>
          <Link to="/praca"><div className="przyciskNaglowka">Praca</div></Link>
          <Link to="/regulamin"><div className="przyciskNaglowka">Regulamin</div></Link>
        </nav>
      </div>
      <div className="przybocznyPasek">
        <WyskakująceOkienko></WyskakująceOkienko>
        <a onClick={() => zmieńJęzyk()}>
          <div className="ustawieniaStrony">
            <img src={(używanyJęzyk as string)} alt="język"/>
          </div>
        </a>

      </div>
      <div id="stałaCzęść">
        <section id="lewaNauka"></section>
        <section id="głównaCzęść">
          <section id="głównaŚrodkowa">
                  <Routes>
                    <Route path='/' element={<OPrzygierrodzie/>}/>
                    <Route path='/wesprzyjnas' element={<WesprzyjNas/>}/>
                    <Route path='/praca' element={<Praca/>}/>
                    <Route path='/regulamin' element={<Regulamin/>}/>
                  </Routes>
          </section>
        </section>
        <section id="prawaDrzewo"></section>
      </div>
    </div>
    </Router>
  );
}

export default App;