import ProjectContainer from "../../components/ProjectContainer";
import ProjectHead from "../../components/ProjectHead";

export default function Docfiler() {
    return <ProjectContainer>
        <ProjectHead
            title="DocFiler"
            description={<>realizzata in collaborazione con <a target="_blank" rel="noopener noreferrer" className="link-accent" href="https://sgiservizi.net/">SGI Servizi S.R.L.</a></>}
            icon={<img className="rounded-2xl h-16 w-16 shadow-xl shadow-gray-400" src="/icons/docfiler.svg" alt="PythIA" />}
        />

        <p className="prose">
            
        </p>
    </ProjectContainer>
}