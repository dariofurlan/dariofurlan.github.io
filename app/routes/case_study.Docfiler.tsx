import { LinksFunction } from "@remix-run/cloudflare";
import { MetaFunction } from "@remix-run/react";
import ProjectContainer from "~/components/ProjectContainer";
import ProjectHead from "~/components/ProjectHead";

export const links: LinksFunction = () => {
    return [{
        rel: 'canonical', href: "https://dariofurlan.it/case_study/Docfiler"
    }];
};

export const meta: MetaFunction = () => {
    return [
        { "title": "DocFiler: Portale per la Raccolta Documentale con SPID e Blockchain | Case Study di Dario Furlan" },
        {
            "name": "description",
            "content": "Scopri DocFiler, il portale sviluppato da Dario Furlan per ESNA SOA, che facilita la raccolta documentale con accesso SPID e certificazione tramite blockchain. Un sistema avanzato per la gestione sicura e organizzata dei documenti per le certificazioni, semplificando i processi aziendali e migliorando l’efficienza."
        }
    ];
};

export default function Docfiler() {
    return <ProjectContainer>
        <ProjectHead
            title="DocFiler"
            description={<>realizzata in collaborazione con <a target="_blank" rel="noopener noreferrer" className="link-accent" href="https://sgiservizi.net/">SGI Servizi S.R.L.</a></>}
            icon="/icon/docfiler_lg.png"
        />
        <p className="prose mx-auto">
            Ho sviluppato un portale per l'azienda ESNA SOA, progettato per facilitare il processo di raccolta documentale per i clienti che desiderano ottenere una certificazione. Gli utenti accedono al portale tramite login SPID, garantendo un livello di sicurezza avanzato e un'identificazione univoca. Il portale permette ai clienti di caricare i documenti in modo guidato e strutturato, offrendo un'esperienza più semplice e intuitiva rispetto alle tradizionali procedure via email. Il sistema include funzioni avanzate di archiviazione sostitutiva e marcatura temporale tramite blockchain, assicurando la tracciabilità e la certificazione della data di upload. Questa soluzione non solo semplifica il processo per i clienti, ma consente all'azienda di ricevere documenti in modo ordinato e automatizzato, eliminando la necessità di gestire archivi compressi e migliorando l'efficienza del processo.
        </p>
    </ProjectContainer>
}