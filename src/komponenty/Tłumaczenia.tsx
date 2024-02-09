import {useState, useEffect} from "react";
import * as XLSX from "xlsx"
import { useUżywanyJęzyk } from '../haki/useUżywanyJęzyk';

const Tłumaczenia = () => {
    const [tłumaczenia, ustawTłumaczenia] = useState({});

    useEffect(()=>{
        const czytnik = new FileReader();
        czytnik.readAsBinaryString(new File([""], "../../public/wersjeStrony.xlsx"));
        
        czytnik.onload = async (e) => {
            const dane = e.target?.result;
            console.log(dane);
            const workbook = XLSX.read(dane, {type: "binary"});
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const parsedData = XLSX.utils.sheet_to_json(sheet);
            ustawTłumaczenia(parsedData);
            console.log(tłumaczenia);
        }
    },[]);
    const [używanyJęzyk, nazwa, zmieńJęzyk] = useUżywanyJęzyk();
}

export default Tłumaczenia;