import "./podstrony.css";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { EmitFlags } from "typescript";

var czyPoprawne = false;

const OPrzygierrodzie = () => {
    const schemat  = yup.object().shape({
        Imię: yup.string().min(1).max(20).notRequired(),
        Nazwisko: yup.string().min(1).max(20).notRequired(),
        Email: yup.string().email().notRequired(),
        Wiadomość: yup.string().required()
    });
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schemat),
    });
    const gdyPotwierdzi = (dane: { Imię?: yup.Maybe<string | undefined>; Nazwisko?: yup.Maybe<string | undefined>; Email?: yup.Maybe<string | undefined>; Wiadomość: string; }) => {
        console.log(dane);
    }; 
    const sprawdźCzyPoprawne = () =>{
        if(Object.keys(errors).length === 0){
          czyPoprawne = true;
        } else {
          czyPoprawne =false;
        }
        console.log(czyPoprawne);
    };

    return (
        <div className="zawartośćPodstrony">
            <div id="oNas">
                <h1>Witamy w Przygierrodzie!</h1>
                <hr></hr>
                <h2>O Nas</h2>
                <p>Jesteśmy (na chwilę obecną jednoosbową) polskim przedsiębiorstwem grotwórczym o wielkich ambicjach. Dążymy do stworzenia najlepszych i wnoszących nowe argumenty do rozmów produktów.</p>
            </div>
            <hr></hr>
            <div id="naszeGry">
                <h2>Nasze Gry</h2>
                <p>dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd ddddddddddddddddddddddddddddddddddddd ddddddddddddddddddddddddddddddddddddddddddddddd 
                    ddddddddddddddddddddddddddddddddddddddddddddddd dddddddddddddddddddddddd ddddddddddddddd dddddddddddddddddddddddddddddddddddd dddddddddddddddddddddddd</p>
            </div>
            <hr></hr>
            <div id="kontakt">
                <h2>Kontakt</h2>
                <p>Na chwilę obecną nie zamierzamy podawać naszego adresu e-mail. Jednakże możesz wypełnićten formularz, a efekt będzie taki sam!</p>
                <form onSubmit={handleSubmit(gdyPotwierdzi)}>
                    <input type="text" placeholder="Imię" {...register("Imię")}/>
                    <p>{errors.Imię?.message}</p>
                    <input type="text" placeholder="Nazwisko" {...register("Nazwisko")}/>
                    <p>{errors.Nazwisko?.message}</p>
                    <input type="email" placeholder="Email" {...register("Email")}/>
                    <p>{errors.Email?.message}</p>
                    <p><p>{errors.Imię?.message}</p></p>
                    <textarea placeholder="Twoja wiadomość" cols={30} rows={10} {...register("Wiadomość")}></textarea>
                    <p>{errors.Wiadomość?.message}</p>
                    <input type="submit" placeholder="Potwierdź" onClick={() => sprawdźCzyPoprawne()}/>
                    {czyPoprawne ? <p>Konto utworzone!</p> : <p></p>}
                </form>

            </div>
            <hr />
            <div id="media">
                <h2>Media Społecznościowe</h2>
                <p>Jeśli byłbyś tym zainteresowany, mógłbyś nas zaobserwować na jednym z tych mediów społecznościowych! Nie pożałujesz tego!</p>
            </div>

        </div>
    )
};

export default OPrzygierrodzie;