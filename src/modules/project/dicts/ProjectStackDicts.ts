import SkillNameDict from "modules/skills/dicts/SkillNameDict";
import SkillGroup from "modules/skills/dtos/SkillGroup";
import SkillName from "modules/skills/dtos/SkillName";

const ProjectStackDicts: {
    [key in ProjectName]: {
        [key in SkillGroup]?: SkillName[]
    }
} = {
    vanilla: {
        backend: [
            SkillNameDict.nodejs,
            SkillNameDict.typescript,
            SkillNameDict.docker,
        ],
        database: [
            SkillNameDict.mongodb,
            SkillNameDict.redis,
        ],
        web: [
            SkillNameDict.html,
            SkillNameDict.css,
            SkillNameDict.sass,
            SkillNameDict.typescript,
            SkillNameDict.react,
            SkillNameDict.mobx,
            SkillNameDict.webpack,
        ],
        mobile: [
            SkillNameDict["react-native"],
            SkillNameDict.typescript,
        ],
        devops: [
            SkillNameDict.docker,
            SkillNameDict.kubernetes,
            SkillNameDict.gitlab,
            SkillNameDict.prometheus,
            SkillNameDict["google-cloud"]
        ],
    }
};


export default ProjectStackDicts;