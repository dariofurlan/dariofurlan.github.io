import { observer } from "mobx-react-lite";
import TechView from "./TechView";

const technologies = [
    {
        name: "Solidity",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Solidity_logo.png",
    },
    {
        name: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    },
    {
        name: "MobX",
        logo: "https://mobx.js.org/mobx.png",
    },
    {
        name: "TypeScript",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    },
    {
        name: "JavaScript",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    },
    {
        name: "Webpack",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Webpack.png/1200px-Webpack.png",
    },
    {
        name: "C++",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
    },
    {
        name: "Python",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",
    },
    {
        name: "HTML",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
    },
    {
        name: "CSS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
    },
    {
        name: "Sass",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png",
    },
    {
        name: "Node.js",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
    },
    {
        name: "Kubernetes",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png",
    },
    {
        name: "Docker",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/1200px-Docker_%28container_engine%29_logo.svg.png",
    },
    {
        name: "Gitlab CI/CD",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/GitLab_Logo.svg/1200px-GitLab_Logo.svg.png",
    },
    {
        name: "Prometheus",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/1200px-Prometheus_software_logo.svg.png",
    },
    {
        name: "Grafana",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Grafana_logo.svg/1200px-Grafana_logo.svg.png",
    },
    {
        name: "MongoDB",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/MongoDB-Logo.svg/1200px-MongoDB-Logo.svg.png",
    },
    {
        name: "PostgreSQL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
    },
    {
        name: "MySQL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png",
    },
    {
        name: "Redis",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Redis_Logo.svg/1200px-Redis_Logo.svg.png",
    },
    {
        name: "Nginx",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Nginx_logo.svg/1200px-Nginx_logo.svg.png",
    },
    {
        name: "React Native",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    },
    {
        name: "Google Cloud",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Google_Cloud_logo.svg/1200px-Google_Cloud_logo.svg.png",
    },
];

// CLOUD
// MONITORING
// BACKEND
// DAPP
// DATABASE
// WEB
// MOBILE

export default observer(function Tech() {
    return <TechView images={technologies} />
});