import {useState, useEffect} from "react";
import { useUżywanyJęzyk } from '../haki/useUżywanyJęzyk';
import '../komponenty/Tłumaczenia.css';

import polski from '../zdjęcia/ikony/poland-flag-icon.png';
import angielski from '../zdjęcia/ikony/united-kingdom-flag-icon.png'
import niemiecki from '../zdjęcia/ikony/germany-flag-icon.png'
import rosyjski from '../zdjęcia/ikony/russia-flag-icon.png'

const Tłumaczenia = () => {
    const [używanyJęzyk, nazwa, zmieńJęzyk] = useUżywanyJęzyk();
    const [czyOtwarty, ustawOtwarcie] = useState(false);
    const dostępneJęzyki = [
        {język: "Polski", ikona: polski},
        {język: "Angielski", ikona: angielski},
        {język: "Niemiecki", ikona: niemiecki},
        {język: "Rosyjski", ikona: rosyjski}
    ];

    const ustawJęzyk = (ikona: string) => {
        zmieńJęzyk(ikona);
        ustawOtwarcie(false);
    }
    
    return (
        <div id="całokształt">
            <div className="ustawieniaStrony" onClick={() => ustawOtwarcie(!czyOtwarty)}>
                <img src={(używanyJęzyk as string)} alt={nazwa as string}/>
            </div>

            <div id="rozwijanaLista" className={czyOtwarty ? 'otwarte' : ''}>
                {dostępneJęzyki.map((język, index) => {
                    if (używanyJęzyk !== język.ikona)
                        return <div key={index} onClick={() => ustawJęzyk(język.ikona)} className="ustawieniaStrony ${czyOtwarty ? 'otwarte' : ''}">
                            <img src={język.ikona} alt="język"/>
                        </div>
                })}   
            </div>
        </div>
    );
}

export default Tłumaczenia;