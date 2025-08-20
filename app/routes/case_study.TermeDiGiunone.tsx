import { LinksFunction } from "react-router";
import { MetaFunction } from "react-router";
import ProjectContainer from "~/components/ProjectContainer";

export const links: LinksFunction = () => {
    return [{
        rel: 'canonical', href: "https://dariofurlan.com/case_study/TermeDiGiunone"
    }];
};

export const meta: MetaFunction = () => {
  return [
    { title: "Terme di Giunone: Sistema Bigliettazione QR Dinamici | Case Study di Dario Furlan" },
    { name: "description", content: "Scopri come il sistema di bigliettazione digitale di Terme di Giunone, basato sui QR dinamici di Vanilla, trasforma l'accesso alle terme con abbonamenti digitali e controllo anti-contraffazione." },
  ];
};

export const handle = {
  breadcrumb: () => ({
    label: "TermeDiGiunone.tsx"
  })
};

export default function TermeDiGiunone() {
    return <ProjectContainer>
        {/* Hero Section */}
        <div className="hero bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-xl mb-8">
            <div className="hero-content text-center">
                <div className="max-w-4xl">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                        <img src="/icon/terme-giunone_lg.png" alt="Terme di Giunone" className="w-20 h-20 rounded-2xl shadow-xl" />
                        <div>
                            <h1 className="text-4xl font-bold font-Outfit">Terme di Giunone</h1>
                            <p className="text-lg text-base-content/80">Sistema Bigliettazione Digitale per Terme</p>
                        </div>
                    </div>
                    <p className="text-sm text-base-content/70 mb-4">
                        realizzata in collaborazione con <a target="_blank" rel="noopener noreferrer" className="link link-accent" href="https://42night.club/">42Night S.R.L.</a>
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <div className="badge badge-primary">QR Dynamic</div>
                        <div className="badge badge-secondary">Digital Ticketing</div>
                        <div className="badge badge-accent">Anti-counterfeiting</div>
                        <div className="badge badge-outline">Wellness Tech</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Project Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-6">
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title font-Outfit text-2xl">🎯 L'Evoluzione</h2>
                        <p className="text-base-content/80">
                            Terme di Giunone rappresenta l'adattamento della tecnologia QR dinamico sviluppata per Vanilla Club 
                            al settore termale. Un sistema completo che gestisce pre-registrazione, abbonamenti familiari e 
                            bigliettazione digitale anti-contraffazione.
                        </p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title font-Outfit text-2xl">💡 Il Flusso Innovativo</h2>
                        <p className="text-base-content/80 mb-4">
                            Il cliente si pre-registra online con tutti i dati familiari, sceglie l'abbonamento desiderato, 
                            e riceve biglietti digitali collegati ai QR personali. La biglietteria fisica emette i tickets 
                            che garantiscono accessi rapidi e sicuri alle terme.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="stat bg-base-200 rounded-lg">
                                <div className="stat-title">Sicurezza</div>
                                <div className="stat-value text-lg">QR Dinamico</div>
                                <div className="stat-desc">Anti-contraffazione</div>
                            </div>
                            <div className="stat bg-base-200 rounded-lg">
                                <div className="stat-title">Famiglia</div>
                                <div className="stat-value text-lg">Multi-User</div>
                                <div className="stat-desc">Abbonamenti condivisi</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title font-Outfit">📊 Risultati Impeccabili</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Riduzione Code</span>
                                <span className="font-bold text-success">85%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Check-in Medio</span>
                                <span className="font-bold text-info">3 sec</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Contraffazioni</span>
                                <span className="font-bold text-warning">0</span>
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
                            <div className="badge badge-sm">Redis</div>
                            <div className="badge badge-sm">AWS EC2</div>
                            <div className="badge badge-sm">JWT</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
            <h2 className="text-3xl font-bold font-Outfit text-center mb-8">🚀 Ecosystem Termale Digitale</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card bg-gradient-to-br from-blue-500/5 to-blue-500/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">📝</div>
                        <h3 className="card-title justify-center font-Outfit text-sm">Pre-registrazione</h3>
                        <p className="text-xs">Sistema online per registrazione cliente e familiari</p>
                    </div>
                </div>
                
                <div className="card bg-gradient-to-br from-teal-500/5 to-teal-500/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">💳</div>
                        <h3 className="card-title justify-center font-Outfit text-sm">Abbonamenti Smart</h3>
                        <p className="text-xs">Gestione tariffe personalizzate e abbonamenti familiari</p>
                    </div>
                </div>
                
                <div className="card bg-gradient-to-br from-purple-500/5 to-purple-500/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">🔐</div>
                        <h3 className="card-title justify-center font-Outfit text-sm">QR Dinamico</h3>
                        <p className="text-xs">Codici anti-contraffazione che cambiano dinamicamente</p>
                    </div>
                </div>
                
                <div className="card bg-gradient-to-br from-orange-500/5 to-orange-500/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">📈</div>
                        <h3 className="card-title justify-center font-Outfit text-sm">Business Intelligence</h3>
                        <p className="text-xs">Da biglietti anonimi a decisioni strategiche data-driven</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Impact Stats */}
        <div className="card bg-gradient-to-r from-success/10 to-success/5 shadow-xl mb-8">
            <div className="card-body">
                <h2 className="card-title font-Outfit text-2xl text-center w-full justify-center mb-6">🎯 Trasformazione Digitale delle Terme</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="stat-value text-success">2000+ 🧖‍♀️</div>
                        <div className="stat-title">Pre-registrazioni</div>
                        <div className="stat-desc">Clienti che hanno scelto il digitale</div>
                    </div>
                    <div className="text-center">
                        <div className="stat-value text-error">0 🚫</div>
                        <div className="stat-title">Contraffazioni</div>
                        <div className="stat-desc">QR dinamici 100% sicuri</div>
                    </div>
                    <div className="text-center">
                        <div className="stat-value text-info">70.000+ 🏊‍♀️</div>
                        <div className="stat-title">Accessi Stagionali</div>
                        <div className="stat-desc">Volume gestito per stagione</div>
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
                        <h3 className="font-semibold mb-2">Trasformazione Business Intelligence</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-base-content/80">
                            <li>Da biglietti anonimi a dati strutturati sui clienti</li>
                            <li>Analytics su frequenza, orari e pattern di utilizzo</li>
                            <li>Dashboard manageriali per decisioni strategiche</li>
                            <li>Comprensione profonda della clientela e preferenze</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Sicurezza & Performance</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-base-content/80">
                            <li>QR dinamici avanzati per anti-contraffazione</li>
                            <li>Ottimizzazione per accessi simultanei</li>
                            <li>Cache Redis per performance critiche</li>
                            <li>Validazione multi-layer per sicurezza</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </ProjectContainer>
}