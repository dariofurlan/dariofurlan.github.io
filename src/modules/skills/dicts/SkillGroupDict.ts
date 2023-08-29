import SkillGroup from "../dtos/SkillGroup";


const SkillGroupDict: { [key in SkillGroup]: key} = {
    "backend": "backend",
    "web": "web",
    "mobile": "mobile",
    "database": "database",
    "devops": "devops",
    "blockchain": "blockchain",
};

export default SkillGroupDict;