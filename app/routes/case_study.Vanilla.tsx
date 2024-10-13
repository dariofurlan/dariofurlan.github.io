import NewsCard, { INewsPiece } from "~/components/NewsCard";
import ProjectContainer from "~/components/ProjectContainer";
import ProjectHead from "~/components/ProjectHead";


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
        <ProjectHead
            title="Vanilla Club Jesolo"
            description={<>realizzata in collaborazione con <a target="_blank" rel="noopener noreferrer" className="link-accent" href="https://42night.club/">42Night S.R.L.</a></>}
            icon={<img className="rounded-lg h-16 w-16 shadow-xl shadow-gray-400" src="/icon/vanilla.png" alt="Vanilla Club Jesolo" />}
        />

        <p className="prose mx-auto">
            L'app offre ai frequentatori delle discoteche un'esperienza completamente digitalizzata: consente di entrare, effettuare ordini, pagare e uscire grazie a un innovativo QR Code dinamico anticontraffazione, semplificando l'interazione con il locale. Un aspetto fondamentale è la <b className="font-bold">sicurezza</b>: l'app garantisce un ambiente sicuro per gli ospiti, limitando l'accesso a persone malintenzionate e contribuendo a creare una serata tranquilla per tutti.
        </p>
        <p className="prose mx-auto">
            Sul lato amministrativo, l'app fornisce un sistema di reportistica avanzata per monitorare in tempo reale l'andamento delle metriche chiave, permettendo di prendere decisioni strategiche durante la serata stessa. Inoltre, l'app permette di <b>minimizzare le perdite economiche</b> del locale, con una percentuale di mancati pagamenti inferiore allo 0,05%. L'app integra un sistema POS, gestione aziendale tramite PMS, controllo del magazzino (carico/scarico) e gestione di stampanti fiscali e comande.
        </p>
        <h4 className="font-Outfit text-xl font-bold pt-4 pb-2 flex flex-row items-center">
            <svg className="w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" /></svg>
            Statistiche
        </h4>
        <div className="stats self-center stats-vertical sm:stats-horizontal shadow-lg">
            <div className="stat place-items-center">
                <div className="stat-title">Ospiti Iscritti</div>
                <div className="stat-value text-success">100.000 🕺🏻</div>
                <div className="stat-desc">dal 2022</div>
            </div>
            <div className="stat place-items-center">
                <div className="stat-title">Malintenzionati Respinti</div>
                <div className="stat-value text-error">1.300 ✋🏻</div>
                <div className="stat-desc">dal 2022</div>
            </div>
            <div className="stat place-items-center">
                <div className="stat-title">Perdite Minimizzate</div>
                <div className="stat-value text-success">&lt;0.05% 💸</div>
                <div className="stat-desc text-error">&#126;10% (senza App)</div>
            </div>
        </div>
        <h4 className="font-Outfit text-xl font-bold pt-4 pb-2 flex flex-row items-center"><svg className="w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z" /></svg>Dicono di noi <div className="font-normal text-xs text-gray-500 italic ml-4">(Ciao mamma!)</div></h4>
        <div className="w-full flex flex-row overflow-x-auto px-4 py-6">
            {news.map((newsPiece, index) => <NewsCard key={index} {...newsPiece} />)}
        </div>
    </ProjectContainer>
}