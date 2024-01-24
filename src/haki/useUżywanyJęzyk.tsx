import { useState } from "react";
import polski from '../zdjęcia/ikony/poland-flag-icon.png';
import angielski from '../zdjęcia/ikony/united-kingdom-flag-icon.png'
import niemiecki from '../zdjęcia/ikony/germany-flag-icon.png'
import rosyjski from '../zdjęcia/ikony/russia-flag-icon.png'


export const useUżywanyJęzyk = () =>{
    const tablicaDostępnychJęzyków: Array<string>  = [polski, angielski, niemiecki, rosyjski];
    const [używanyJęzyk, ustawJęzyk] = useState<string>(polski);
    let który: number = 0

    const zmieńJęzyk= () => {
      if(który++ < tablicaDostępnychJęzyków.length){
        ustawJęzyk(tablicaDostępnychJęzyków[który]);
        console.log(który)
      } else {
        ustawJęzyk(polski);
        console.log(który)
      }
      console.log(który)
    }

    return [używanyJęzyk, zmieńJęzyk];
}