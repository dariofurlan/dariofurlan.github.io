
interface INewsPiece {
    title: string;
    date: string;
    link: string;
    img: string;
    desc?: string;
}

function NewsCard({ title, date, link, img, desc }: INewsPiece) {
    return <div className="flex-1 card bg-base-100 w-96 min-w-72 shadow-xl mr-4">
        <figure>
            <img
                src={img}
                alt="Vanilla" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className="self-end text-xs text-gray-400">{date}</div>
            {/* <p>{desc}</p> */}
            <div className="card-actions justify-end">
                <a className="link link-primary" href={link} target="_blank" rel="noopener noreferrer">Leggi l'articolo Completo</a>
            </div>
        </div>
    </div>
}

const news: INewsPiece[] = [
    {
        title: "Dario, 22 anni e un diploma in informatica, inventa l'app per entrare in discoteca in sicurezza",
        date: "Martedì 6 Settembre 2022",
        link: "https://www.ilgazzettino.it/nordest/padova/app_discoteca_entrare_in_sicurezza_dario_furlan-6911285.html",
        img: "vanilla_hd.jpg"
    },
    {
        title: "Made in Padova la app per gli accessi sicuri in discoteca (testata al Vanilla)",
        date: "Sabato 3 Settembre 2022",
        link: "https://barbaraganz.blog.ilsole24ore.com/2022/09/04/made-in-padova-la-app-per-gli-accessi-sicuri-in-discoteca-testata-al-vanilla/",
        img: "vanilla.jpg"
    },
    {
        title: "Jesolo, schedati con il cellulare: arriva l'app anti movida violenta per entrare in discoteca. «Ragioni di sicurezza»",
        date: "Sabato 13 Agosto 2022",
        link: "https://www.ilgazzettino.it/nordest/venezia/vanilla_app_anti_degrado_spaccio_movida_violenta_tracciamento_clienti_luciano_pareschi_sicurezza-6869697.html",
        img: "vanilla_bg.jpg"
    },
    {
        title: "Vanilla Club di Jesolo sperimenta nuovo sistema di ingresso",
        date: "Sabato 15 Giugno 2022",
        link: "https://www.giornalenordest.it/sicurezza-locali-notturni-vanilla-club-di-jesolo-sperimenta-nuovo-sistema-di-ingresso/",
        img: "vanilla_bg.jpg"
    },
    {
        title: "Pareschi (Vanilla Club): “A Jesolo si balla 'sicuri' con controllo ingressi a prova di app”",
        date: "02 Agosto 2022",
        link: "https://www.today.it/partner/adnkronos/economia/lavoro/estate-pareschi-vanilla-club-a-jesolo-si-balla_sicuri_con-controllo-ingressi-a-prova-di-app.html",
        img: "vanilla_bg.jpg",
        // desc: "I titolari delle discoteche e dei locali da ballo hanno l'obbligo di garantire l'ordine e la sicurezza all'interno dei loro locali, pena la chiusura. Per questo, ma anche per senso di responsabilità nei confronti dei giovani che desiderano divertirsi e dei loro genitori, abbiamo investito in un nuovo sistema di controllo degli ingressi basato su un'applicazione e su un sistema di telecamere a circuito chiuso che ci permettono di monitorare il comportamento degli ospiti e assicurare la massima vivibilità del locale"
    }
];


export default function Projects() {
    return <div className="flex flex-col items-start justify-start">
        <h2 className="text-3xl font-Outfit" id="projects">Progetti</h2>
        <h3 className="font-Outfit text-2xl font-bold pt-4 pb-2">Vanilla Club Jesolo</h3>
        <p>

        </p>
        <h4 className="font-Outfit text-xl font-bold pt-4 pb-2 flex flex-row items-center">
            <svg className="w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" /></svg>
            Statistiche
        </h4>
        <div className="stats bg-neutral text-neutral-content self-center stats-vertical sm:stats-horizontal shadow-lg">
            <div className="stat place-items-center">
                <div className="stat-title text-neutral-content">Ospiti Iscritti</div>
                <div className="stat-value text-success">100.000</div>
                <div className="stat-desc text-neutral-content">dal 2022</div>
            </div>
            <div className="stat place-items-center">
                <div className="stat-title text-neutral-content">Malintenzionati Respinti</div>
                <div className="stat-value text-error">1.300</div>
                <div className="stat-desc text-neutral-content">dal 2022</div>
            </div>
            <div className="stat place-items-center">
                <div className="stat-title text-neutral-content">Non Riscosso</div>
                <div className="stat-value text-success">&lt;0.05%</div>
                <div className="stat-desc text-error">&#126;14% (senza App)</div>
            </div>
        </div>
        <h4 className="font-Outfit text-xl font-bold pt-4 pb-2 flex flex-row items-center"><svg className="w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z" /></svg>Dicono di noi</h4>
        <div className="w-full flex flex-row overflow-x-auto px-4 py-6">
            {news.map((newsPiece, index) => <NewsCard key={index} {...newsPiece} />)}
        </div>

        <div className="divider"></div>
        <h3 className="font-Outfit text-2xl font-bold pt-4 pb-2">Caribe Bay</h3>
        <h4 className="font-Outfit text-xl font-bold pt-4 pb-2 flex flex-row items-center">
            <svg className="w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" /></svg>
            Statistiche
        </h4>
        <div className="stats bg-primary text-primary-content self-center stats-vertical sm:stats-horizontal shadow-lg">
            <div className="stat place-items-center">
                <div className="stat-title text-neutral-content">Prenotazioni</div>
                <div className="stat-value">15.000</div>
                <div className="stat-desc text-neutral-content">a stagione</div>
            </div>
            <div className="stat place-items-center">
                <div className="stat-title text-neutral-content">Tempo Risparmiato</div>
                <div className="stat-value">50'</div>
                <div className="stat-desc text-neutral-content">per prenotazione</div>
            </div>
        </div>

    </div>
}