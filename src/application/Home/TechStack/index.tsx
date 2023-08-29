import { observer } from "mobx-react-lite";
import SkillGroupDict from "modules/skills/dicts/SkillGroupDict";
import SkillMapDict from "modules/skills/dicts/SkillMapDict";
import React from "react";
import SkillIcon from "resources/SkillIcon";
import styled from "styled-components";


const TechStackList = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const TechStackElement = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    padding: .375rem;
    box-sizing: border-box;
`;

const SkillIconList = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;

    & > li {
        width: 80px;
        height: 80px;
        box-sizing: border-box;
        padding: .375rem;
        
        & > img {
            object-fit: contain;
            object-position: center;
            width: 100%;
            height: 100%;
        }
    }
`;

export default function TechStackView() {
    return <TechStackList>
        {
            Object.values(SkillGroupDict).map((group) => <TechStackElement key={group} className="tech-icon">
                <h3>{group}</h3>
                <SkillIconList>
                    {
                        Object.values(SkillMapDict[group]).map((skill) => <li key={skill}>
                            <SkillIcon skill={skill} />
                        </li>)
                    }
                </SkillIconList>
            </TechStackElement>)
        }
    </TechStackList>
}