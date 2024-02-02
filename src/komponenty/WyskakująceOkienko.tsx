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
              
              <h1>Używamy ciasteczek!</h1>
              <b><p>I choć wierzemy, że czasami trzeba osłodzić swoje życie, tak też rozumiemy Twoją chęć prywatności i ją szanujemy.</p></b>
              
              <div id="wajchy">
                <p>Ciasteczka zapamiętujące preferencje użytkownika.</p>
                <label className="wajcha">
                  <input type="checkbox"/>
                  <span className="suwak"></span>
                </label>
                <p>Ciasteczka zbierające anonimowo informacje na temat odwiedzonych części stron.</p>
                <label className="wajcha">
                  <input type="checkbox"/>
                  <span className="suwak"></span>
                </label>
              </div>
              <div id="przyciski">
                <button onClick={()=>ustawKrzyżykOkienka(false)}>Potwierdź wszystkie</button>
                <button onClick={()=>ustawKrzyżykOkienka(false)}>Zapisz Wybór</button>
              </div>
            </div>
          </div>
        </Popup>
      </div>
    )
}