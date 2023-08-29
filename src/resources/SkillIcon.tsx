import SkillNameDict from "modules/skills/dicts/SkillNameDict";
import SkillName from "modules/skills/dtos/SkillName";
import React from "react";

const SkillIconsPath = Object.values(SkillNameDict).reduce((acc, skill) => {
    acc[skill] = `/resources/skills/${skill}.svg`;
    return acc;
}, {} as Record<SkillName, string>);

function SkillIcon({ skill }: { skill: SkillName }) {
    return <img src={SkillIconsPath[skill]} alt={skill} />;
}

export default SkillIcon;
