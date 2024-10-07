import ProjectContainer from "../../components/ProjectContainer"
import ProjectHead from "../../components/ProjectHead"


export default function CaribeBay() {
    return <ProjectContainer>
        <ProjectHead
            title="Prenota Attrazioni Caribe Bay"
            description={<>realizzata in collaborazione con <a target="_blank" rel="noopener noreferrer" className="link-accent" href="https://42night.club/">42Night S.R.L.</a></>}
            icon={<img className="rounded-lg h-16 bg-white p-2 shrink-0 shadow-xl shadow-gray-400" src="/icons/caribebay_black.png" alt="Caribe Bay" />}
        />
        <p className="prose mx-auto">
            Abbiamo sviluppato un sistema di prenotazione smart per il gruppo Caribe Bay, parco a tema acquatico di Jesolo, che introduce il concetto di coda virtuale per le attrazioni. L'app permette agli ospiti di prenotare il proprio accesso a scivoli e attrazioni con un anticipo di qualche minuto, evitando così l'attesa fisica in coda. Questo sistema migliora l'esperienza degli ospiti, rendendoli più soddisfatti e liberi di esplorare il parco durante l'attesa, contribuendo così a un incremento potenziale dei consumi all'interno del parco.
        </p>
        <h4 className="font-Outfit text-xl font-bold pt-4 pb-2 flex flex-row items-center">
            <svg className="w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" /></svg>
            Statistiche
        </h4>
        <div className="stats self-center stats-vertical sm:stats-horizontal shadow-lg">
            <div className="stat place-items-center">
                <div className="stat-title">Prenotazioni</div>
                <div className="stat-value">15.000 🎢</div>
                <div className="stat-desc">a stagione</div>
            </div>
            <div className="stat place-items-center">
                <div className="stat-title">Tempo Risparmiato</div>
                <div className="stat-value">50' ⏳</div>
                <div className="stat-desc">per prenotazione</div>
            </div>
        </div>
    </ProjectContainer>
}