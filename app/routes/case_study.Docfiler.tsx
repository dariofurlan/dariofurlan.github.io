import { LinksFunction } from "react-router";
import { MetaFunction } from "react-router";
import ProjectContainer from "~/components/ProjectContainer";

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
            "content": "Scopri DocFiler, il portale sviluppato da Dario Furlan per ESNA SOA, che facilita la raccolta documentale con accesso SPID e certificazione tramite blockchain. Un sistema avanzato per la gestione sicura e organizzata dei documenti per le certificazioni, semplificando i processi aziendali e migliorando l'efficienza."
        }
    ];
};

export default function Docfiler() {
    return <ProjectContainer>
        {/* Hero Section */}
        <div className="hero bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl mb-8">
            <div className="hero-content text-center">
                <div className="max-w-4xl">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                        <img src="/icon/docfiler_lg.png" alt="DocFiler" className="w-20 h-20 rounded-2xl shadow-xl" />
                        <div>
                            <h1 className="text-4xl font-bold font-Outfit">DocFiler</h1>
                            <p className="text-lg text-base-content/80">Portale Documentale SPID & Blockchain</p>
                        </div>
                    </div>
                    <p className="text-sm text-base-content/70 mb-4">
                        realizzata in collaborazione con <a target="_blank" rel="noopener noreferrer" className="link link-accent" href="https://sgiservizi.net/">SGI Servizi S.R.L.</a> per <strong>ESNA SOA</strong>
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <div className="badge badge-primary">SPID Integration</div>
                        <div className="badge badge-secondary">Blockchain</div>
                        <div className="badge badge-accent">Document Management</div>
                        <div className="badge badge-outline">Enterprise Portal</div>
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
                            ESNA SOA gestiva la raccolta documentale per le certificazioni tramite email tradizionali, 
                            causando disorganizzazione, perdite di tempo, difficoltà di tracciabilità e processi manuali inefficienti 
                            che rallentavano l'intero iter di certificazione.
                        </p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title font-Outfit text-2xl">💡 La Soluzione Digitale</h2>
                        <p className="text-base-content/80 mb-4">
                            Ho progettato DocFiler, un portale sicuro con autenticazione SPID che guida i clienti nel caricamento 
                            strutturato dei documenti, integrando blockchain per la marcatura temporale e garantendo tracciabilità completa.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="stat bg-base-200 rounded-lg">
                                <div className="stat-title">Autenticazione</div>
                                <div className="stat-value text-lg">SPID</div>
                                <div className="stat-desc">Sicurezza garantita</div>
                            </div>
                            <div className="stat bg-base-200 rounded-lg">
                                <div className="stat-title">Certificazione</div>
                                <div className="stat-value text-lg">Blockchain</div>
                                <div className="stat-desc">Timestamp immutabile</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title font-Outfit">📊 Risultati Operativi</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Riduzione Tempo</span>
                                <span className="font-bold text-success">-75%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Sicurezza SPID</span>
                                <span className="font-bold text-info">100%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Tracciabilità</span>
                                <span className="font-bold text-warning">Completa</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title font-Outfit">🛠️ Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            <div className="badge badge-sm">React</div>
                            <div className="badge badge-sm">Node.js</div>
                            <div className="badge badge-sm">SPID</div>
                            <div className="badge badge-sm">Blockchain</div>
                            <div className="badge badge-sm">PostgreSQL</div>
                            <div className="badge badge-sm">Express</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
            <h2 className="text-3xl font-bold font-Outfit text-center mb-8">🔐 Ecosistema Documentale Sicuro</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">🆔</div>
                        <h3 className="card-title justify-center font-Outfit text-sm">SPID Login</h3>
                        <p className="text-xs">Autenticazione sicura tramite identità digitale nazionale</p>
                    </div>
                </div>
                
                <div className="card bg-gradient-to-br from-teal-500/5 to-teal-500/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">📋</div>
                        <h3 className="card-title justify-center font-Outfit text-sm">Upload Guidato</h3>
                        <p className="text-xs">Interfaccia intuitiva per caricamento strutturato documenti</p>
                    </div>
                </div>
                
                <div className="card bg-gradient-to-br from-cyan-500/5 to-cyan-500/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">⛓️</div>
                        <h3 className="card-title justify-center font-Outfit text-sm">Blockchain Stamp</h3>
                        <p className="text-xs">Marcatura temporale immutabile per certificazione upload</p>
                    </div>
                </div>
                
                <div className="card bg-gradient-to-br from-blue-500/5 to-blue-500/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">📊</div>
                        <h3 className="card-title justify-center font-Outfit text-sm">Gestione Automatizzata</h3>
                        <p className="text-xs">Organizzazione automatica e tracciabilità completa</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Process Comparison */}
        <div className="mb-12">
            <h2 className="text-3xl font-bold font-Outfit text-center mb-8">⚡ Trasformazione del Processo</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="card bg-gradient-to-br from-red-500/5 to-red-500/10 shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title text-red-600 font-Outfit">❌ Prima (Email)</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="text-red-500">•</span>
                                Invio documenti via email disorganizzata
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-red-500">•</span>
                                Archivi compressi da gestire manualmente
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-red-500">•</span>
                                Nessuna tracciabilità delle date
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-red-500">•</span>
                                Processo lungo e inefficiente
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="card bg-gradient-to-br from-green-500/5 to-green-500/10 shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title text-green-600 font-Outfit">✅ Dopo (DocFiler)</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="text-green-500">•</span>
                                Upload guidato e strutturato
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-500">•</span>
                                Organizzazione automatica documenti
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-500">•</span>
                                Certificazione blockchain timestamp
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-500">•</span>
                                Processo rapido e tracciabile
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Impact Section */}
        <div className="card bg-gradient-to-r from-success/10 to-success/5 shadow-xl mb-8">
            <div className="card-body">
                <h2 className="card-title font-Outfit text-2xl text-center w-full justify-center mb-6">🎯 Impatto sulla Digitalizzazione</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="stat-value text-success">-75% ⏱️</div>
                        <div className="stat-title">Riduzione Tempi</div>
                        <div className="stat-desc">Processo di raccolta documentale automatizzato</div>
                    </div>
                    <div className="text-center">
                        <div className="stat-value text-info">100% 🔐</div>
                        <div className="stat-title">Sicurezza SPID</div>
                        <div className="stat-desc">Identità verificata e conforme normative</div>
                    </div>
                    <div className="text-center">
                        <div className="stat-value text-warning">∞ 📊</div>
                        <div className="stat-title">Tracciabilità</div>
                        <div className="stat-desc">Blockchain garantisce immutabilità timestamp</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Technical Innovation */}
        <div className="card bg-base-100 shadow-lg mb-8">
            <div className="card-body">
                <h2 className="card-title font-Outfit text-2xl">🚀 Innovazione Tecnica</h2>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <h3 className="font-semibold mb-2">Sicurezza & Compliance</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-base-content/80">
                            <li>Integrazione completa del sistema SPID nazionale</li>
                            <li>Archiviazione sostitutiva a norma di legge</li>
                            <li>Marcatura temporale blockchain immutabile</li>
                            <li>Crittografia end-to-end per documenti sensibili</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Esperienza Utente</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-base-content/80">
                            <li>Interface guidata per upload documentale</li>
                            <li>Validazione real-time dei formati file</li>
                            <li>Progress tracking del processo di certificazione</li>
                            <li>Dashboard amministrativa per gestione ESNA SOA</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Business Value */}
        <div className="card bg-base-100 shadow-lg mb-8">
            <div className="card-body">
                <h2 className="card-title font-Outfit text-2xl">💼 Valore per il Business</h2>
                <div className="grid md:grid-cols-3 gap-6 mt-4">
                    <div className="text-center">
                        <div className="text-4xl mb-2">⚡</div>
                        <h3 className="font-semibold">Efficienza Operativa</h3>
                        <p className="text-sm text-base-content/80">Automazione completa del flusso documentale</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-2">🛡️</div>
                        <h3 className="font-semibold">Compliance Garantita</h3>
                        <p className="text-sm text-base-content/80">Conformità alle normative su identità digitale</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-2">📈</div>
                        <h3 className="font-semibold">Scalabilità Enterprise</h3>
                        <p className="text-sm text-base-content/80">Gestione di volumi documentali crescenti</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Learning & Growth */}
        <div className="card bg-base-100 shadow-lg mb-8">
            <div className="card-body">
                <h2 className="card-title font-Outfit text-2xl">🌟 Competenze Acquisite</h2>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <h3 className="font-semibold mb-2">Tecnologie Avanzate</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-base-content/80">
                            <li>Implementazione completa SPID in ambiente web</li>
                            <li>Integrazione blockchain per marcatura temporale</li>
                            <li>Archiviazione sostitutiva conforme alle normative</li>
                            <li>Sistemi di autenticazione enterprise-grade</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Impatto Aziendale</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-base-content/80">
                            <li>Digitalizzazione completa dei processi aziendali</li>
                            <li>Miglioramento drastico dell'efficienza operativa</li>
                            <li>Riduzione errori e perdite documentali</li>
                            <li>Creazione di competitive advantage tecnologico</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Call to Action */}
        <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 shadow-xl mb-8">
            <div className="card-body text-center">
                <h2 className="card-title justify-center font-Outfit text-2xl mb-4">🏢 Trasformazione Digitale Aziendale</h2>
                <p className="text-base-content/80 max-w-2xl mx-auto">
                    DocFiler rappresenta un esempio concreto di come la tecnologia possa trasformare processi aziendali complessi, 
                    migliorando efficienza, sicurezza e compliance in un'unica soluzione integrata.
                </p>
            </div>
        </div>
    </ProjectContainer>
}