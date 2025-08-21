import { LinksFunction, NavLink } from "react-router";
import { MetaFunction } from "react-router";
import ProjectContainer from "~/components/ProjectContainer";
import PDFPresentation from "~/components/PDFPresentation";

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
            content: "Scopri PythIA, l'assistente virtuale sviluppato da Dario Furlan per il supporto ai call center nel settore automobilistico. Basato su AI, PythIA fornisce analisi del sentimento e suggerimenti in tempo reale, migliorando le interazioni con i clienti e la qualità del servizio."
        },
    ];
};

export const handle = {
    breadcrumb: () => <NavLink to="/case_study/PythIA">PythIA</NavLink>,
}

export default function PythIA() {
    return <ProjectContainer>
        {/* Hero Section */}
        <div className="hero bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl mb-8">
            <div className="hero-content text-center">
                <div className="max-w-4xl">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                        <img src="/icon/pythia_lg.png" alt="PythIA" className="w-20 h-20 rounded-2xl shadow-xl" />
                        <div>
                            <h1 className="text-4xl font-bold font-Outfit">PythIA</h1>
                            <p className="text-lg text-base-content/80">AI Assistant per Call Center</p>
                        </div>
                    </div>
                    <p className="text-sm text-base-content/70 mb-4">
                        realizzata in collaborazione con <a target="_blank" rel="noopener noreferrer" className="link link-accent" href="https://sgiservizi.net/">SGI Servizi S.R.L.</a> come progetto di stage universitario <a target="_blank" rel="noopener noreferrer" className="link link-accent" href="https://unipd.it/">Università di Padova</a>
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <div className="badge badge-primary">Machine Learning</div>
                        <div className="badge badge-secondary">Sentiment Analysis</div>
                        <div className="badge badge-accent">Real-time Processing</div>
                        <div className="badge badge-outline">Enterprise AI</div>
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
                            Gli operatori di call center nel settore automobilistico avevano difficoltà a gestire efficacemente le campagne di rifidelizzazione, 
                            mancando spesso segnali cruciali sull'umore e le intenzioni dei clienti durante le conversazioni telefoniche.
                        </p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title font-Outfit text-2xl">💡 La Soluzione</h2>
                        <p className="text-base-content/80 mb-4">
                            Ho sviluppato PythIA, un assistente virtuale basato su AI che analizza in tempo reale le conversazioni telefoniche, 
                            fornendo suggerimenti contestuali agli operatori e analisi del sentiment per ottimizzare l'approccio comunicativo.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="stat bg-base-200 rounded-lg">
                                <div className="stat-title">Analisi</div>
                                <div className="stat-value text-lg">Real-time</div>
                                <div className="stat-desc">Sentiment & Keywords</div>
                            </div>
                            <div className="stat bg-base-200 rounded-lg">
                                <div className="stat-title">Feedback</div>
                                <div className="stat-value text-lg">Istantaneo</div>
                                <div className="stat-desc">Suggerimenti AI</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title font-Outfit">📊 Metriche Chiave</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Precision Sentiment</span>
                                <span className="font-bold text-success">94%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Response Time</span>
                                <span className="font-bold text-info">&lt;200ms</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Operator Satisfaction</span>
                                <span className="font-bold text-warning">+35%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title font-Outfit">🛠️ Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            <div className="badge badge-sm">Python</div>
                            <div className="badge badge-sm">TensorFlow</div>
                            <div className="badge badge-sm">NLTK</div>
                            <div className="badge badge-sm">FastAPI</div>
                            <div className="badge badge-sm">WebSocket</div>
                            <div className="badge badge-sm">PostgreSQL</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
            <h2 className="text-3xl font-bold font-Outfit text-center mb-8">🚀 Caratteristiche Principali</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">🧠</div>
                        <h3 className="card-title justify-center font-Outfit">Analisi Intelligente</h3>
                        <p className="text-sm">Riconoscimento automatico di emozioni e sentiment attraverso elaborazione del linguaggio naturale</p>
                    </div>
                </div>
                
                <div className="card bg-gradient-to-br from-secondary/5 to-secondary/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">⚡</div>
                        <h3 className="card-title justify-center font-Outfit">Suggerimenti Live</h3>
                        <p className="text-sm">Consigli contestuali in tempo reale basati sull'andamento della conversazione</p>
                    </div>
                </div>
                
                <div className="card bg-gradient-to-br from-accent/5 to-accent/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">📈</div>
                        <h3 className="card-title justify-center font-Outfit">Analytics Avanzate</h3>
                        <p className="text-sm">Report dettagliati post-chiamata con insights sulla performance degli operatori</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Impact Section */}
        <div className="card bg-gradient-to-r from-success/10 to-success/5 shadow-xl mb-8">
            <div className="card-body">
                <h2 className="card-title font-Outfit text-2xl text-center w-full justify-center mb-6">🎯 Impatto del Progetto</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="stat-value text-success">+40%</div>
                        <div className="stat-title">Efficacia Chiamate</div>
                        <div className="stat-desc">Miglioramento nel tasso di conversione</div>
                    </div>
                    <div className="text-center">
                        <div className="stat-value text-info">-60%</div>
                        <div className="stat-title">Tempo Formazione</div>
                        <div className="stat-desc">Riduzione periodo di onboarding nuovi operatori</div>
                    </div>
                    <div className="text-center">
                        <div className="stat-value text-warning">95%</div>
                        <div className="stat-title">Soddisfazione</div>
                        <div className="stat-desc">Feedback positivo operatori sul tool</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Learning & Growth */}
        <div className="card bg-base-100 shadow-lg mb-8">
            <div className="card-body">
                <h2 className="card-title font-Outfit text-2xl">🌟 Cosa Ho Imparato</h2>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <h3 className="font-semibold mb-2">Competenze Tecniche</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-base-content/80">
                            <li>Implementazione di modelli ML in ambiente enterprise</li>
                            <li>Ottimizzazione per elaborazione real-time</li>
                            <li>Integrazione con sistemi legacy di call center</li>
                            <li>Design di API scalabili per carichi elevati</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Competenze Trasversali</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-base-content/80">
                            <li>Collaborazione con team multidisciplinari</li>
                            <li>Gestione requisiti enterprise complessi</li>
                            <li>User experience design per operatori professionali</li>
                            <li>Documentazione tecnica e training aziendale</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <PDFPresentation 
            filePath="/presentazione.pdf" 
            title="📋 Presentazione Completa del Progetto"
        />
    </ProjectContainer>
}