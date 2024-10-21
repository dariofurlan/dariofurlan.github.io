import ProjectContainer from "~/components/ProjectContainer";
import ProjectHead from "~/components/ProjectHead";

export default function Shopchain() {
    return <ProjectContainer>
        <ProjectHead
            title="Simulatore Distress Corsoradio VHF"
            description={<>realizzata come progetto Universitario</>}
            icon="/icon/distress_lg.png"
        />
        <p className="prose mx-auto">

        </p>
    </ProjectContainer>
}