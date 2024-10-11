import CaribeBay from "./project/CaribeBay";
import Distress from "./project/Distress";
import Docfiler from "./project/Docfiler";
import PythIA from "./project/PythIA";
import Vanilla from "./project/Vanilla";



export default function Projects() {
    return <section className="flex flex-col items-start justify-start">
        <h2 className="text-3xl font-Outfit" id="projects">Progetti</h2>
        <Vanilla />
        <div className="divider"></div>
        <CaribeBay />
        <div className="divider"></div>
        <PythIA/>
        <div className="divider"></div>
        <Docfiler/>
        <div className="divider"></div>
        <Distress/>
    </section>
}