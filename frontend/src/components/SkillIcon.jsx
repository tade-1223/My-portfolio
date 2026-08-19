import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiPython,
    SiDjango,
    SiNodedotjs,
    SiFastapi,
    SiPostgresql,
    SiMysql,
    SiSqlite,
    SiGit,
    SiGithub,
    SiDocker,
    SiLinux,
    SiPostman,
    SiFigma,
} from "react-icons/si";

import {
    Brain,
    Code2,
    FileCode2,
} from "lucide-react";


const ICONS = {

    html: SiHtml5,

    css: SiCss,

    javascript: SiJavascript,

    react: SiReact,

    tailwind: SiTailwindcss,

    python: SiPython,

    django: SiDjango,

    node: SiNodedotjs,

    fastapi: SiFastapi,

    postgresql: SiPostgresql,

    mysql: SiMysql,

    sqlite: SiSqlite,

    git: SiGit,

    github: SiGithub,

    docker: SiDocker,

    linux: SiLinux,

    postman: SiPostman,

    figma: SiFigma,

    // VS Code
    vscode: FileCode2,

    // AI / ML
    "machine-learning": Brain,

    "deep-learning": Brain,

    ai: Brain,
};


function SkillIcon({
    name,
    size = 24,
}) {

    const iconName =
        name?.toLowerCase();

    const Icon =
        ICONS[iconName] || Code2;


    return (
        <Icon
            size={size}
        />
    );

}


export default SkillIcon;