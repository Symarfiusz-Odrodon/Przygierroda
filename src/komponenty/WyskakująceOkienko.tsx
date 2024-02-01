import "./okienko.css"

import Popup from "reactjs-popup";

import ciasteczko from '../zdjęcia/ikony/cookies-icon.png';
import krzyżyk from "../zdjęcia/ikony/krzyżyk.png"

export const WyskakująceOkienko = () => {
    
    return (
        <Popup trigger={<div className="ustawieniaStrony"><img src={ciasteczko} alt="ciasteczko"/></div>}>
          <div id="główny">
            <div id="wnętrze">
              <div id="krzyżyk"><img src={krzyżyk} alt="zamknij" /></div>
              Twój stary
            </div>
          </div>
        </Popup>
    )
}