import { Outlet } from "@remix-run/react";
import ProjectContainer from "~/components/ProjectContainer";


export default function CaseStudies() {
    return <ProjectContainer>
        <Outlet/>
    </ProjectContainer>
}