import { LinksFunction, NavLink, MetaFunction } from "react-router";
import ProjectContainer from "~/components/ProjectContainer";

export const links: LinksFunction = () => {
    return [{
        rel: 'canonical', href: "https://dariofurlan.it/project/ErasmusCork2018"
    }];
};

export const meta: MetaFunction = () => {
    return [
        { title: "Erasmus+ Cork - Modbus Protocol Development | Esperienza Internazionale di Dario Furlan" },
        {
            name: "description",
            content: "Scopri l'esperienza Erasmus+ di Dario Furlan a Cork, Irlanda (2018). Un mese di crescita professionale e personale sviluppando una libreria Python per il protocollo Modbus presso Cork Internet Exchange, rafforzando competenze linguistiche e tecniche."
        },
    ];
};

export const handle = {
    breadcrumb: () => <NavLink to="/project/ErasmusCork2018">Erasmus+ Cork 2018</NavLink>,
}

export default function ErasmusCork2018() {
    return <ProjectContainer>
        {/* Hero Section */}
        <div className="hero bg-gradient-to-r from-success/10 to-info/10 rounded-xl mb-8">
            <div className="hero-content text-center">
                <div className="max-w-4xl">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                        <div className="w-20 h-20 rounded-2xl shadow-xl bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white text-3xl">
                            🇮🇪
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold font-Outfit">Erasmus+ Cork</h1>
                            <p className="text-lg text-base-content/80">Esperienza Internazionale & Modbus Development</p>
                        </div>
                    </div>
                    <p className="text-sm text-base-content/70 mb-4">
                        🌍 Programma Erasmus+ - Cork, Irlanda<br/>
                        Maggio - Giugno 2018 | 1 Mese di Immersione Totale
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <div className="badge badge-success">Erasmus+</div>
                        <div className="badge badge-info">English Immersion</div>
                        <div className="badge badge-primary">Python Development</div>
                        <div className="badge badge-warning">Modbus Protocol</div>
                        <div className="badge badge-accent">IoT Systems</div>
                        <div className="badge badge-outline">Low-Level Programming</div>
                        <div className="badge badge-outline">Cross-Cultural</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Experience Overview */}
        <div className="alert alert-success mb-8">
            <div className="flex items-center gap-3">
                <div className="text-2xl">🌟</div>
                <div>
                    <h3 className="font-semibold">Un'Esperienza Trasformativa</h3>
                    <p className="text-sm">
                        Un mese intensivo di crescita professionale e personale che ha combinato l'apprendimento della lingua inglese 
                        in famiglia irlandese con un progetto tecnico complesso presso Cork Internet Exchange.
                    </p>
                </div>
            </div>
        </div>

        {/* Dual Experience */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
                <h2 className="text-2xl font-bold font-Outfit mb-4">🏠 Vita in Famiglia Irlandese</h2>
                <div className="prose max-w-none">
                    <p>
                        L'esperienza di vivere con una famiglia locale a Cork è stata fondamentale per 
                        l'<strong>immersione linguistica totale</strong>. Ogni giorno, dalla colazione alla cena, 
                        era un'opportunità per praticare l'inglese in contesti reali e naturali.
                    </p>
                    <p>
                        Questa esperienza mi ha permesso di:
                    </p>
                    <ul>
                        <li><strong>Migliorare significativamente</strong> il mio inglese parlato</li>
                        <li><strong>Comprendere la cultura irlandese</strong> dall'interno</li>
                        <li><strong>Sviluppare autonomia</strong> in un ambiente internazionale</li>
                        <li><strong>Creare legami</strong> che durano ancora oggi</li>
                    </ul>
                    <p>
                        Cork si è rivelata una città accogliente e dinamica, con un perfetto equilibrio 
                        tra tradizione irlandese e innovazione tecnologica.
                    </p>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold font-Outfit mb-4">🏢 Cork Internet Exchange</h2>
                <div className="prose max-w-none">
                    <p>
                        <a target="_blank" rel="noopener noreferrer" className="link link-accent" href="https://www.cix.ie">Cork Internet Exchange</a>, 
                        situata strategicamente vicino al campus Apple, è stata il palcoscenico di un progetto tecnico 
                        estremamente stimolante e formativo.
                    </p>
                    <p>
                        L'azienda si occupa di hosting e data center services, richiedendo un monitoraggio 
                        preciso dei consumi energetici per ottimizzare i costi e fornire insights di business 
                        ai clienti.
                    </p>
                    <p>
                        La sfida era <strong>comunicare direttamente con dispositivi hardware</strong> per 
                        raccogliere dati critici sui consumi elettrici dei server rack, un compito che 
                        richiedeva competenze sia hardware che software.
                    </p>
                    <p>
                        Questa esperienza professionale mi ha introdotto al mondo dell'<strong>IoT industriale</strong> 
                        e dei protocolli di comunicazione a basso livello.
                    </p>
                </div>
            </div>
        </div>

        {/* Technical Challenge */}
        <div className="bg-base-200 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">🔧 La Sfida Tecnica: Modbus Protocol</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">📡 Il Dispositivo BCPME284S</h3>
                    <div className="space-y-4">
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-accent">Schneider Electric BCPME284S</h4>
                            <p className="text-sm text-base-content/70">Device di monitoraggio energetico avanzato per misurazione precisa dei consumi elettrici</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-info">Protocollo Modbus</h4>
                            <p className="text-sm text-base-content/70">Standard industriale per comunicazione seriale tra dispositivi elettronici</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-warning">Comunicazione Byte-Level</h4>
                            <p className="text-sm text-base-content/70">Necessità di gestire la comunicazione a livello di singoli byte per precisione massima</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-secondary">🚧 Le Sfide</h3>
                    <div className="space-y-4">
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-error">Assenza di Librerie</h4>
                            <p className="text-sm text-base-content/70">Nessuna libreria Python esistente per questo specifico modello</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-success">Studio del Protocollo</h4>
                            <p className="text-sm text-base-content/70">Analisi approfondita delle specifiche Modbus RTU/TCP</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-primary">Implementazione Custom</h4>
                            <p className="text-sm text-base-content/70">Sviluppo da zero di una libreria Python specifica</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Development Process */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">⚙️ Processo di Sviluppo</h2>
            
            <div className="steps steps-vertical lg:steps-horizontal w-full mb-8">
                <div className="step step-primary">
                    <div className="text-center">
                        <div className="text-2xl mb-2">📖</div>
                        <h3 className="font-semibold">Studio del Protocollo</h3>
                        <p className="text-sm text-base-content/70">Analisi della documentazione Modbus e specifiche del device</p>
                    </div>
                </div>
                <div className="step step-primary">
                    <div className="text-center">
                        <div className="text-2xl mb-2">🔍</div>
                        <h3 className="font-semibold">Reverse Engineering</h3>
                        <p className="text-sm text-base-content/70">Analisi dei pacchetti di comunicazione esistenti</p>
                    </div>
                </div>
                <div className="step step-primary">
                    <div className="text-center">
                        <div className="text-2xl mb-2">🐍</div>
                        <h3 className="font-semibold">Implementazione Python</h3>
                        <p className="text-sm text-base-content/70">Sviluppo libreria per comunicazione byte-level</p>
                    </div>
                </div>
                <div className="step step-primary">
                    <div className="text-center">
                        <div className="text-2xl mb-2">✅</div>
                        <h3 className="font-semibold">Testing & Validation</h3>
                        <p className="text-sm text-base-content/70">Verifica accuratezza dati e stabilità comunicazione</p>
                    </div>
                </div>
            </div>

            <div className="card bg-gradient-to-r from-primary/5 to-secondary/5">
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">📊 Obiettivo del Sistema</h3>
                    <p className="text-center text-base-content/80">
                        Permettere all'hosting company di <strong>monitorare in tempo reale</strong> il consumo elettrico 
                        di ogni server rack, ottenendo insights preziosi per:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <div className="text-center">
                            <div className="text-2xl mb-2">💰</div>
                            <h4 className="font-semibold">Cost Optimization</h4>
                            <p className="text-sm text-base-content/70">Ottimizzazione dei costi energetici</p>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl mb-2">📈</div>
                            <h4 className="font-semibold">Business Insights</h4>
                            <p className="text-sm text-base-content/70">Analytics sui pattern di consumo</p>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl mb-2">⚡</div>
                            <h4 className="font-semibold">Efficiency</h4>
                            <p className="text-sm text-base-content/70">Identificazione inefficienze energetiche</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Technical Skills Showcase */}
        <div className="bg-gradient-to-r from-accent/5 to-warning/5 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">🛠️ Competenze Tecniche Sviluppate</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-accent">🔬 Low-Level Programming</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-sm"><strong>Manipolazione Byte:</strong> Gestione precisa di dati binari</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-sm"><strong>Protocolli Seriali:</strong> Implementazione comunicazione RS485</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-sm"><strong>CRC Checksums:</strong> Validazione integrità dati</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-sm"><strong>Memory Management:</strong> Ottimizzazione buffer communication</span>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-warning">🏭 Industrial IoT</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-warning rounded-full"></div>
                            <span className="text-sm"><strong>Modbus RTU/TCP:</strong> Master-slave communication</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-warning rounded-full"></div>
                            <span className="text-sm"><strong>Industrial Hardware:</strong> Interfacing with Schneider devices</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-warning rounded-full"></div>
                            <span className="text-sm"><strong>Energy Monitoring:</strong> Power consumption analytics</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-warning rounded-full"></div>
                            <span className="text-sm"><strong>Real-time Systems:</strong> Gestione timing critici</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Cultural & Professional Growth */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">🌱 Crescita Personale e Professionale</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
                {/* Language Skills */}
                <div className="card bg-success/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">🗣️</div>
                        <h3 className="card-title justify-center">Competenze Linguistiche</h3>
                        <ul className="text-sm space-y-2 mt-4">
                            <li>• Inglese tecnico avanzato</li>
                            <li>• Comunicazione professionale</li>
                            <li>• Presentazioni tecniche</li>
                            <li>• Cultural awareness</li>
                        </ul>
                    </div>
                </div>

                {/* Professional Skills */}
                <div className="card bg-info/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">💼</div>
                        <h3 className="card-title justify-center">Competenze Professionali</h3>
                        <ul className="text-sm space-y-2 mt-4">
                            <li>• Problem solving autonomo</li>
                            <li>• Ricerca e documentazione</li>
                            <li>• Debugging sistemi complessi</li>
                            <li>• Customer-oriented thinking</li>
                        </ul>
                    </div>
                </div>

                {/* Personal Growth */}
                <div className="card bg-primary/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">🌟</div>
                        <h3 className="card-title justify-center">Crescita Personale</h3>
                        <ul className="text-sm space-y-2 mt-4">
                            <li>• Indipendenza internazionale</li>
                            <li>• Adattabilità culturale</li>
                            <li>• Confidence building</li>
                            <li>• Global mindset</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Impact & Results */}
        <div className="card bg-gradient-to-r from-success/10 to-primary/10 shadow-xl mb-8">
            <div className="card-body">
                <div className="text-center mb-6">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="card-title justify-center text-2xl font-Outfit">Risultati e Impatto</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-success mb-3">✅ Successi Tecnici</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-success rounded-full"></div>
                                <span className="text-sm">Libreria Python funzionante per BCPME284S</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-success rounded-full"></div>
                                <span className="text-sm">Comunicazione stabile e accurata con dispositivo</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-success rounded-full"></div>
                                <span className="text-sm">Sistema di monitoraggio real-time implementato</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-success rounded-full"></div>
                                <span className="text-sm">Insights di business per ottimizzazione energetica</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-primary mb-3">🌍 Impatto Personale</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm">Inglese fluente acquisito attraverso immersione</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm">Competenze IoT industriale sviluppate</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm">Mentalità internazionale e adattabilità</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm">Network professionale europeo creato</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Experience Stats */}
        <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-base-200 w-full mb-8">
            <div className="stat">
                <div className="stat-figure text-success">
                    <div className="text-3xl">📅</div>
                </div>
                <div className="stat-title">Durata</div>
                <div className="stat-value text-success">1</div>
                <div className="stat-desc">Mese intensivo</div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-info">
                    <div className="text-3xl">🏢</div>
                </div>
                <div className="stat-title">Azienda</div>
                <div className="stat-value text-info">Cork IE</div>
                <div className="stat-desc">Vicino ad Apple</div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-primary">
                    <div className="text-3xl">🐍</div>
                </div>
                <div className="stat-title">Linguaggio</div>
                <div className="stat-value text-primary">Python</div>
                <div className="stat-desc">Low-level</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-warning">
                    <div className="text-3xl">📡</div>
                </div>
                <div className="stat-title">Protocollo</div>
                <div className="stat-value text-warning">Modbus</div>
                <div className="stat-desc">RTU/TCP</div>
            </div>
        </div>

        {/* Long-term Impact */}
        <div className="alert alert-success">
            <div className="flex items-center gap-3">
                <div className="text-2xl">🌟</div>
                <div>
                    <h3 className="font-semibold">Impatto a Lungo Termine</h3>
                    <p className="text-sm">
                        Questa esperienza Erasmus+ ha segnato un punto di svolta fondamentale nel mio percorso, 
                        combinando crescita linguistica, competenze tecniche avanzate e mentalità internazionale. 
                        Le competenze in protocolli industriali e IoT acquisite hanno aperto nuove opportunità 
                        professionali, mentre l'esperienza culturale ha arricchito la mia visione del mondo.
                    </p>
                </div>
            </div>
        </div>
    </ProjectContainer>
}