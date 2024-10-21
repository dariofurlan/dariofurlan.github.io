import ProjectContainer from "~/components/ProjectContainer";
import ProjectHead from "~/components/ProjectHead";

export default function BoidSimulator() {
    return <ProjectContainer>
        <ProjectHead
            title="Simulatore Distress Corsoradio VHF"
            description={<>realizzata in autonomia</>}
            icon="/icon/distress.png"
        />

        <p className="prose">
            
        </p>
    </ProjectContainer>
}