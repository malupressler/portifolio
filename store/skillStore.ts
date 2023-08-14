import {defineStore} from "pinia";
import {SkillStore} from "~/types/typings";

// @ts-ignore
const images: Record<string, string> = import.meta.glob("../assets/featured/*.{png,jpg}", {as: 'url', eager: true});

export const useSkillStore = defineStore<string, SkillStore>("skillStore", () => {
    const skills = [
        {
            id: 1,
            name: 'Vue', // Correctly reference the BeakerIcon here
            icon: 'faVuejs',
            description: 'loren ipslum',
            tech: ["TypeScript", "Javascript","Vuex","Router","Nest"],
            link: 'https://vuejs.org/',
        },
        {
            id: 2,
            name: 'Node.js',
            icon: 'faNodeJs',
            description: 'loren ipslum',
            tech:["TypeScript", "Javascript",],
            link: 'https://nodejs.org/en',
        },
        {
            id: 3,
            name: 'React',
            icon: 'faReact',
            description: 'loren ipslum',
            tech: ["TypeScript", "Javascript","Redux","Next"],
            link: 'https://react.dev/',
        },
        {
            id: 4,
            name: 'SQL & NoSQL',
            icon: 'faDatabase',
            description: 'loren ipslum',
            tech: ["MongoDB", "Mongoose","Oracle", "MySQL", "DB2", "Cloudant"],
            link: 'string',
        },
        {
            id: 5,
            name: 'Docker',
            icon: 'faDocker',
            description: 'loren ipslum',
            tech: ["Docker","Rancher", "Podman"],
            link: 'https://www.docker.com/',
        },
        {
            id: 6,
            name: 'Unit Test',
            icon: 'faFlaskVial',
            description: 'loren ipslum',
            tech: ["Jest", "Tape","Mocha"],
            link: 'https://jestjs.io/',
        },
        {
            id: 7,
            name: 'GitHub',
            icon: 'faGithub',
            description: 'loren ipslum',
            tech: ["Git", "GitHub",],
            link: 'https://github.com/malupressler',
        },
        {
            id: 8,
            name: 'Python',
            icon: 'faPython',
            description: 'loren ipslum',
            tech: ["IA", "Pandas"],
            link: 'https://www.python.org/',
        },
    ]

    return {
        getAllSkills: skills.slice()
    }
});
