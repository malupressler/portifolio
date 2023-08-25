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
            description: "Vue was the first framework I learned. I started coding with this framework as an intern.",
            tech: ["TypeScript", "Javascript","Vuex","Router","Nest"],
            link: 'https://vuejs.org/',
        },
        {
            id: 2,
            name: 'Node.js',
            icon: 'faNodeJs',
            description: "I use Node.js for my packages, server-side operations, and to compile my code in TypeScript or JavaScript.",
            tech:["TypeScript", "Javascript",],
            link: 'https://nodejs.org/en',
        },
        {
            id: 3,
            name: 'React',
            icon: 'faReact',
            description: "The second framework that I am learning, and I am trying to use it in my new projects.",
            tech: ["TypeScript", "Javascript","Redux","Next"],
            link: 'https://react.dev/',
        },
        {
            id: 4,
            name: 'SQL & NoSQL',
            icon: 'faDatabase',
            description: "I learned them in college, had advanced classes on databases, and also use SQL and NoSQL (mostly MongoDB) in my work.",
            tech: ["MongoDB", "Mongoose","Oracle", "MySQL", "DB2", "Cloudant"],
            link: 'string',
        },
        {
            id: 5,
            name: 'Docker',
            icon: 'faDocker',
            description: "I learned it by myself during my first year of college. Since then, I started to learn more and use it in my work. It's a powerful tool that I enjoy studying in my free time.",
            tech: ["Docker","Rancher", "Podman"],
            link: 'https://www.docker.com/',
        },
        {
            id: 6,
            name: 'Unit Test',
            icon: 'faFlaskVial',
            description: "I learned Jest and Tape during my internship year at work, and now I mostly use Jest and Mocha.",
            tech: ["Jest", "Tape","Mocha"],
            link: 'https://jestjs.io/',
        },
        {
            id: 7,
            name: 'GitHub',
            icon: 'faGithub',
            description: "I learned how to upload my projects and gain coding experience, but nowadays I use it every day in my work.",
            tech: ["Git", "GitHub",],
            link: 'https://github.com/malupressler',
        },
        {
            id: 8,
            name: 'Python',
            icon: 'faPython',
            description: "It was the first language I learned, and I used it extensively in college. I learned the fundamentals of logic in Python, and now I've been learning AI using it.",
            tech: ["IA", "Pandas"],
            link: 'https://www.python.org/',
        },
    ]

    return {
        getAllSkills: skills.slice()
    }
});
