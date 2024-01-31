import "./okienko.css"

import Popup from "reactjs-popup";

import ciasteczko from '../zdjęcia/ikony/cookies-icon.png';

export const WyskakująceOkienko = () => {
    
    return (
        <Popup trigger={<div className="ustawieniaStrony"><img src={ciasteczko} alt="ciasteczko"/></div>}>
          <div id="główny">Twój stary</div>
        </Popup>
    )
}