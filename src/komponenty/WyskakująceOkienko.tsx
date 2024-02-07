import "./okienko.css"

import { useState } from "react";
import Popup from "reactjs-popup";

import ciasteczko from '../zdjęcia/ikony/cookies-icon.png';
import krzyżyk from "../zdjęcia/ikony/krzyżyk.png"
import { Cookie } from "universal-cookie";
import { useCookies } from "react-cookie";
import { string } from "yup";

// export const [czyZezwoliłNaZapamiętywaniePreferencji, ustawPreferencjeOZP] = useState<boolean>(true);
// export const [czyZezwoliłNaZbieranieDanych, ustawPreferencjeOZD] = useState<boolean>(true);

export const WyskakująceOkienko = () => {
    const [ciasteczka, ustawCiasteczka] = useCookies(["czyPokazacOkienko","czyZezwalaNaZPU","czyZezwalaNaZAI"]);
    
    const [krzyżykOkienka, ustawKrzyżykOkienka] = useState<boolean>(ciasteczka.czyPokazacOkienko);
    const [zezwolenieNaZAI, ustawZezwolenieZAI] = useState<boolean>(ciasteczka.czyZezwalaNaZAI);
    const [zezwolenieNaZPU, ustawZezwolenieZPU] = useState<boolean>(ciasteczka.czyZezwalaNaZPU);

    const zamknijOkienko = (czyZatwierdzić: boolean = false, czyWszystkoPotwierdzić: boolean = false) => {
      ustawKrzyżykOkienka(false); 
      ustawCiasteczka("czyPokazacOkienko", false, {path: "/", expires: new Date(Date.now() + 5*24*3600*1000)});
      if(czyZatwierdzić){
        ustawCiasteczka("czyZezwalaNaZAI", zezwolenieNaZAI, {path: "/", expires: new Date(Date.now() + 5*24*3600*1000)});
        ustawCiasteczka("czyZezwalaNaZPU", zezwolenieNaZPU, {path: "/", expires: new Date(Date.now() + 5*24*3600*1000)});        
      }
      if (czyWszystkoPotwierdzić){
        ustawCiasteczka("czyZezwalaNaZAI", true, {path: "/", expires: new Date(Date.now() + 5*24*3600*1000)});
        ustawCiasteczka("czyZezwalaNaZPU", true, {path: "/", expires: new Date(Date.now() + 5*24*3600*1000)});
        ustawZezwolenieZAI(true);
        ustawZezwolenieZPU(true)
      }
      console.log(ciasteczka);
    }

    return (
      <div className="ustawieniaStrony" onClick={() => ustawKrzyżykOkienka(true)}><img src={ciasteczko} alt="ciasteczko"/>
        <Popup open={krzyżykOkienka}>
          <div id="główny">
            <div id="wnętrze">
              <div id="krzyżyk" onClick={() => zamknijOkienko()}><img src={krzyżyk} alt="zamknij" /></div>
              
              <h1>Używamy ciasteczek!</h1>
              <b><p>I choć wierzemy, że czasami trzeba osłodzić swoje życie, tak też rozumiemy Twoją chęć prywatności i ją szanujemy.</p></b>
              
              <div id="wajchy">
                <p>Ciasteczka zapamiętujące preferencje użytkownika.</p>
                <label className="wajcha">
                  <input type="checkbox" defaultChecked={ciasteczka.czyZezwalaNaZPU} onClick={()=>ustawZezwolenieZPU(!zezwolenieNaZPU)}/>
                  <span className="suwak"></span>
                </label>
                <p>Ciasteczka zbierające anonimowo informacje na temat odwiedzonych części stron.</p>
                <label className="wajcha">
                  <input type="checkbox" defaultChecked={ciasteczka.czyZezwalaNaZAI} onClick={()=>ustawZezwolenieZAI(!zezwolenieNaZAI)}/>
                  <span className="suwak"></span>
                </label>
              </div>
              <div id="przyciski">
                <button onClick={() => zamknijOkienko(false, true)}>Potwierdź wszystkie</button>
                <button onClick={() => zamknijOkienko(true)}>Zapisz Wybór</button>
              </div>
            </div>
          </div>
        </Popup>
      </div>
    )
}