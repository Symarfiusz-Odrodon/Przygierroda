import "./okienko.css"

import { useState } from "react";
import Popup from "reactjs-popup";

import ciasteczko from '../zdjęcia/ikony/cookies-icon.png';
import krzyżyk from "../zdjęcia/ikony/krzyżyk.png"

export const WyskakująceOkienko = () => {
    const [krzyżykOkienka, ustawKrzyżykOkienka] = useState(false);
    return (
      <div className="ustawieniaStrony" onClick={() => ustawKrzyżykOkienka(true)}><img src={ciasteczko} alt="ciasteczko"/>
        <Popup open={krzyżykOkienka}>
          <div id="główny">
            <div id="wnętrze">
              <div id="krzyżyk" onClick={()=>ustawKrzyżykOkienka(false)}><img src={krzyżyk} alt="zamknij" /></div>
              Twój stary
            </div>
          </div>
        </Popup>
      </div>
    )
}