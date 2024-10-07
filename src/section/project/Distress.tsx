import ProjectContainer from "../../components/ProjectContainer";
import ProjectHead from "../../components/ProjectHead";

export default function Distress() {
    return <ProjectContainer>
        <ProjectHead
            title="Simulatore Distress Corsoradio VHF"
            description={<>realizzata in autonomia</>}
            icon={<img className="rounded-xl h-16 w-16 shadow-xl shadow-gray-400" src="/icons/distress.png" alt="PythIA" />}
        />

        <p className="prose">
            
        </p>
    </ProjectContainer>
}