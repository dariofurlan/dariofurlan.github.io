import { LinksFunction } from "react-router";
import { MetaFunction } from "react-router";
import ProjectContainer from "~/components/ProjectContainer";

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
        {/* Hero Section */}
        <div className="hero bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl mb-8">
            <div className="hero-content text-center">
                <div className="max-w-4xl">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                        <img src="/icon/distress_lg.png" alt="Distress Simulator" className="w-20 h-20 rounded-2xl shadow-xl" />
                        <div>
                            <h1 className="text-4xl font-bold font-Outfit">Distress Simulator</h1>
                            <p className="text-lg text-base-content/80">Simulatore VHF per Addestramento Marittimo</p>
                        </div>
                    </div>
                    <p className="text-sm text-base-content/70 mb-4">
                        <strong>Progetto universitario</strong> • realizzato in autonomia
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <div className="badge badge-primary">Maritime Safety</div>
                        <div className="badge badge-secondary">Radio Simulation</div>
                        <div className="badge badge-accent">Educational Tool</div>
                        <div className="badge badge-outline">JavaScript</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Project Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-6">
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title font-Outfit text-2xl">🎯 Il Problema</h2>
                        <p className="text-base-content/80">
                            I corsi di navigazione marittima richiedevano l'uso di radio VHF fisiche costose e rare in Italia, 
                            limitando l'accesso alla pratica per i futuri navigatori. I partecipanti dovevano affrontare esami pratici 
                            senza adeguate opportunità di addestramento su segnali di distress.
                        </p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title font-Outfit text-2xl">💡 La Soluzione Innovativa</h2>
                        <p className="text-base-content/80 mb-4">
                            Ho creato un simulatore JavaScript che replica fedelmente il funzionamento di una radio nautica VHF, 
                            permettendo agli studenti di praticare ricezione ed emissione di segnali di distress in un ambiente virtuale sicuro e accessibile.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="stat bg-base-200 rounded-lg">
                                <div className="stat-title">Simulazione</div>
                                <div className="stat-value text-lg">Realistica</div>
                                <div className="stat-desc">Radio VHF completa</div>
                            </div>
                            <div className="stat bg-base-200 rounded-lg">
                                <div className="stat-title">Accesso</div>
                                <div className="stat-value text-lg">Universale</div>
                                <div className="stat-desc">Nessun hardware</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title font-Outfit">📊 Impatto Educativo</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Costo Hardware</span>
                                <span className="font-bold text-success">€0</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Disponibilità</span>
                                <span className="font-bold text-info">24/7</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Studenti Raggiunti</span>
                                <span className="font-bold text-warning">∞</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title font-Outfit">🛠️ Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            <div className="badge badge-sm">JavaScript</div>
                            <div className="badge badge-sm">HTML5</div>
                            <div className="badge badge-sm">CSS3</div>
                            <div className="badge badge-sm">Web Audio API</div>
                            <div className="badge badge-sm">Canvas</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
            <h2 className="text-3xl font-bold font-Outfit text-center mb-8">⚓ Funzionalità del Simulatore</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card bg-gradient-to-br from-red-500/5 to-red-500/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">📡</div>
                        <h3 className="card-title justify-center font-Outfit">Segnali Distress</h3>
                        <p className="text-sm">Simulazione completa dei segnali di emergenza marittima secondo protocolli internazionali</p>
                    </div>
                </div>
                
                <div className="card bg-gradient-to-br from-orange-500/5 to-orange-500/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">🎚️</div>
                        <h3 className="card-title justify-center font-Outfit">Controlli Realistici</h3>
                        <p className="text-sm">Interfaccia che replica fedelmente i controlli di una vera radio VHF nautica</p>
                    </div>
                </div>
                
                <div className="card bg-gradient-to-br from-yellow-500/5 to-yellow-500/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">🎓</div>
                        <h3 className="card-title justify-center font-Outfit">Addestramento Guidato</h3>
                        <p className="text-sm">Scenari di training progressivi per apprendere procedure di emergenza maritime</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Impact Section */}
        <div className="card bg-gradient-to-r from-success/10 to-success/5 shadow-xl mb-8">
            <div className="card-body">
                <h2 className="card-title font-Outfit text-2xl text-center w-full justify-center mb-6">🎯 Rivoluzione nell'Educazione Marittima</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="stat-value text-success">100% 📱</div>
                        <div className="stat-title">Accessibilità</div>
                        <div className="stat-desc">Pratica disponibile ovunque, senza hardware costoso</div>
                    </div>
                    <div className="text-center">
                        <div className="stat-value text-info">∞ 👨‍🎓</div>
                        <div className="stat-title">Scalabilità</div>
                        <div className="stat-desc">Numero illimitato di studenti simultanei</div>
                    </div>
                    <div className="text-center">
                        <div className="stat-value text-warning">0€ 💰</div>
                        <div className="stat-title">Costo Hardware</div>
                        <div className="stat-desc">Eliminazione barriere economiche all'apprendimento</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Technical Innovation */}
        <div className="card bg-base-100 shadow-lg mb-8">
            <div className="card-body">
                <h2 className="card-title font-Outfit text-2xl">⚡ Innovazione Tecnica</h2>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <h3 className="font-semibold mb-2">Realismo dell'Esperienza</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-base-content/80">
                            <li>Replica fedele dell'interfaccia radio VHF</li>
                            <li>Audio realistico con effetti di disturbo</li>
                            <li>Protocolli di comunicazione marittima autentici</li>
                            <li>Scenari di emergenza variabili e realistici</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Impatto Democratizzante</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-base-content/80">
                            <li>Abbattimento delle barriere economiche</li>
                            <li>Accesso universale alla formazione marittima</li>
                            <li>Preparazione migliore per esami pratici</li>
                            <li>Aumento della sicurezza in mare</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Learning & Growth */}
        <div className="card bg-base-100 shadow-lg mb-8">
            <div className="card-body">
                <h2 className="card-title font-Outfit text-2xl">🌟 Apprendimenti del Progetto</h2>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <h3 className="font-semibold mb-2">Competenze Tecniche</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-base-content/80">
                            <li>Sviluppo di interfacce utente complesse in JavaScript</li>
                            <li>Implementazione di Web Audio API per realismo sonoro</li>
                            <li>Design di sistemi educativi interattivi</li>
                            <li>Ottimizzazione per accessibilità web</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Impatto Sociale</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-base-content/80">
                            <li>Democratizzazione dell'educazione marittima</li>
                            <li>Miglioramento della sicurezza navale</li>
                            <li>Innovazione nel settore educational technology</li>
                            <li>Contributo alla formazione professionale marittima</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Call to Action */}
        <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 shadow-xl mb-8">
            <div className="card-body text-center">
                <h2 className="card-title justify-center font-Outfit text-2xl mb-4">🚢 Un Progetto per la Sicurezza Marittima</h2>
                <p className="text-base-content/80 max-w-2xl mx-auto">
                    Questo simulatore rappresenta il mio impegno per rendere l'educazione marittima più accessibile e sicura. 
                    Un piccolo contributo tecnologico che può fare la differenza nella preparazione dei futuri navigatori.
                </p>
            </div>
        </div>
    </ProjectContainer>
}