import ProjectStackDicts from "modules/project/dicts/ProjectStackDicts";
import SkillName from "../dtos/SkillName";
import SkillGroup from "../dtos/SkillGroup";

const SkillsProjectDict = new Map<SkillName, Set<ProjectName>>();

for (const projectName in ProjectStackDicts) {
    const stack = ProjectStackDicts[projectName as ProjectName];
    for (const skillGroup in stack) {
        const skills = stack[skillGroup as SkillGroup];
        if (!skills) {
            continue;
        }
        for (const skill of skills) {
            if (!SkillsProjectDict.has(skill)) {
                SkillsProjectDict.set(skill, new Set());
            }
            SkillsProjectDict.get(skill)!.add(projectName as ProjectName);
        }
    }
}

export default SkillsProjectDict;