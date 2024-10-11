import ProjectContainer from "~/components/ProjectContainer";
import ProjectHead from "~/components/ProjectHead";

export default function PythIA() {
    return <ProjectContainer>
        <ProjectHead
            title="PythIA"
            description={<>realizzata in collaborazione con <a target="_blank" rel="noopener noreferrer" className="link-accent" href="https://sgiservizi.net/">SGI Servizi S.R.L.</a> come progetto di stage universitario <a target="_blank" rel="noopener noreferrer" className="link-accent" href="https://unipd.it/">Università di Padova</a></>}
            icon={<img className="rounded-lg h-16 w-16 bg-white shadow-xl shadow-gray-400" src="/icon/pythia_1024.png" alt="PythIA" />}
        />
        <p className="prose mx-auto">
            Durante il mio progetto di stage con l'Università di Padova presso SGI Servizi, ho sviluppato un assistente virtuale per gli operatori di call center di una casa automobilistica. Questo strumento, progettato per supportare le campagne di rifidelizzazione, analizza in tempo reale le conversazioni telefoniche e suggerisce agli operatori i migliori consigli in base all'umore dell'interlocutore. Alla fine di ogni chiamata, l'assistente fornisce un feedback dettagliato sul sentimento dell'utente e un riepilogo dei punti salienti della conversazione, migliorando così l'efficacia delle interazioni e la qualità del servizio offerto.
        </p>
    </ProjectContainer>
}