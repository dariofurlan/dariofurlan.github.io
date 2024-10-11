import { Link } from "@remix-run/react";


const projects: { name: string, url: string, desc: string }[] = [
    {
        name: 'Vanilla',
        url: 'Vanilla',
        logo_url: "/icons/vanilla.png",
        desc: 'App per discoteche che digitalizza ingresso, ordini e pagamenti con QR Code dinamici, garantendo sicurezza e gestione avanzata del locale.'
    },
    {
        name: 'Prenota Attrazioni Caribe Bay',
        url: 'CaribeBay',
        desc: "App per il parco acquatico Caribe Bay che introduce la coda virtuale, permettendo agli ospiti di prenotare l'accesso alle attrazioni e godersi il parco senza attese fisiche"
    },
    {
        name: 'PythIA',
        url: 'PythIA',
        desc: "App per call center che utilizza algoritmi di IA per analizzare le conversazioni in tempo reale, suggerire consigli agli operatori e fornire feedback sul sentimento dell'utente."
    },
    {
        name: 'Docfiler',
        url: 'Docfiler',
        desc: 'App per ESNA SOA che semplifica la raccolta documentale per le certificazioni tramite login SPID e archiviazione sicura con blockchain.'
    },
    {
        name: 'Distress',
        url: 'Distress',
        desc: "App in JavaScript che simula una radio nautica per l'addestramento, permettendo di esercitarsi sui segnali di distress senza l'uso di dispositivi fisici."
    }
];

export default function CaseStudies() {
    return <ul>
        {projects.map(project => (
            <li key={project.url}>
                <Link to={project.url}>{project.name}</Link>
                <p>{project.desc}</p>
            </li>
        ))}
    </ul>
}