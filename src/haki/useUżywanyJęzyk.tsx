import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import polski from '../zdjęcia/ikony/poland-flag-icon.png';
import angielski from '../zdjęcia/ikony/united-kingdom-flag-icon.png'
import niemiecki from '../zdjęcia/ikony/germany-flag-icon.png'
import rosyjski from '../zdjęcia/ikony/russia-flag-icon.png'

var który: number;

export const useUżywanyJęzyk = (): [string, () => void] => {
  const [ciasteczka, ustawCiasteczka] = useCookies(["jakiJezyk"]);

    useEffect(()=>{
      for(var i:number = 0; i < tablicaJęzykówWStringach.length; i++){
        if(ciasteczka.jakiJezyk == tablicaJęzykówWStringach[i]){
          który = i;
          ustawJęzyk(tablicaDostępnychJęzyków[który]);
          console.log(tablicaJęzykówWStringach[który]+" "+który);
          break;
        }
      }
    },[]);

    const tablicaDostępnychJęzyków: Array<string>  = [polski, angielski, niemiecki, rosyjski];
    var tablicaJęzykówWStringach: Array<string> = ["polski", "english", "deutsch", "русский"]
    
    const [używanyJęzyk, ustawJęzyk] = useState<string>(tablicaDostępnychJęzyków[który]);

    const zmieńJęzyk: () => void = () => {
      if(który+1 == tablicaDostępnychJęzyków.length){
        który = 0;
      } else {
        który+= 1;
      }

      ustawJęzyk(tablicaDostępnychJęzyków[który]);
      ustawCiasteczka("jakiJezyk", tablicaJęzykówWStringach[który], {path: "/", expires: new Date(Date.now() + 5*24*3600*1000)});

      
    };

    return [używanyJęzyk, zmieńJęzyk];
};