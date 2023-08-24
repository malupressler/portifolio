import {defineStore} from "pinia";
import {ProjectStore} from "../types/typings";

// @ts-ignore
const images: Record<string, string> = import.meta.glob("../assets/featured/*.{png,jpg}", {as: 'url', eager: true});

export const useProjectStore = defineStore<string, ProjectStore>("projectStore", () => {
    const projects = [
        {
            id: 1,
            name: "Tic-Tac-Toe",
            image: images["../assets/featured/tic_tac_toe.jpg"],
            description:
                "AI project made in college with python, to play with an AI bot.",
            tech: ["Python"],
            link: "https://github.com/malupressler/tictactoe-ai",
            featured: true,
        },
        {
            id: 2,
            name: "Store Natural food",
            image: images["../assets/featured/naturalStore.png"],
            description:
                "Project that i used only HTML and CSS, to train them",
            tech: ["Python"],
            link: "https://github.com/malupressler/website-lojalev",
            featured: true,
        },
        {
            id: 3,
            name: "Crud Library",
            image: images["../assets/featured/crudLibrary.png"],
            description:
                "Project that i used to train carbon and vue and others technologies when i started the intern at IBM",
            tech: ["Carbon","Vue","Node.js","Jest"],
            link: "https://github.com/malupressler/CrudLibraryBookVue",
            featured: true,
        },
        {
            id: 4,
            name: "Future project of store using vercel",
            image: images["../assets/featured/futureProject.png"],
            description:
                "It's a project that i will started to learn and put on verce;",
            tech: ["React","Node.js"],
            link: "https://github.com/malupressler/CrudLibraryBookVue",
            featured: true,
        },
    ];

    const grave = [
        {
            id: 1,
            name: "Text Case Changer",
            image: images["../assets/featured/case_changer.jpg"],
            description:
                "A simple text case modifier to change case of text as need.",
            tech: ["Python", "Pandas"],
            link: "https://github.com/mightykillrr/case_changer",
        },
        {
            id: 2,
            name: "Tic Tac Toe",
            image: images["../assets/featured/tic_tac_toe.jpg"],
            description:
                "Tic tac toe project that i made for a college project to study IA.",
            tech: ["Python"],
            link: "https://github.com/malupressler/tic-tac-toe",
        },
        {
            id: 3,
            name: "Advanced Calculator",
            image: images["../assets/featured/calc.jpg"],
            description:
                "An advanced calculator and my first ever HUGE Python project.",
            tech: ["Python", "MathLib"],
            link: "https://github.com/mightykillrr/advanced_calc",
        },
    ]

    return {
        getAllProjects: projects.slice(),
        getFeaturedProjects: projects.filter((project) => project.featured),
        getGraveProjects: grave.slice(),
    };
})

