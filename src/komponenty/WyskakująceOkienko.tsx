import "./okienko.css"

import { Dispatch, useState } from "react";

import krzyżyk from "../zdjęcia/ikony/krzyżyk.png"
import { useCookies } from "react-cookie";

// export const [czyZezwoliłNaZapamiętywaniePreferencji, ustawPreferencjeOZP] = useState<boolean>(true);
// export const [czyZezwoliłNaZbieranieDanych, ustawPreferencjeOZD] = useState<boolean>(true);

interface Props {
    czyOtwarty?: boolean;
    ustawWidocznośćCiastek?: Dispatch<React.SetStateAction<boolean>>;
}

export const WyskakująceOkienko = ({ czyOtwarty, ustawWidocznośćCiastek }: Props) => {
    const [ciasteczka, ustawCiasteczka] = useCookies(["czyZezwalaNaZPU","czyZezwalaNaZAI"]);
    
    const [zezwolenieNaZAI, ustawZezwolenieZAI] = useState<boolean>(ciasteczka.czyZezwalaNaZAI);
    const [zezwolenieNaZPU, ustawZezwolenieZPU] = useState<boolean>(ciasteczka.czyZezwalaNaZPU);

    const zamknijOkienko = (czyZatwierdzić: boolean = false, czyWszystkoPotwierdzić: boolean = false) => {
      ustawWidocznośćCiastek && ustawWidocznośćCiastek(false);
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
        <div id="wnętrze" className={czyOtwarty ? 'otwarte' : ''}>
          <div id="krzyżyk" onClick={() => zamknijOkienko()}><img src={krzyżyk} alt="zamknij" /></div>
              
          <h1>Używamy ciasteczka!</h1>
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
    )
}