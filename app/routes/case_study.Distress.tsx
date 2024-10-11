import ProjectContainer from "~/components/ProjectContainer";
import ProjectHead from "~/components/ProjectHead";

export default function Distress() {
    return <ProjectContainer>
        <ProjectHead
            title="Simulatore Distress Corsoradio VHF"
            description={<>realizzata in autonomia</>}
            icon={<img className="rounded-xl h-16 w-16 shadow-xl shadow-gray-400" src="/icons/distress.png" alt="PythIA" />}
        />
        <p className="prose mx-auto">
            Ho sviluppato un simulatore in JavaScript per una radio nautica utilizzata per ricevere ed emettere segnali di distress, pensato per l'addestramento dei navigatori in ambito marittimo. Questo simulatore consente agli utenti dei corsi di familiarizzare con i vari segnali e con il funzionamento della radio, emulando le condizioni reali. L'introduzione del simulatore ha reso accessibile la pratica a un maggior numero di persone, eliminando la necessità di utilizzare dispositivi fisici che hanno un costo elevato e sono disponibili in numero limitato in Italia. Grazie a questo strumento, i partecipanti ai corsi possono esercitarsi e acquisire competenze pratiche prima di affrontare l'esame, migliorando la loro preparazione e sicurezza.
        </p>
    </ProjectContainer>
}