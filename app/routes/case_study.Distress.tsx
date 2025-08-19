import { LinksFunction } from "react-router";
import { MetaFunction } from "react-router";
import ProjectContainer from "~/components/ProjectContainer";
import ProjectHead from "~/components/ProjectHead";

export const links: LinksFunction = () => {
    return [{
        rel: 'canonical', href: "https://dariofurlan.it/case_study/Distress"
    }];
};

export const meta: MetaFunction = () => {
    return [
        { "title": "Distress: Simulatore Corsoradio VHF per Addestramento Marittimo | Case Study di Dario Furlan" },
        {
            "name": "description",
            "content": "Esplora Distress, un simulatore di corsoradio VHF sviluppato da Dario Furlan per l'addestramento marittimo. Questo strumento innovativo permette ai naviganti di familiarizzare con i segnali di emergenza, migliorando preparazione e sicurezza senza la necessità di apparecchiature fisiche costose."
        }
    ];
};

export default function Distress() {
    return <ProjectContainer>
        <ProjectHead
            title="Simulatore Distress Corsoradio VHF"
            description={<>realizzata in autonomia</>}
            icon="/icon/distress_lg.png"
        />
        <p className="prose mx-auto">
            Ho sviluppato un simulatore in JavaScript per una radio nautica utilizzata per ricevere ed emettere segnali di distress, pensato per l'addestramento dei navigatori in ambito marittimo. Questo simulatore consente agli utenti dei corsi di familiarizzare con i vari segnali e con il funzionamento della radio, emulando le condizioni reali. L'introduzione del simulatore ha reso accessibile la pratica a un maggior numero di persone, eliminando la necessità di utilizzare dispositivi fisici che hanno un costo elevato e sono disponibili in numero limitato in Italia. Grazie a questo strumento, i partecipanti ai corsi possono esercitarsi e acquisire competenze pratiche prima di affrontare l'esame, migliorando la loro preparazione e sicurezza.
        </p>
    </ProjectContainer>
}