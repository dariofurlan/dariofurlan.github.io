import SkillGroup from "../dtos/SkillGroup";
import SkillName from "../dtos/SkillName";

const SkillMapDict: { [key in SkillGroup]: SkillName[] } = {
    "backend": [
        "c++",
        "nodejs",
        "php",
        "python",
        "solidity",
        "typescript",
    ],
    "web": [
        "css",
        "html",
        "javascript",
        "typescript",
        "react",
        "sass",
        "webpack",
    ],
    "mobile": [
        "react-native",
    ],
    "database": [
        "mongodb",
        "postgresql",
        "redis",
    ],
    "devops": [
        "gitlab",
        "github",
        "github-actions",
        "google-cloud",
        "docker",
        "docker-compose",
        "kubernetes",
        "prometheus",
        "grafana",
    ],
    "blockchain": [
        "solidity",
        "fantom"
    ],
};

export default SkillMapDict;