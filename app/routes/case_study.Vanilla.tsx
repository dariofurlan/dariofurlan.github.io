import { LinksFunction, NavLink } from "react-router";
import { MetaFunction } from "react-router";
import NewsCard, { INewsPiece } from "~/components/NewsCard";
import ProjectContainer from "~/components/ProjectContainer";
import ProjectHead from "~/components/ProjectHead";

export const links: LinksFunction = () => {
    return [{
        rel: 'canonical', href: "https://dariofurlan.it/case_study/Vanilla"
    }];
};

export const meta: MetaFunction = () => {
    return [
        { title: "Vanilla Club App: Innovazione Digitale per Locali | Case Study di Dario Furlan" },
        {
            name: "description",
            content: "Scopri come l'app Vanilla, sviluppata per il Vanilla Club Jesolo, trasforma l'esperienza in discoteca con QR code, gestione ordini, pagamenti sicuri e reportistica in tempo reale. Un case study di innovazione tecnologica a cura di Dario Furlan e 42Night."
        },
    ];
};

export const handle = {
  breadcrumb: () => <NavLink to="case_study/Vanilla">Vanilla</NavLink>,
}

const news: INewsPiece[] = [
    {
        title: "Dario, 22 anni e un diploma in informatica, inventa l'app per entrare in discoteca in sicurezza",
        date: "Martedì 6 Settembre 2022",
        link: "https://www.ilgazzettino.it/nordest/padova/app_discoteca_entrare_in_sicurezza_dario_furlan-6911285.html",
        img: "/vanilla_hd.jpg"
    },
    {
        title: "Made in Padova la app per gli accessi sicuri in discoteca (testata al Vanilla)",
        date: "Sabato 3 Settembre 2022",
        link: "https://barbaraganz.blog.ilsole24ore.com/2022/09/04/made-in-padova-la-app-per-gli-accessi-sicuri-in-discoteca-testata-al-vanilla/",
        img: "/vanilla.jpg"
    },
    {
        title: "Jesolo, schedati con il cellulare: arriva l'app anti movida violenta per entrare in discoteca. «Ragioni di sicurezza»",
        date: "Sabato 13 Agosto 2022",
        link: "https://www.ilgazzettino.it/nordest/venezia/vanilla_app_anti_degrado_spaccio_movida_violenta_tracciamento_clienti_luciano_pareschi_sicurezza-6869697.html",
        img: "/vanilla_bg.jpg"
    },
    {
        title: "Vanilla Club di Jesolo sperimenta nuovo sistema di ingresso",
        date: "Sabato 15 Giugno 2022",
        link: "https://www.giornalenordest.it/sicurezza-locali-notturni-vanilla-club-di-jesolo-sperimenta-nuovo-sistema-di-ingresso/",
        img: "/vanilla_bg.jpg"
    },
    {
        title: "Pareschi (Vanilla Club): “A Jesolo si balla 'sicuri' con controllo ingressi a prova di app”",
        date: "02 Agosto 2022",
        link: "https://www.today.it/partner/adnkronos/economia/lavoro/estate-pareschi-vanilla-club-a-jesolo-si-balla_sicuri_con-controllo-ingressi-a-prova-di-app.html",
        img: "/vanilla_bg.jpg",
        // desc: "I titolari delle discoteche e dei locali da ballo hanno l'obbligo di garantire l'ordine e la sicurezza all'interno dei loro locali, pena la chiusura. Per questo, ma anche per senso di responsabilità nei confronti dei giovani che desiderano divertirsi e dei loro genitori, abbiamo investito in un nuovo sistema di controllo degli ingressi basato su un'applicazione e su un sistema di telecamere a circuito chiuso che ci permettono di monitorare il comportamento degli ospiti e assicurare la massima vivibilità del locale"
    }
];


export default function Vanilla() {
    return <ProjectContainer>
        {/* Hero Section */}
        <div className="hero bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl mb-8">
            <div className="hero-content text-center">
                <div className="max-w-4xl">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                        <img src="/icon/vanilla_lg.png" alt="Vanilla Club" className="w-20 h-20 rounded-2xl shadow-xl" />
                        <div>
                            <h1 className="text-4xl font-bold font-Outfit">Vanilla Club</h1>
                            <p className="text-lg text-base-content/80">Digitalizzazione Completa dell'Esperienza Nightlife</p>
                        </div>
                    </div>
                    <p className="text-sm text-base-content/70 mb-4">
                        realizzata in collaborazione con <a target="_blank" rel="noopener noreferrer" className="link link-accent" href="https://42night.club/">42Night S.R.L.</a>
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <div className="badge badge-primary">QR Technology</div>
                        <div className="badge badge-secondary">Digital Payments</div>
                        <div className="badge badge-accent">Security System</div>
                        <div className="badge badge-outline">Real-time Analytics</div>
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
                            I locali notturni affrontavano problemi critici: gestione caotica degli ingressi, perdite economiche significative (~10%), 
                            difficoltà nel controllo della sicurezza e mancanza di dati analytici per ottimizzare le operazioni.
                        </p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title font-Outfit text-2xl">💡 L'Innovazione</h2>
                        <p className="text-base-content/80 mb-4">
                            Ho sviluppato un ecosistema digitale completo che trasforma ogni aspetto dell'esperienza in discoteca: 
                            dal check-in sicuro tramite QR dinamico anticontraffazione, agli ordini contactless, fino ai pagamenti integrati.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="stat bg-base-200 rounded-lg">
                                <div className="stat-title">Sicurezza</div>
                                <div className="stat-value text-lg">QR Dinamico</div>
                                <div className="stat-desc">Anti-contraffazione</div>
                            </div>
                            <div className="stat bg-base-200 rounded-lg">
                                <div className="stat-title">Pagamenti</div>
                                <div className="stat-value text-lg">Contactless</div>
                                <div className="stat-desc">POS integrato</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title font-Outfit">📊 Risultati Straordinari</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Perdite Economiche</span>
                                <span className="font-bold text-success">&lt;0.05%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Utenti Registrati</span>
                                <span className="font-bold text-info">100K+</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Incidenti Prevenuti</span>
                                <span className="font-bold text-warning">1,300+</span>
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
                            <div className="badge badge-sm">PostgreSQL</div>
                            <div className="badge badge-sm">Redis</div>
                            <div className="badge badge-sm">Socket.io</div>
                            <div className="badge badge-sm">Stripe</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
            <h2 className="text-3xl font-bold font-Outfit text-center mb-8">🚀 Ecosystem Digitale Completo</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card bg-gradient-to-br from-purple-500/5 to-purple-500/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">🔐</div>
                        <h3 className="card-title justify-center font-Outfit text-sm">Check-in Sicuro</h3>
                        <p className="text-xs">QR dinamico anticontraffazione per controllo accessi avanzato</p>
                    </div>
                </div>
                
                <div className="card bg-gradient-to-br from-blue-500/5 to-blue-500/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">📱</div>
                        <h3 className="card-title justify-center font-Outfit text-sm">Ordini Contactless</h3>
                        <p className="text-xs">Sistema di ordinazione digitale con menu interattivo</p>
                    </div>
                </div>
                
                <div className="card bg-gradient-to-br from-green-500/5 to-green-500/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">💳</div>
                        <h3 className="card-title justify-center font-Outfit text-sm">Pagamenti Integrati</h3>
                        <p className="text-xs">POS digitale con gestione fiscale automatizzata</p>
                    </div>
                </div>
                
                <div className="card bg-gradient-to-br from-orange-500/5 to-orange-500/10 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">📈</div>
                        <h3 className="card-title justify-center font-Outfit text-sm">Analytics Live</h3>
                        <p className="text-xs">Reportistica in tempo reale per decisioni strategiche</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Impact Stats */}
        <div className="card bg-gradient-to-r from-success/10 to-success/5 shadow-xl mb-8">
            <div className="card-body">
                <h2 className="card-title font-Outfit text-2xl text-center w-full justify-center mb-6">🎯 Impatto Rivoluzionario</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="stat-value text-success">100K+ 🕺🏻</div>
                        <div className="stat-title">Ospiti Iscritti</div>
                        <div className="stat-desc">Crescita organica dal 2022</div>
                    </div>
                    <div className="text-center">
                        <div className="stat-value text-error">1,300 ✋🏻</div>
                        <div className="stat-title">Accessi Negati</div>
                        <div className="stat-desc">Persone malintenzionate respinte</div>
                    </div>
                    <div className="text-center">
                        <div className="stat-value text-success">&lt;0.05% 💸</div>
                        <div className="stat-title">Perdite Economiche</div>
                        <div className="stat-desc">vs ~10% senza l'app</div>
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
                        <h3 className="font-semibold mb-2">Innovazione Tecnologica</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-base-content/80">
                            <li>Sviluppo QR dinamici anti-contraffazione</li>
                            <li>Integrazione sistemi POS e stampanti fiscali</li>
                            <li>Architettura real-time per analytics live</li>
                            <li>Mobile app development per ambienti critici</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Business Impact</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-base-content/80">
                            <li>Riduzione drastica delle perdite economiche</li>
                            <li>Miglioramento della sicurezza del locale</li>
                            <li>Ottimizzazione operational tramite data</li>
                            <li>Trasformazione digitale dell'industria nightlife</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Media Coverage */}
        <div className="mb-8">
            <h2 className="text-3xl font-bold font-Outfit text-center mb-8 flex items-center justify-center gap-3">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                    <path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z"/>
                </svg>
                Copertura Mediatica
                <div className="text-sm font-normal text-base-content/60 italic">(Ciao mamma! 👋)</div>
            </h2>
            <div className="overflow-x-auto pb-4">
                <div className="flex gap-4 w-max">
                    {news.map((newsPiece, index) => <NewsCard key={index} {...newsPiece} />)}
                </div>
            </div>
        </div>
    </ProjectContainer>
}