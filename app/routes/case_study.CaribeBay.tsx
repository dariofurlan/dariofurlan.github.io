import { LinksFunction, MetaFunction, NavLink } from "react-router";
import ProjectContainer from "~/components/ProjectContainer";

export const links: LinksFunction = () => {
    return [{
        rel: 'canonical', href: "https://dariofurlan.it/case_study/CaribeBay"
    }];
};

export const meta: MetaFunction = () => {
    return [
        { "title": "Caribe Bay: Sistema di Prenotazione Smart e Coda Virtuale | Case Study di Dario Furlan" },
        {
            "name": "description",
            "content": "Scopri il sistema di prenotazione sviluppato da Dario Furlan per Caribe Bay, il parco acquatico di Jesolo. Questa innovazione introduce una coda virtuale per attrazioni, consentendo ai visitatori di evitare attese fisiche e migliorando l’esperienza complessiva del parco. Un case study di gestione intelligente per parchi a tema."
        }
    ];
};

export const handle = {
    breadcrumb: () => <NavLink to="/case_study/CaribeBay">CaribeBay</NavLink>,
}

export default function CaribeBay() {
    return <ProjectContainer>
        {/* Hero Section */}
        <div className="hero bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl mb-8">
            <div className="hero-content text-center">
                <div className="max-w-4xl">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                        <img src="/icon/caribebay_lg.png" alt="Caribe Bay" className="w-20 h-20 rounded-2xl shadow-xl" />
                        <div>
                            <h1 className="text-4xl font-bold font-Outfit">Caribe Bay</h1>
                            <p className="text-lg text-base-content/80">Sistema di Prenotazione Smart & Coda Virtuale</p>
                        </div>
                    </div>
                    <p className="text-sm text-base-content/70 mb-4">
                        realizzata in collaborazione con <a target="_blank" rel="noopener noreferrer" className="link link-accent" href="https://42night.club/">42Night S.R.L.</a>
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <div className="badge badge-primary">Virtual Queue</div>
                        <div className="badge badge-secondary">Smart Booking</div>
                        <div className="badge badge-accent">Theme Park Tech</div>
                        <div className="badge badge-outline">Guest Experience</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Project Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-6">
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title font-Outfit text-2xl">🎯 La Sfida</h2>
                        <p className="text-base-content/80">
                            I parchi acquatici come Caribe Bay affrontavano il problema delle lunghe code fisiche alle attrazioni, 
                            che causavano frustrazione negli ospiti, riducevano la soddisfazione e limitavano le opportunità di consumo nel parco.
                        </p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title font-Outfit text-2xl">💡 La Soluzione Innovativa</h2>
                        <p className="text-base-content/80 mb-4">
                            Ho progettato un sistema di coda virtuale che permette agli ospiti di prenotare l'accesso alle attrazioni con anticipo, 
                            liberandoli dalle attese fisiche e permettendo di esplorare il parco, consumare e godersi l'esperienza.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="stat bg-base-200 rounded-lg">
                                <div className="stat-title">Prenotazione</div>
                                <div className="stat-value text-lg">Smart</div>
                                <div className="stat-desc">Anticipo di minuti</div>
                            </div>
                            <div className="stat bg-base-200 rounded-lg">
                                <div className="stat-title">Esperienza</div>
                                <div className="stat-value text-lg">Libera</div>
                                <div className="stat-desc">Esplora il parco</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title font-Outfit">📊 Risultati Eccezionali</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Prenotazioni/Stagione</span>
                                <span className="font-bold text-info">15K+</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Tempo Risparmiato</span>
                                <span className="font-bold text-success">50min</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Soddisfazione Ospiti</span>
                                <span className="font-bold text-warning">+85%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title font-Outfit">🛠️ Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            <div className="badge badge-sm">React Native</div>
                            <div className="badge badge-sm">Node.js</div>
                            <div className="badge badge-sm">MongoDB</div>
                            <div className="badge badge-sm">Socket.io</div>
                            <div className="badge badge-sm">Redis</div>
                            <div className="badge badge-sm">Push Notifications</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
            <h2 className="text-3xl font-bold font-Outfit text-center mb-8">🌊 Sistema di Coda Virtuale Avanzato</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card bg-gradient-to-br from-cyan-500/5 to-cyan-500/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">📱</div>
                        <h3 className="card-title justify-center font-Outfit">Prenotazione Intuitiva</h3>
                        <p className="text-sm">Interfaccia semplice per prenotare l'accesso alle attrazioni preferite</p>
                    </div>
                </div>
                
                <div className="card bg-gradient-to-br from-blue-500/5 to-blue-500/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">⏰</div>
                        <h3 className="card-title justify-center font-Outfit">Timing Ottimizzato</h3>
                        <p className="text-sm">Algoritmi intelligenti per calcolare i tempi di attesa ottimali</p>
                    </div>
                </div>
                
                <div className="card bg-gradient-to-br from-teal-500/5 to-teal-500/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">🔔</div>
                        <h3 className="card-title justify-center font-Outfit">Notifiche Smart</h3>
                        <p className="text-sm">Avvisi tempestivi quando è il momento di dirigersi all'attrazione</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Impact Section */}
        <div className="card bg-gradient-to-r from-success/10 to-success/5 shadow-xl mb-8">
            <div className="card-body">
                <h2 className="card-title font-Outfit text-2xl text-center w-full justify-center mb-6">🎯 Impatto sulla Guest Experience</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                        <div className="stat-value text-info">15,000 🎢</div>
                        <div className="stat-title">Prenotazioni per Stagione</div>
                        <div className="stat-desc">Sistema ampiamente adottato dagli ospiti</div>
                    </div>
                    <div className="text-center">
                        <div className="stat-value text-success">50 minuti ⏳</div>
                        <div className="stat-title">Tempo Risparmiato</div>
                        <div className="stat-desc">Per ogni prenotazione effettuata</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Business Impact */}
        <div className="card bg-base-100 shadow-lg mb-8">
            <div className="card-body">
                <h2 className="card-title font-Outfit text-2xl">💼 Impatto Business</h2>
                <div className="grid md:grid-cols-3 gap-6 mt-4">
                    <div className="text-center">
                        <div className="text-4xl mb-2">😊</div>
                        <h3 className="font-semibold">Soddisfazione Ospiti</h3>
                        <p className="text-sm text-base-content/80">Esperienza più rilassante e piacevole nel parco</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-2">💰</div>
                        <h3 className="font-semibold">Incremento Consumi</h3>
                        <p className="text-sm text-base-content/80">Ospiti liberi di esplorare shop e ristoranti</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-2">📈</div>
                        <h3 className="font-semibold">Efficienza Operativa</h3>
                        <p className="text-sm text-base-content/80">Gestione ottimizzata dei flussi di visitatori</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Learning & Growth */}
        <div className="card bg-base-100 shadow-lg mb-8">
            <div className="card-body">
                <h2 className="card-title font-Outfit text-2xl">🌟 Competenze Sviluppate</h2>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <h3 className="font-semibold mb-2">Innovazione nel Settore</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-base-content/80">
                            <li>Progettazione di sistemi per parchi a tema</li>
                            <li>Algoritmi di ottimizzazione dei flussi</li>
                            <li>User experience per ambienti ricreativ</li>
                            <li>Gestione di picchi di utilizzo stagionali</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Valore Aggiunto</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-base-content/80">
                            <li>Trasformazione dell'esperienza ospite</li>
                            <li>Incremento della soddisfazione clienti</li>
                            <li>Ottimizzazione delle operazioni del parco</li>
                            <li>Creazione di nuove opportunità di business</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </ProjectContainer>
}