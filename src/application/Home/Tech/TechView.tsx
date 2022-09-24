import { observer } from "mobx-react-lite";
import ITechViewModel from "./ITechViewModel";
import styled from "styled-components";
import { CppIcon, CssIcon, DockerIcon } from "../../../resources";


const TechContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
`;

const TechBox = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    & > img {
        width: 100px;
        height: 100px;
    }
`;

export default observer(function TechView({
    images,
}: ITechViewModel) {
    // const iconst = images.map((icon, index) => {
    //     return (
    //         <TechBox key={index} className="tech-icon">
    //             <img src={icon.logo} alt={icon.name} />
    //             <p>{icon.name}</p>
    //         </TechBox>
    //     )
    // });
    return <TechContainer>
    </TechContainer>
})