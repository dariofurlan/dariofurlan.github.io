import { LinksFunction, NavLink, MetaFunction } from "react-router";
import ProjectContainer from "~/components/ProjectContainer";

export const links: LinksFunction = () => {
    return [{
        rel: 'canonical', href: "https://dariofurlan.it/project/Scissorhands2022"
    }];
};

export const meta: MetaFunction = () => {
    return [
        { title: "Barber Scissorhands - Sistema di Prenotazioni Web | Progetto Accademico di Dario Furlan" },
        {
            name: "description",
            content: "Scopri Barber Scissorhands, un sistema di prenotazioni online per barbiere sviluppato in team da Dario Furlan per il corso di Tecnologie Web. Focus su accessibilità, mobile-first design e architettura MVC con PHP e MySQL."
        },
    ];
};

export const handle = {
    breadcrumb: () => <NavLink to="/project/Scissorhands2022">Barber Scissorhands - Web Tech 2022</NavLink>,
}

export default function Scissorhands2022() {
    return <ProjectContainer>
        {/* Hero Section */}
        <div className="hero bg-gradient-to-r from-warning/10 to-error/10 rounded-xl mb-8">
            <div className="hero-content text-center">
                <div className="max-w-4xl">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                        <div className="w-20 h-20 rounded-2xl shadow-xl bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center text-white text-3xl">
                            💈
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold font-Outfit">Barber Scissorhands</h1>
                            <p className="text-lg text-base-content/80">Sistema di Prenotazioni Online</p>
                        </div>
                    </div>
                    <p className="text-sm text-base-content/70 mb-4">
                        🎓 Progetto di Gruppo - <a target="_blank" rel="noopener noreferrer" className="link link-accent" href="https://unipd.it/">Università di Padova</a><br/>
                        Corso di Tecnologie Web - A.A. 2021/2022
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <div className="badge badge-warning">HTML5</div>
                        <div className="badge badge-error">CSS3</div>
                        <div className="badge badge-accent">JavaScript</div>
                        <div className="badge badge-primary">PHP</div>
                        <div className="badge badge-info">MySQL</div>
                        <div className="badge badge-success">Mobile First</div>
                        <div className="badge badge-outline">Accessibility</div>
                        <div className="badge badge-outline">MVC Pattern</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Team Collaboration Alert */}
        <div className="alert alert-info mb-8">
            <div className="flex items-center gap-3">
                <div className="text-2xl">👥</div>
                <div>
                    <h3 className="font-semibold">Progetto di Team</h3>
                    <p className="text-sm">
                        Sviluppato in collaborazione con <strong>Francesco Bacchin</strong>, <strong>Matteo Bellato</strong> e <strong>Leila Dardouri</strong> 
                        - un'esperienza di sviluppo collaborativo che ha insegnato teamwork, code review e gestione progetti condivisi.
                    </p>
                </div>
            </div>
        </div>

        {/* Project Overview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
                <h2 className="text-2xl font-bold font-Outfit mb-4">💇‍♂️ Il Progetto</h2>
                <div className="prose max-w-none">
                    <p>
                        Barber Scissorhands nasce dall'idea di modernizzare l'esperienza di prenotazione 
                        per un barbiere tradizionale di Padova, creando un ponte tra il mondo fisico 
                        e quello digitale.
                    </p>
                    <p>
                        Il focus principale è stato creare un'<strong>esperienza utente ottimale</strong> per 
                        una clientela diversificata, dai giovani agli adulti fino ai 50 anni, con particolare 
                        attenzione all'<strong>accessibilità</strong> e all'<strong>usabilità</strong>.
                    </p>
                    <p>
                        Il risultato è un sistema completo che permette la gestione autonoma delle 
                        prenotazioni, la visualizzazione dei servizi e del team, tutto attraverso 
                        un'interfaccia moderna ma intuitiva.
                    </p>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold font-Outfit mb-4">🎯 Obiettivi del Corso</h2>
                <div className="prose max-w-none">
                    <p>
                        Il corso di Tecnologie Web richiedeva la dimostrazione di competenze in:
                    </p>
                    <ul>
                        <li><strong>Frontend moderno:</strong> HTML5 semantico, CSS3 avanzato, JavaScript</li>
                        <li><strong>Backend robusto:</strong> PHP con architettura MVC</li>
                        <li><strong>Database design:</strong> MySQL ottimizzato</li>
                        <li><strong>Accessibility:</strong> WCAG compliance e screen reader support</li>
                        <li><strong>Cross-browser:</strong> Compatibilità multi-browser</li>
                        <li><strong>Mobile First:</strong> Responsive design prioritario</li>
                    </ul>
                    <p>
                        Ogni aspetto è stato testato rigorosamente con strumenti professionali 
                        come W3C Validators, WAVE e NVDA screen reader.
                    </p>
                </div>
            </div>
        </div>

        {/* Features Showcase */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">✨ Funzionalità Principali</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Online Booking */}
                <div className="card bg-primary/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">📅</div>
                        <h3 className="card-title justify-center">Prenotazioni Online</h3>
                        <p className="text-sm">Sistema intuitivo per prenotare appuntamenti con disponibilità in tempo reale</p>
                    </div>
                </div>

                {/* Staff Management */}
                <div className="card bg-secondary/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">👨‍💼</div>
                        <h3 className="card-title justify-center">Team & Servizi</h3>
                        <p className="text-sm">Pagine dedicate con foto, biografie del personale e descrizioni dettagliate dei servizi</p>
                    </div>
                </div>

                {/* Gallery */}
                <div className="card bg-accent/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">🖼️</div>
                        <h3 className="card-title justify-center">Gallery</h3>
                        <p className="text-sm">Showcase dei lavori precedenti e dell'ambiente del negozio</p>
                    </div>
                </div>

                {/* Account Management */}
                <div className="card bg-info/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">👤</div>
                        <h3 className="card-title justify-center">Gestione Account</h3>
                        <p className="text-sm">Registrazione, profilo personale e storico delle prenotazioni</p>
                    </div>
                </div>

                {/* Location & Contact */}
                <div className="card bg-success/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">📍</div>
                        <h3 className="card-title justify-center">Contatti & Mappa</h3>
                        <p className="text-sm">Informazioni di contatto, orari e mappa statica della location</p>
                    </div>
                </div>

                {/* Accessibility */}
                <div className="card bg-warning/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">♿</div>
                        <h3 className="card-title justify-center">Accessibilità</h3>
                        <p className="text-sm">Design inclusivo con supporto screen reader e navigazione semplificata</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Technical Architecture */}
        <div className="bg-base-200 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">🏗️ Architettura Tecnica</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">🎨 Frontend</h3>
                    <div className="space-y-4">
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-warning">HTML5 Semantico</h4>
                            <p className="text-sm text-base-content/70">Struttura semantica per migliorare SEO e accessibilità</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-error">CSS3 Mobile First</h4>
                            <p className="text-sm text-base-content/70">Design responsive partendo da mobile, con layout flessibili</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-accent">JavaScript Vanilla</h4>
                            <p className="text-sm text-base-content/70">Validazione form e miglioramenti progressivi dell'UX</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-secondary">⚙️ Backend</h3>
                    <div className="space-y-4">
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-primary">PHP MVC Architecture</h4>
                            <p className="text-sm text-base-content/70">Separazione logica tra Models, Services e Controllers</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-info">MySQL Database</h4>
                            <p className="text-sm text-base-content/70">Database relazionale ottimizzato per gestione prenotazioni</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-success">Session Management</h4>
                            <p className="text-sm text-base-content/70">Gestione sicura delle sessioni utente e autenticazione</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Accessibility Focus */}
        <div className="bg-gradient-to-r from-info/5 to-success/5 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">♿ Focus sull'Accessibilità</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                    <div className="text-4xl mb-3">👁️</div>
                    <h3 className="font-semibold text-info mb-2">Leggibilità</h3>
                    <p className="text-sm text-base-content/70">Contrasti elevati, font leggibili, dimensioni ottimizzate per tutte le età</p>
                </div>
                <div className="text-center">
                    <div className="text-4xl mb-3">🧭</div>
                    <h3 className="font-semibold text-success mb-2">Navigazione</h3>
                    <p className="text-sm text-base-content/70">Struttura intuitiva, breadcrumb, focus indicators e skip links</p>
                </div>
                <div className="text-center">
                    <div className="text-4xl mb-3">🔊</div>
                    <h3 className="font-semibold text-warning mb-2">Screen Reader</h3>
                    <p className="text-sm text-base-content/70">Compatibilità completa con NVDA e altri screen reader assistivi</p>
                </div>
            </div>
        </div>

        {/* Testing & Validation */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">🔍 Testing & Validazione</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body">
                        <h3 className="card-title text-primary mb-3">🌐 Cross-Browser Testing</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-success rounded-full"></div>
                                <span className="text-sm">Google Chrome - Fully Compatible</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-success rounded-full"></div>
                                <span className="text-sm">Mozilla Firefox - Fully Compatible</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-success rounded-full"></div>
                                <span className="text-sm">Microsoft Edge - Fully Compatible</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-success rounded-full"></div>
                                <span className="text-sm">Opera - Fully Compatible</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-success rounded-full"></div>
                                <span className="text-sm">Safari - Fully Compatible</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body">
                        <h3 className="card-title text-secondary mb-3">✅ Standards Validation</h3>
                        <div className="space-y-3">
                            <div className="bg-base-100 p-3 rounded-lg">
                                <h4 className="font-semibold text-sm text-info">W3C HTML Validator</h4>
                                <p className="text-xs text-base-content/70">Markup semantico validato secondo standard HTML5</p>
                            </div>
                            <div className="bg-base-100 p-3 rounded-lg">
                                <h4 className="font-semibold text-sm text-success">W3C CSS Validator</h4>
                                <p className="text-xs text-base-content/70">Fogli di stile conformi alle specifiche CSS3</p>
                            </div>
                            <div className="bg-base-100 p-3 rounded-lg">
                                <h4 className="font-semibold text-sm text-warning">WAVE Accessibility</h4>
                                <p className="text-xs text-base-content/70">Valutazione accessibilità e compatibilità WCAG</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Team Collaboration Insights */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">🤝 Collaborazione di Team</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">👥 Team Members</h3>
                    <div className="space-y-3">
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold">Francesco Bacchin</h4>
                            <p className="text-sm text-base-content/70">Frontend Development & UI/UX Design</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold">Matteo Bellato</h4>
                            <p className="text-sm text-base-content/70">Backend Development & Database Design</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold">Leila Dardouri</h4>
                            <p className="text-sm text-base-content/70">Frontend Development & Accessibility Testing</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold">Dario Furlan</h4>
                            <p className="text-sm text-base-content/70">Full-Stack Development & Architecture</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-secondary">💼 Competenze Acquisite</h3>
                    <div className="space-y-3">
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-info">Git Collaboration</h4>
                            <p className="text-sm text-base-content/70">Gestione branch, merge conflicts, code review</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-success">Task Division</h4>
                            <p className="text-sm text-base-content/70">Suddivisione efficace del lavoro e coordinamento</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-warning">Quality Assurance</h4>
                            <p className="text-sm text-base-content/70">Testing collaborativo e validation standards</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-error">Problem Solving</h4>
                            <p className="text-sm text-base-content/70">Risoluzione collaborativa di problemi complessi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Technical Stats */}
        <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-base-200 w-full mb-8">
            <div className="stat">
                <div className="stat-figure text-warning">
                    <div className="text-3xl">👥</div>
                </div>
                <div className="stat-title">Team Size</div>
                <div className="stat-value text-warning">4</div>
                <div className="stat-desc">Sviluppatori</div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-error">
                    <div className="text-3xl">🌐</div>
                </div>
                <div className="stat-title">Browser Support</div>
                <div className="stat-value text-error">5</div>
                <div className="stat-desc">Cross-platform</div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-accent">
                    <div className="text-3xl">♿</div>
                </div>
                <div className="stat-title">WCAG</div>
                <div className="stat-value text-accent">AA</div>
                <div className="stat-desc">Compliance</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-info">
                    <div className="text-3xl">📱</div>
                </div>
                <div className="stat-title">Design</div>
                <div className="stat-value text-info">Mobile</div>
                <div className="stat-desc">First Approach</div>
            </div>
        </div>

        {/* Learning Outcomes */}
        <div className="card bg-gradient-to-r from-success/10 to-info/10 shadow-xl mb-8">
            <div className="card-body">
                <div className="text-center mb-6">
                    <div className="text-4xl mb-4">🎓</div>
                    <h3 className="card-title justify-center text-2xl font-Outfit">Competenze Sviluppate</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-success mb-3">🔧 Competenze Tecniche</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-success rounded-full"></div>
                                <span className="text-sm">Full-stack web development con PHP e MySQL</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-success rounded-full"></div>
                                <span className="text-sm">Responsive design e mobile-first methodology</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-success rounded-full"></div>
                                <span className="text-sm">Web accessibility e WCAG compliance</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-success rounded-full"></div>
                                <span className="text-sm">Cross-browser compatibility e testing</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-info mb-3">👥 Soft Skills</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-info rounded-full"></div>
                                <span className="text-sm">Teamwork e gestione progetti collaborativi</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-info rounded-full"></div>
                                <span className="text-sm">Code review e quality assurance</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-info rounded-full"></div>
                                <span className="text-sm">Problem-solving collaborativo</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-info rounded-full"></div>
                                <span className="text-sm">Comunicazione tecnica efficace</span>
                            </li>
                        </ul>
                    </div>
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
                        Il progetto Barber Scissorhands ha dimostrato eccellenza nello sviluppo web full-stack, 
                        ottenendo riconoscimento per l'approccio professionale all'accessibilità, la qualità 
                        del codice e la capacità di lavorare efficacemente in team su un progetto complesso.
                    </p>
                </div>
            </div>
        </div>
    </ProjectContainer>
}