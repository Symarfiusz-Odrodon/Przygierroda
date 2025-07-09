import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react';
import { Nawigacja } from './komponenty/Nawigacja';
import { Context } from 'vm';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';
import { WyskakująceOkienko } from './komponenty/WyskakująceOkienko';

import logo from'./zdjęcia/logo.png';
import ciasteczko from './zdjęcia/ikony/cookies-icon.png';
import polski from './zdjęcia/ikony/poland-flag-icon.png';
import angielski from './zdjęcia/ikony/united-kingdom-flag-icon.png'
import niemiecki from './zdjęcia/ikony/germany-flag-icon.png'
import rosyjski from './zdjęcia/ikony/russia-flag-icon.png'

import { useUżywanyJęzyk } from './haki/useUżywanyJęzyk';

import ZanieśDoKotwicy from './komponenty/ZanieśDoKotwicy';

import OPrzygierrodzie from './podstrony/oPrzygierrodzie';
import WesprzyjNas from './podstrony/WesprzyjNas';
import Praca from './podstrony/praca';
import Regulamin from './podstrony/regulamin';
import ListaJęzyków from './komponenty/ListaJęzyków';



function App() {

  const [widocznośćCiastek, ustawWidocznośćCiastek] = useState<boolean>(false);
  const [widocznośćPaskaJęzyków, ustawWidocznośćPaskaJęzyków] = useState<boolean>(false);

  const{ i18n } = useTranslation();

    const [używanyJęzyk, nazwa, zmieńJęzyk] = useUżywanyJęzyk();
    const dostępneJęzyki = [
        {język: "Polski", ikona: polski, kod:"pl"},
        {język: "Angielski", ikona: angielski, kod:"en"},
        {język: "Niemiecki", ikona: niemiecki, kod:"de"},
        {język: "Rosyjski", ikona: rosyjski, kod:"ru"}
    ];

  const ustawJęzyk = (kod: string, ikona: string) => {
        // i18n.changeLanguage(kod).then(() => {
        //     window.location.reload();
        // });
        i18n.changeLanguage(kod);
        zmieńJęzyk(ikona);
        ustawWidocznośćPaskaJęzyków(false);
    }

  const [ciasteczka, ustawCiasteczka] = useCookies(["czyPokazacOkienko","czyZezwalaNaZPU","czyZezwalaNaZAI","jakiJezyk"]);
  useEffect(() => {
    if(!ciasteczka.czyZezwalaNaZPU){
      ustawCiasteczka("jakiJezyk", null);
    }
    if(ciasteczka.czyPokazacOkienko == null){
      ustawCiasteczka("czyPokazacOkienko", false, {path: "/", expires: new Date(Date.now() + 5*24*3600*1000)});
      ustawCiasteczka("czyZezwalaNaZPU", true, {path: "/", expires: new Date(Date.now() + 5*24*3600*1000)});
      ustawCiasteczka("czyZezwalaNaZAI", true, {path: "/", expires: new Date(Date.now() + 5*24*3600*1000)});
      ustawCiasteczka("jakiJezyk", "Polski", {path: "/", expires: new Date(Date.now() + 5*24*3600*1000)});
      ustawWidocznośćCiastek(true);
    }
  }, [ciasteczka.czyPokazacOkienko == null]);
  
  return (
    <Router><ZanieśDoKotwicy/>
    <div className="App">
      <div id="przyklejonaCzęść"  className="sticky">
        <header>
          <div className="logo"><img className="zdjęcieLogo" width={200} height={200} src={logo} alt="logo" /></div>
        </header>
        <Nawigacja/>
      </div>
      <div className="przybocznyPasek">
        <div className="ustawieniaStrony">
          <img src={ciasteczko} alt="ciasteczko" onClick={() => ustawWidocznośćCiastek(!widocznośćCiastek)}/>
        </div>
        <div className="ustawieniaStrony" onClick={() => ustawWidocznośćPaskaJęzyków(!widocznośćPaskaJęzyków)}>
          <img src={(używanyJęzyk as string)} alt={nazwa as string}/>
        </div>
      </div>
      <ListaJęzyków 
        czyOtwarty={widocznośćPaskaJęzyków}
        używanyJęzyk={używanyJęzyk as string}
        dostępneJęzyki={dostępneJęzyki}
        ustawJęzyk={ustawJęzyk}
      />
      <WyskakująceOkienko
        czyOtwarty={widocznośćCiastek}
        ustawWidocznośćCiastek={ustawWidocznośćCiastek}
      />
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