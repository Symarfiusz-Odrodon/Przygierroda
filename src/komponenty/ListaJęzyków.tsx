import { useTranslation } from 'react-i18next';
import './ListaJęzyków.css';

interface Props {
    czyOtwarty: boolean;
    używanyJęzyk: string;
    dostępneJęzyki: Array<{
        kod: string;
        język: string;
        ikona: string;
    }>;
    ustawJęzyk: (kod: string, ikona: string) => void;
}

const ListaJęzyków = ({czyOtwarty, używanyJęzyk, dostępneJęzyki, ustawJęzyk}: Props) => {
    return(
        <div id="rozwijanaLista" className={czyOtwarty ? 'otwarte' : ''}>
            {dostępneJęzyki.map((język, index) => {
                if (używanyJęzyk !== język.ikona)
                    return <div key={index} onClick={() => ustawJęzyk(język.kod, język.ikona)} className="ustawieniaStrony ${czyOtwarty ? 'otwarte' : ''}">
                        <img src={język.ikona} alt="język"/>
                    </div>
            })}   
        </div>
    );
}

export default ListaJęzyków;