import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ZanieśDoKotwicy() {
    const położenie = useLocation();
    const ostatniHasz = useRef('');

    useEffect(() => {
        if(położenie.hash) {
            ostatniHasz.current = położenie.hash.slice(1);  
        }

        if(ostatniHasz.current && document.getElementById(ostatniHasz.current)){
            setTimeout(() => {
                document.getElementById(ostatniHasz.current)?.scrollIntoView({behavior: 'smooth', block:'start'});
                ostatniHasz.current = '';
            }, 100);
        }
    }, [położenie]);
    return null;
}

export default ZanieśDoKotwicy;