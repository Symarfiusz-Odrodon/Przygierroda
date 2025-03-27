import {useState, useEffect} from "react";
import { useUżywanyJęzyk } from '../haki/useUżywanyJęzyk';

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
        <div>
            <a onClick={() => ustawOtwarcie(!czyOtwarty)}>
                <div className="ustawieniaStrony">
                    <img src={(używanyJęzyk as string)} alt={nazwa as string}/>
                </div>
            </a>

            {czyOtwarty && <div id="tłumaczenia">
                {dostępneJęzyki.map((język, index) => {
                    if (używanyJęzyk !== język.ikona)
                    return <a key={index} onClick={() => ustawJęzyk(język.ikona)}>
                        <div className="ustawieniaStrony">
                            <img src={język.ikona} alt="język"/>
                        </div>
                    </a> 
                })}
            </div>}
        </div>
    );
}

export default Tłumaczenia;