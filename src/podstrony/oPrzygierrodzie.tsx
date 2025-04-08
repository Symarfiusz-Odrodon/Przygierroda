import "./podstrony.css";

import { useForm } from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import emailjs from "@emailjs/browser";
import React from "react";
import { useTranslation } from "react-i18next";

var czyPoprawne: boolean = false;

const OPrzygierrodzie = () => {
    const {t} = useTranslation();
    const schemat  = yup.object().shape({
        Zwrot: yup.mixed().oneOf(["Pan", "Pani", "Nie trzeba ;)"]).notRequired(),
        Imię: yup.string().min(1).max(20).notRequired(),
        Nazwisko: yup.string().min(1).max(20).notRequired(),
        Email: yup.string().email().notRequired(),
        Wiadomość: yup.string().required()
    });
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schemat),
    });
    const wyślij = async(e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        if(czyPoprawne){
            emailjs.sendForm("service_hrr5baa", "template_09khmjk", e.currentTarget, "UEh7a2bTU5Bz-UoX6")
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
            );
        }
        
    }
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
        return czyPoprawne
    };

    return (
        <div id="zawartośćPodstrony" >
            
            <div id="oNas">
                <div className="wiadomości">
                    <h2>{t('nawiPasek.oNas')}</h2>
                    <p>Jesteśmy (na chwilę obecną jednoosbową) polskim przedsiębiorstwem grotwórczym o wielkich ambicjach. Dążymy do stworzenia najlepszych i wnoszących nowe argumenty do rozmów produktów.</p>
                </div>
            </div>
            <div id="naszeGry">
                <div className="wiadomości">
                    <h2>Nasze Gry</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu mi in nisl egestas euismod eu commodo neque. Curabitur non nulla sem. Curabitur vitae blandit orci. Nullam id neque consequat, efficitur lectus vitae, interdum velit. Quisque hendrerit imperdiet rutrum. Ut et eros vitae sem faucibus placerat. Etiam est eros, varius in leo at, gravida efficitur mauris. Nulla a arcu nunc. Phasellus vel leo a mauris auctor cursus nec nec sapien. Curabitur ultricies blandit ante, sed blandit nibh sollicitudin sit amet. Nam leo mi, suscipit at ex eu, lacinia dapibus mi. Nulla facilisi. Mauris magna est, elementum nec eros id, malesuada accumsan nisl. Donec commodo lacus justo, non ultricies felis molestie in. Suspendisse potenti.</p>
                </div>
            </div>
            <div id="kontakt">
                <div className="wiadomości">
                    <h2>Kontakt</h2>
                    <p>Na chwilę obecną nie zamierzamy podawać naszego adresu e-mail. Jednakże możesz wypełnićten formularz, a efekt będzie taki sam!</p>
                    <div className="formularz">
                        <form onSubmit={wyślij}>
                            <div>
                                <select {...register("Zwrot")} name="zwrotGrzecznościowy" required defaultValue="--zwrot grzecznościowy--">
                                    <option value="Pan">Pan</option>
                                    <option value="Pani">Pani</option>
                                    <option value="Nie trzeba ;)">Nie trzeba ;)</option>
                                </select>
                                <p>{errors.Zwrot?.message}</p>
                                <input type="text" placeholder="Imię"  {...register("Imię")} name="imię" required/>
                                <p>{errors.Imię?.message}</p>
                                <input type="text" placeholder="Nazwisko" {...register("Nazwisko")} name="nazwisko" required/>
                                <p>{errors.Nazwisko?.message}</p>
                                <input type="email" placeholder="Email" {...register("Email")} name="adresEmail" required/>
                                <p>{errors.Email?.message}</p>
                                <p>{errors.Imię?.message}</p>
                                <input type="submit" placeholder="Potwierdź" onClick={() => sprawdźCzyPoprawne()}/>
                                {czyPoprawne && <p className="success-message">Wiadomość pomyślnie wysłana!</p>}
                            </div>
                            <div>
                                <textarea placeholder="Twoja wiadomość" cols={30} rows={10} {...register("Wiadomość")} name="treść" required></textarea>
                                <p>{errors.Wiadomość?.message}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="media">
                <div className="wiadomości">
                    <h2>Media Społecznościowe</h2>
                    <p>Jeśli byłbyś tym zainteresowany, mógłbyś nas zaobserwować na jednym z tych mediów społecznościowych! Nie pożałujesz tego!</p>
                </div>
            </div>

            <div></div>

        </div>
    )
};

export default OPrzygierrodzie;