import { Link } from "@remix-run/react";


const projects: { name: string, icon: string, url: string, desc: string }[] = [
    {
        name: 'Vanilla',
        icon: "/icon/vanilla_1024.png",
        url: 'Vanilla',
        desc: 'App per discoteche che digitalizza ingresso, ordini e pagamenti con QR Code dinamici, garantendo sicurezza e gestione avanzata del locale.'
    },
    {
        name: 'Prenota Attrazioni Caribe Bay',
        url: 'CaribeBay',
        icon: "/icon/caribebay_1024.png",
        desc: "App per il parco acquatico Caribe Bay che introduce la coda virtuale, permettendo agli ospiti di prenotare l'accesso alle attrazioni e godersi il parco senza attese fisiche"
    },
    {
        name: 'PythIA',
        url: 'PythIA',
        icon: "/icon/pythia_1024.png",
        desc: "App per call center che utilizza algoritmi di IA per analizzare le conversazioni in tempo reale, suggerire consigli agli operatori e fornire feedback sul sentimento dell'utente."
    },
    {
        name: 'Docfiler',
        url: 'Docfiler',
        icon: "/icon/docfiler_1024.png",
        desc: 'App per ESNA SOA che semplifica la raccolta documentale per le certificazioni tramite login SPID e archiviazione sicura con blockchain.'
    },
    {
        name: 'Distress',
        url: 'Distress',
        icon: "/icon/distress_1024.png",
        desc: "App in JavaScript che simula una radio nautica per l'addestramento, permettendo di esercitarsi sui segnali di distress senza l'uso di dispositivi fisici."
    }
];

export default function CaseStudies() {
    return <ul className="flex flex-col flex-wrap max-w-[680px] mx-auto">
        {projects.map(project => (
            <li className="py-2" key={project.url}>
                <Link className="bg-base-200 flex flex-row items-center p-4 rounded-2xl" to={project.url}>
                    <img src={project.icon} alt={project.name} className="rounded-xl mr-6 bg-transparent h-12 w-12 shadow-xl shadow-gray-400" />
                    <span className="font-Outfit text-xl font-bold">{project.name}</span>
                </Link>
                {/* <p>{project.desc}</p> */}
            </li>
        ))}
    </ul>
}