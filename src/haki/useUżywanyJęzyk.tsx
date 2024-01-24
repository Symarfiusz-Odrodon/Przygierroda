import { useState } from "react";
import polski from '../zdjęcia/ikony/poland-flag-icon.png';
import angielski from '../zdjęcia/ikony/united-kingdom-flag-icon.png'
import niemiecki from '../zdjęcia/ikony/germany-flag-icon.png'
import rosyjski from '../zdjęcia/ikony/russia-flag-icon.png'


export const useUżywanyJęzyk = () =>{
    const tablicaDostępnychJęzyków: Array<string>  = [polski, angielski, niemiecki, rosyjski];
    const [używanyJęzyk, ustawJęzyk] = useState<string>(polski);

    const zmieńJęzyk= () => {
      if(tablicaDostępnychJęzyków.indexOf(używanyJęzyk) + 1 < tablicaDostępnychJęzyków.length){
        ustawJęzyk(tablicaDostępnychJęzyków[tablicaDostępnychJęzyków.indexOf(używanyJęzyk) + 1]);
        console.log(tablicaDostępnychJęzyków.indexOf(używanyJęzyk) + 1)
      } else {
        ustawJęzyk(polski);
      }
    }

    return [używanyJęzyk, zmieńJęzyk];
}