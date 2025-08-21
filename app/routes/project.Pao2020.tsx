import { LinksFunction, NavLink, MetaFunction } from "react-router";
import ProjectContainer from "~/components/ProjectContainer";

export const links: LinksFunction = () => {
    return [{
        rel: 'canonical', href: "https://dariofurlan.it/project/Pao2020"
    }];
};

export const meta: MetaFunction = () => {
    return [
        { title: "Aquarius - Simulatore Ecosistema Marino | Progetto Accademico di Dario Furlan" },
        {
            name: "description",
            content: "Scopri Aquarius, un innovativo simulatore di ecosistema marino sviluppato da Dario Furlan per il corso di Programmazione ad Oggetti. Basato sull'algoritmo Boids di Craig Reynolds, dimostra padronanza in OOP, ereditarietà, polimorfismo e pattern MVC attraverso una simulazione coinvolgente."
        },
    ];
};

export const handle = {
    breadcrumb: () => <NavLink to="/project/Pao2020">Aquarius - PAO 2020/2021</NavLink>,
}

export default function Pao2020() {
    return <ProjectContainer>
        {/* Hero Section */}
        <div className="hero bg-gradient-to-r from-accent/10 to-info/10 rounded-xl mb-8">
            <div className="hero-content text-center">
                <div className="max-w-4xl">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                        <div className="w-20 h-20 rounded-2xl shadow-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-3xl">
                            🐟
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold font-Outfit">Aquarius</h1>
                            <p className="text-lg text-base-content/80">Simulatore Ecosistema Marino</p>
                        </div>
                    </div>
                    <p className="text-sm text-base-content/70 mb-4">
                        🎓 Progetto Accademico - <a target="_blank" rel="noopener noreferrer" className="link link-accent" href="https://unipd.it/">Università di Padova</a><br/>
                        Corso di Programmazione ad Oggetti - A.A. 2020/2021
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <div className="badge badge-accent">Object-Oriented Programming</div>
                        <div className="badge badge-info">Boids Algorithm</div>
                        <div className="badge badge-success">MVC Pattern</div>
                        <div className="badge badge-warning">Qt Framework</div>
                        <div className="badge badge-outline">C++</div>
                        <div className="badge badge-outline">Polimorfismo</div>
                        <div className="badge badge-outline">Ereditarietà</div>
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
                    <p className="text-sm">Dimostrare padronanza in programmazione ad oggetti, ereditarietà, polimorfismo e design patterns attraverso un progetto coinvolgente e innovativo.</p>
                </div>
            </div>
        </div>

        {/* Project Overview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
                <h2 className="text-2xl font-bold font-Outfit mb-4">🌊 Il Progetto</h2>
                <div className="prose max-w-none">
                    <p>
                        Aquarius è un simulatore di ecosistema marino che trasforma un tipico esercizio di programmazione 
                        orientata agli oggetti in un'esperienza affascinante e interattiva. 
                    </p>
                    <p>
                        Invece di creare l'ennesimo sistema di gestione biblioteca, ho deciso di implementare un acquario 
                        popolato da organismi virtuali che si comportano secondo regole naturalistiche, rendendo 
                        l'apprendimento dei concetti OOP molto più stimolante.
                    </p>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold font-Outfit mb-4">🧠 L'Approccio Innovativo</h2>
                <div className="prose max-w-none">
                    <p>
                        Il cuore del progetto si basa sull'<strong>algoritmo Boids</strong> ideato da Craig Reynolds nel 1986 
                        per simulare il comportamento degli stormi. Ho adattato questo algoritmo per creare un ecosistema 
                        marino complesso dove ogni organismo:
                    </p>
                    <ul>
                        <li>Si muove secondo leggi fisiche realistiche</li>
                        <li>Interagisce con altri organismi nel suo campo visivo</li>
                        <li>Segue istinti naturali di sopravvivenza</li>
                        <li>Ha cicli di sonno/veglia e meccaniche di fame</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Technical Overview */}
        <div className="bg-base-200 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">🔧 Panoramica Tecnica</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-base-100 p-6 rounded-lg text-center">
                    <div className="text-3xl mb-3">🏗️</div>
                    <h3 className="font-semibold text-primary mb-2">Architettura MVC</h3>
                    <p className="text-sm text-base-content/70">Separazione netta tra logica, presentazione e controllo</p>
                </div>
                
                <div className="bg-base-100 p-6 rounded-lg text-center">
                    <div className="text-3xl mb-3">🧬</div>
                    <h3 className="font-semibold text-secondary mb-2">Gerarchia OOP</h3>
                    <p className="text-sm text-base-content/70">Classi astratte e concrete con ereditarietà multipla</p>
                </div>
                
                <div className="bg-base-100 p-6 rounded-lg text-center">
                    <div className="text-3xl mb-3">🎯</div>
                    <h3 className="font-semibold text-accent mb-2">Simulazione Realistica</h3>
                    <p className="text-sm text-base-content/70">Comportamenti emergenti da regole semplici</p>
                </div>
            </div>
        </div>

        {/* Boids Algorithm Explanation */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">🦋 L'Algoritmo Boids in Azione</h2>
            <div className="grid lg:grid-cols-3 gap-6">
                <div className="card bg-primary/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">🎯</div>
                        <h3 className="card-title justify-center">Separation</h3>
                        <p className="text-sm">Evita il sovraffollamento allontanandosi dai vicini troppo prossimi</p>
                    </div>
                </div>
                <div className="card bg-secondary/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">🧭</div>
                        <h3 className="card-title justify-center">Alignment</h3>
                        <p className="text-sm">Allinea la propria direzione con quella dei vicini nel gruppo</p>
                    </div>
                </div>
                <div className="card bg-accent/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">🤝</div>
                        <h3 className="card-title justify-center">Cohesion</h3>
                        <p className="text-sm">Si muove verso il centro di massa del gruppo locale</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-gradient-to-r from-success/10 to-info/10 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">🎓 Competenze Dimostrate</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-success">📚 Concetti OOP Applicati</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                            <span className="text-sm"><strong>Ereditarietà:</strong> Gerarchia Veicolo → Organismo → Specie concrete</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                            <span className="text-sm"><strong>Polimorfismo:</strong> Comportamenti virtuali specifici per specie</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                            <span className="text-sm"><strong>Astrazione:</strong> Classi base astratte ben progettate</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                            <span className="text-sm"><strong>Incapsulamento:</strong> Interfacce pulite e dati protetti</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-info">🔨 Competenze Tecniche</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-info rounded-full"></div>
                            <span className="text-sm"><strong>Design Patterns:</strong> MVC, Template Method, Strategy</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-info rounded-full"></div>
                            <span className="text-sm"><strong>Memory Management:</strong> Smart pointers personalizzati</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-info rounded-full"></div>
                            <span className="text-sm"><strong>STL-like Containers:</strong> Vector con iteratori custom</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-info rounded-full"></div>
                            <span className="text-sm"><strong>GUI Programming:</strong> Qt Framework con dual views</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Innovation Highlight */}
        <div className="card bg-gradient-to-r from-warning/10 to-error/10 shadow-xl mb-8">
            <div className="card-body text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="card-title justify-center text-2xl font-Outfit mb-4">L'Innovazione nel Metodo</h3>
                <div className="prose max-w-none">
                    <p>
                        Questo progetto dimostra come <strong>l'apprendimento possa essere trasformato</strong> attraverso 
                        l'applicazione creativa di algoritmi interessanti. Invece di limitarmi a soddisfare i requisiti 
                        minimi del corso, ho scelto di esplorare un dominio affascinante che rendesse ogni linea di 
                        codice scritta un passo verso la creazione di qualcosa di bello e funzionale.
                    </p>
                    <p>
                        Il risultato è un progetto che non solo soddisfa tutti i requisiti accademici, ma va oltre, 
                        dimostrando come la <strong>passione per il codice</strong> possa elevare anche i compiti più 
                        tecnici in opere creative e coinvolgenti.
                    </p>
                </div>
            </div>
        </div>

        {/* Technical Stats */}
        <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-base-200 w-full mb-8">
            <div className="stat">
                <div className="stat-figure text-primary">
                    <div className="text-3xl">⏱️</div>
                </div>
                <div className="stat-title">Tempo Sviluppo</div>
                <div className="stat-value text-primary">~54h</div>
                <div className="stat-desc">Pianificazione e implementazione</div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <div className="text-3xl">🏗️</div>
                </div>
                <div className="stat-title">Architettura</div>
                <div className="stat-value text-secondary">MVC</div>
                <div className="stat-desc">Dual view specializzate</div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-accent">
                    <div className="text-3xl">🐟</div>
                </div>
                <div className="stat-title">Specie</div>
                <div className="stat-value text-accent">4</div>
                <div className="stat-desc">Tonno, Sardina, Plankton</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-info">
                    <div className="text-3xl">🎯</div>
                </div>
                <div className="stat-title">Linguaggio</div>
                <div className="stat-value text-info">C++</div>
                <div className="stat-desc">Qt Framework</div>
            </div>
        </div>

        {/* Academic Achievement */}
        <div className="alert alert-success">
            <div className="flex items-center gap-3">
                <div className="text-2xl">🏆</div>
                <div>
                    <h3 className="font-semibold">Risultato Accademico</h3>
                    <p className="text-sm">
                        Questo progetto ha dimostrato con successo la padronanza dei concetti fondamentali della 
                        programmazione orientata agli oggetti, ottenendo un'eccellente valutazione per l'approccio 
                        innovativo e la qualità dell'implementazione tecnica.
                    </p>
                </div>
            </div>
        </div>
    </ProjectContainer>
}