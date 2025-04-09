import {useState} from "react";
import { useUżywanyJęzyk } from '../haki/useUżywanyJęzyk';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Importowanie i18n, aby mieć dostęp do tłumaczeń

import '../komponenty/Tłumaczenia.css';

import polski from '../zdjęcia/ikony/poland-flag-icon.png';
import angielski from '../zdjęcia/ikony/united-kingdom-flag-icon.png'
import niemiecki from '../zdjęcia/ikony/germany-flag-icon.png'
import rosyjski from '../zdjęcia/ikony/russia-flag-icon.png'
import ListaJęzyków from "./ListaJęzyków";

const Tłumaczenia = () => {
    const{ i18n } = useTranslation();

    const [używanyJęzyk, nazwa, zmieńJęzyk] = useUżywanyJęzyk();
    const [czyOtwarty, ustawOtwarcie] = useState(false);
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
        ustawOtwarcie(false);
    }
    
    return (
        <div id="całokształt">
            <div className="ustawieniaStrony" onClick={() => ustawOtwarcie(!czyOtwarty)}>
                <img src={(używanyJęzyk as string)} alt={nazwa as string}/>
            </div>
        </div>
    );
}

export default Tłumaczenia;