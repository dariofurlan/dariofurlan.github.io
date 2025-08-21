import { LinksFunction, NavLink, MetaFunction } from "react-router";
import ProjectContainer from "~/components/ProjectContainer";

export const links: LinksFunction = () => {
    return [{
        rel: 'canonical', href: "https://dariofurlan.it/project/BaseDati2020"
    }];
};

export const meta: MetaFunction = () => {
    return [
        { title: "WeCare - Sistema Database per Ente Filantropico | Progetto Accademico di Dario Furlan" },
        {
            name: "description",
            content: "Scopri WeCare, un sistema di database completo progettato da Dario Furlan per il corso di Basi di Dati. Un progetto che dimostra padronanza nella progettazione concettuale, logica e fisica di database relazionali per la gestione di un ente filantropico nazionale."
        },
    ];
};

export const handle = {
    breadcrumb: () => <NavLink to="/project/BaseDati2020">WeCare - Basi di Dati 2020</NavLink>,
}

export default function BaseDati2020() {
    return <ProjectContainer>
        {/* Hero Section */}
        <div className="hero bg-gradient-to-r from-info/10 to-success/10 rounded-xl mb-8">
            <div className="hero-content text-center">
                <div className="max-w-4xl">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                        <div className="w-20 h-20 rounded-2xl shadow-xl bg-gradient-to-br from-blue-500 to-green-600 flex items-center justify-center text-white text-3xl">
                            💾
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold font-Outfit">WeCare</h1>
                            <p className="text-lg text-base-content/80">Sistema Database per Ente Filantropico</p>
                        </div>
                    </div>
                    <p className="text-sm text-base-content/70 mb-4">
                        🎓 Progetto Accademico - <a target="_blank" rel="noopener noreferrer" className="link link-accent" href="https://unipd.it/">Università di Padova</a><br/>
                        Corso di Basi di Dati - A.A. 2020/2021
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <div className="badge badge-info">Database Design</div>
                        <div className="badge badge-success">PostgreSQL</div>
                        <div className="badge badge-primary">Entity-Relationship</div>
                        <div className="badge badge-warning">SQL</div>
                        <div className="badge badge-outline">Normalization</div>
                        <div className="badge badge-outline">ACID Properties</div>
                        <div className="badge badge-outline">Relational Algebra</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Academic Context */}
        <div className="alert alert-info mb-8">
            <div className="flex items-center gap-3">
                <div className="text-2xl">🎯</div>
                <div>
                    <h3 className="font-semibold">Obiettivo Didattico</h3>
                    <p className="text-sm">Dimostrare padronanza nella progettazione completa di basi di dati: dall'analisi dei requisiti alla progettazione concettuale, logica e fisica, con ottimizzazione delle prestazioni.</p>
                </div>
            </div>
        </div>

        {/* Project Overview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
                <h2 className="text-2xl font-bold font-Outfit mb-4">🏢 Il Progetto WeCare</h2>
                <div className="prose max-w-none">
                    <p>
                        WeCare è un ente filantropico italiano che opera su scala nazionale, fornendo supporto 
                        attraverso donazioni di prodotti necessari ad altri enti bisognosi. 
                    </p>
                    <p>
                        Il progetto richiedeva la progettazione di un sistema database completo per gestire 
                        l'intera organizzazione: dai distretti regionali alle richieste di aiuto, dai preventivi 
                        aziendali alle transazioni finanziarie.
                    </p>
                    <p>
                        <strong>Fondato nel 2015 a Padova</strong>, WeCare ha avuto una crescita esponenziale 
                        richiedendo il passaggio a un sistema centralizzato per garantire trasparenza e 
                        legittimità delle operazioni.
                    </p>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold font-Outfit mb-4">🎯 Sfide di Design</h2>
                <div className="prose max-w-none">
                    <p>
                        Il sistema doveva gestire una complessa rete di relazioni tra:
                    </p>
                    <ul>
                        <li><strong>300 distretti</strong> distribuiti su 20 regioni italiane</li>
                        <li><strong>9.000 soci</strong> volontari con ruoli differenziati</li>
                        <li><strong>Processo democratico</strong> di votazione per le richieste</li>
                        <li><strong>Sistema di gare</strong> con preventivi aziendali</li>
                        <li><strong>Tracking finanziario</strong> completo e trasparente</li>
                    </ul>
                    <p>
                        La complessità richiedeva un'architettura database robusta con particolare attenzione 
                        alla <strong>normalizzazione</strong> e all'<strong>ottimizzazione delle query</strong>.
                    </p>
                </div>
            </div>
        </div>

        {/* Database Design Process */}
        <div className="bg-base-200 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">🔄 Metodologia di Progettazione</h2>
            
            <div className="steps steps-vertical lg:steps-horizontal w-full">
                <div className="step step-primary">
                    <div className="text-center">
                        <div className="text-2xl mb-2">📋</div>
                        <h3 className="font-semibold">Analisi Requisiti</h3>
                        <p className="text-sm text-base-content/70">Studio approfondito del dominio e identificazione delle entità principali</p>
                    </div>
                </div>
                <div className="step step-primary">
                    <div className="text-center">
                        <div className="text-2xl mb-2">🗺️</div>
                        <h3 className="font-semibold">Schema E-R</h3>
                        <p className="text-sm text-base-content/70">Modellazione concettuale con entità, attributi e relazioni</p>
                    </div>
                </div>
                <div className="step step-primary">
                    <div className="text-center">
                        <div className="text-2xl mb-2">⚙️</div>
                        <h3 className="font-semibold">Schema Logico</h3>
                        <p className="text-sm text-base-content/70">Traduzione in modello relazionale con normalizzazione</p>
                    </div>
                </div>
                <div className="step step-primary">
                    <div className="text-center">
                        <div className="text-2xl mb-2">🚀</div>
                        <h3 className="font-semibold">Implementazione</h3>
                        <p className="text-sm text-base-content/70">Creazione fisica con PostgreSQL e ottimizzazione</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Technical Highlights */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">🔧 Punti di Forza Tecnici</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Complex Relationships */}
                <div className="card bg-primary/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">🕸️</div>
                        <h3 className="card-title justify-center">Relazioni Complesse</h3>
                        <p className="text-sm">Gestione di generalizzazioni, specializzazioni e relazioni ternarie con cardinalità avanzate</p>
                    </div>
                </div>

                {/* Optimization Analysis */}
                <div className="card bg-secondary/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">📊</div>
                        <h3 className="card-title justify-center">Analisi Ridondanze</h3>
                        <p className="text-sm">Valutazione quantitativa costi/benefici per attributi derivati con calcoli di accesso</p>
                    </div>
                </div>

                {/* Advanced Queries */}
                <div className="card bg-accent/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">🔍</div>
                        <h3 className="card-title justify-center">Query Avanzate</h3>
                        <p className="text-sm">6 query complesse con aggregazioni, join multipli e funzioni analitiche</p>
                    </div>
                </div>

                {/* Normalization */}
                <div className="card bg-info/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">📐</div>
                        <h3 className="card-title justify-center">Normalizzazione</h3>
                        <p className="text-sm">Applicazione rigorosa delle forme normali fino alla BCNF</p>
                    </div>
                </div>

                {/* Data Integrity */}
                <div className="card bg-success/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">🛡️</div>
                        <h3 className="card-title justify-center">Integrità Dati</h3>
                        <p className="text-sm">Vincoli di integrità referenziale e controlli business logic</p>
                    </div>
                </div>

                {/* Performance Tuning */}
                <div className="card bg-warning/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">⚡</div>
                        <h3 className="card-title justify-center">Ottimizzazione</h3>
                        <p className="text-sm">Progettazione di indici strategici per migliorare le prestazioni</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Database Architecture */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">🏗️ Architettura del Database</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">📦 Entità Principali</h3>
                    <div className="space-y-3">
                        <div className="bg-base-100 p-3 rounded-lg">
                            <strong>Distretto:</strong> Unità organizzativa territoriale con presidente e soci
                        </div>
                        <div className="bg-base-100 p-3 rounded-lg">
                            <strong>Richiesta:</strong> Sistema di supporto con processo di approvazione democratico
                        </div>
                        <div className="bg-base-100 p-3 rounded-lg">
                            <strong>Preventivo:</strong> Sistema di gare competitive tra aziende fornitrici
                        </div>
                        <div className="bg-base-100 p-3 rounded-lg">
                            <strong>Transazione:</strong> Tracking completo dei movimenti finanziari
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-secondary">⚙️ Caratteristiche Avanzate</h3>
                    <div className="space-y-3">
                        <div className="bg-base-100 p-3 rounded-lg">
                            <strong>Specializzazioni:</strong> Presidente ↗ Socio, Accettata ↗ Richiesta
                        </div>
                        <div className="bg-base-100 p-3 rounded-lg">
                            <strong>Vincoli Complessi:</strong> Maggioranza relativa, lode condizionale
                        </div>
                        <div className="bg-base-100 p-3 rounded-lg">
                            <strong>Attributi Multivalore:</strong> Gestione elegante di collezioni dati
                        </div>
                        <div className="bg-base-100 p-3 rounded-lg">
                            <strong>Chiavi Composite:</strong> Identificatori naturali per business logic
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-gradient-to-r from-success/10 to-info/10 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">🎓 Competenze Dimostrate</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-success">📚 Teoria delle Basi di Dati</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                            <span className="text-sm"><strong>Modellazione E-R:</strong> Entità, attributi, relazioni con cardinalità</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                            <span className="text-sm"><strong>Normalizzazione:</strong> 1NF, 2NF, 3NF, BCNF</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                            <span className="text-sm"><strong>Algebra Relazionale:</strong> Operazioni base e derivate</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                            <span className="text-sm"><strong>Proprietà ACID:</strong> Transazioni e concorrenza</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-info">🛠️ Competenze Pratiche</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-info rounded-full"></div>
                            <span className="text-sm"><strong>PostgreSQL:</strong> DDL, DML, DCL avanzati</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-info rounded-full"></div>
                            <span className="text-sm"><strong>Query Optimization:</strong> Indici, execution plans</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-info rounded-full"></div>
                            <span className="text-sm"><strong>C++ Integration:</strong> LibPQ per applicazioni native</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-info rounded-full"></div>
                            <span className="text-sm"><strong>Performance Analysis:</strong> Valutazione costi operazioni</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Sample Queries Showcase */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">🔍 Esempio di Query Complesse</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body">
                        <h3 className="card-title text-primary mb-3">📊 Analisi Finanziaria per Distretto</h3>
                        <p className="text-sm text-base-content/70 mb-3">
                            Query che calcola per ogni distretto il totale delle donazioni ricevute, delle spese effettuate, 
                            delle fatture emesse e il ricavato netto (donazioni - spese - fatture).
                        </p>
                        <div className="bg-base-300 p-3 rounded-lg text-xs font-mono overflow-x-auto">
                            <code>
                                SELECT d.nome, d.regione,<br/>
                                &nbsp;&nbsp;COALESCE(SUM(CASE WHEN t.tipologia = 'donazione'<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;THEN t.importo END), 0) AS donazioni,<br/>
                                &nbsp;&nbsp;COALESCE(SUM(CASE WHEN t.tipologia = 'spesa'<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;THEN t.importo END), 0) AS spese,<br/>
                                &nbsp;&nbsp;-- ... calcolo ricavato netto<br/>
                                FROM Distretto d LEFT JOIN Transazione t...
                            </code>
                        </div>
                    </div>
                </div>
                
                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body">
                        <h3 className="card-title text-secondary mb-3">🏆 Ranking Aziende Top</h3>
                        <p className="text-sm text-base-content/70 mb-3">
                            Analisi delle tre aziende che hanno ricevuto più fondi da WeCare, con conteggio 
                            dei preventivi vincitori per ciascuna azienda.
                        </p>
                        <div className="bg-base-300 p-3 rounded-lg text-xs font-mono overflow-x-auto">
                            <code>
                                SELECT a.nome, a.piva,<br/>
                                &nbsp;&nbsp;SUM(f.importo) AS totale_ricevuto,<br/>
                                &nbsp;&nbsp;COUNT(v.richiesta) AS preventivi_vinti<br/>
                                FROM Azienda a<br/>
                                JOIN Vincitore v ON a.piva = v.piva<br/>
                                JOIN Fattura f ON v.piva = f.piva<br/>
                                GROUP BY a.piva, a.nome<br/>
                                ORDER BY totale_ricevuto DESC LIMIT 3;
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Performance Stats */}
        <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-base-200 w-full mb-8">
            <div className="stat">
                <div className="stat-figure text-primary">
                    <div className="text-3xl">🏢</div>
                </div>
                <div className="stat-title">Entità Modellate</div>
                <div className="stat-value text-primary">15+</div>
                <div className="stat-desc">Con specializzazioni</div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <div className="text-3xl">🔗</div>
                </div>
                <div className="stat-title">Relazioni</div>
                <div className="stat-value text-secondary">20+</div>
                <div className="stat-desc">Cardinalità complesse</div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-accent">
                    <div className="text-3xl">📊</div>
                </div>
                <div className="stat-title">Query SQL</div>
                <div className="stat-value text-accent">6</div>
                <div className="stat-desc">Casi d'uso realistici</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-info">
                    <div className="text-3xl">🎯</div>
                </div>
                <div className="stat-title">Ottimizzazioni</div>
                <div className="stat-value text-info">5</div>
                <div className="stat-desc">Indici strategici</div>
            </div>
        </div>

        {/* Innovation Highlight */}
        <div className="card bg-gradient-to-r from-warning/10 to-error/10 shadow-xl mb-8">
            <div className="card-body text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="card-title justify-center text-2xl font-Outfit mb-4">Approccio Metodico e Rigoroso</h3>
                <div className="prose max-w-none">
                    <p>
                        Questo progetto rappresenta l'applicazione sistematica della <strong>metodologia di progettazione 
                        di basi di dati</strong> a un caso reale complesso. Ogni fase è stata affrontata con rigore 
                        scientifico: dall'analisi dei requisiti con glossario dettagliato, alla progettazione concettuale 
                        con diagrammi E-R formali, fino all'implementazione fisica ottimizzata.
                    </p>
                    <p>
                        L'<strong>analisi quantitativa delle ridondanze</strong> e la <strong>progettazione degli indici</strong> 
                        dimostrano un approccio professionale alla gestione delle prestazioni, andando oltre i requisiti 
                        minimi del corso per toccare aspetti di database administration reali.
                    </p>
                </div>
            </div>
        </div>

        {/* Academic Achievement */}
        <div className="alert alert-success">
            <div className="flex items-center gap-3">
                <div className="text-2xl">🏆</div>
                <div>
                    <h3 className="font-semibold">Risultato Accademico</h3>
                    <p className="text-sm">
                        Il progetto WeCare ha dimostrato eccellenza nella progettazione di basi di dati, 
                        evidenziando padronanza completa del ciclo di sviluppo database dall'analisi dei requisiti 
                        all'ottimizzazione delle prestazioni, con particolare merito per l'approccio sistematico 
                        e la qualità dell'implementazione.
                    </p>
                </div>
            </div>
        </div>
    </ProjectContainer>
}