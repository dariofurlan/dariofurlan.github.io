import ProjectContainer from "../../components/ProjectContainer";
import ProjectHead from "../../components/ProjectHead";

export default function PythIA() {
    return <ProjectContainer>
        <ProjectHead
            title="PythIA"
            description={<>realizzata come progetto di stage in collaborazione con <a target="_blank" rel="noopener noreferrer" className="link-accent" href="https://sgiservizi.net/">SGI Servizi S.R.L.</a></>}
            icon={<img className="rounded-lg h-16 w-16 p-2 bg-white shadow-xl shadow-gray-400" src="/icons/pythia.svg" alt="PythIA" />}
        />
        <p className="prose">
            
        </p>
    </ProjectContainer>
}