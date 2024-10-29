import { LinksFunction } from "@remix-run/cloudflare";
import { MetaFunction } from "@remix-run/react";
import ProjectContainer from "~/components/ProjectContainer";
import ProjectHead from "~/components/ProjectHead";

export const links: LinksFunction = () => {
    return [{
        rel: 'canonical', href: "https://dariofurlan.it/case_study/PythIA"
    }];
};

export const meta: MetaFunction = () => {
    return [
        { title: "PythIA: Assistente Virtuale per Call Center | Case Study di Dario Furlan" },
        {
            name: "description",
            content: "Scopri PythIA, l’assistente virtuale sviluppato da Dario Furlan per il supporto ai call center nel settore automobilistico. Basato su AI, PythIA fornisce analisi del sentimento e suggerimenti in tempo reale, migliorando le interazioni con i clienti e la qualità del servizio."
        },
    ];
};

export default function PythIA() {
    return <ProjectContainer>
        <ProjectHead
            title="PythIA"
            description={<>realizzata in collaborazione con <a target="_blank" rel="noopener noreferrer" className="link-accent" href="https://sgiservizi.net/">SGI Servizi S.R.L.</a> come progetto di stage universitario <a target="_blank" rel="noopener noreferrer" className="link-accent" href="https://unipd.it/">Università di Padova</a></>}
            icon="/icon/pythia_lg.png"
        />
        <p className="prose mx-auto">
            Durante il mio progetto di stage con l&apos;Università di Padova presso SGI Servizi, ho sviluppato un assistente virtuale per gli operatori di call center di una casa automobilistica. Questo strumento, progettato per supportare le campagne di rifidelizzazione, analizza in tempo reale le conversazioni telefoniche e suggerisce agli operatori i migliori consigli in base all'umore dell'interlocutore. Alla fine di ogni chiamata, l'assistente fornisce un feedback dettagliato sul sentimento dell'utente e un riepilogo dei punti salienti della conversazione, migliorando così l'efficacia delle interazioni e la qualità del servizio offerto.
        </p>
    </ProjectContainer>
}