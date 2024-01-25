import { useState } from "react";
import polski from '../zdjęcia/ikony/poland-flag-icon.png';
import angielski from '../zdjęcia/ikony/united-kingdom-flag-icon.png'
import niemiecki from '../zdjęcia/ikony/germany-flag-icon.png'
import rosyjski from '../zdjęcia/ikony/russia-flag-icon.png'

export const useUżywanyJęzyk = (): [string, () => void] => {
    const tablicaDostępnychJęzyków: Array<string>  = [polski, angielski, niemiecki, rosyjski];
    const [używanyJęzyk, ustawJęzyk] = useState<string>(polski);
    const [który, ustawKtóry] = useState<number>(0);

    const zmieńJęzyk: () => void = () => {
      if(który+1 == tablicaDostępnychJęzyków.length){
        ustawKtóry(0);
      } else {
        ustawKtóry(który+1);
      }

      ustawJęzyk(tablicaDostępnychJęzyków[który])

      
    };

    return [używanyJęzyk, zmieńJęzyk];
};