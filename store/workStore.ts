import {defineStore} from "pinia";
import {WorkStore} from "~/types/typings";

export const useWorkStore = defineStore<string, WorkStore>("workStore", () => {
    const works = [
        {
            id: 1,
            name: "IBM",
            position: "Software developer",
            from: "2023 - Jan",
            to: "Actual",
            link: "https://trileotech.com/",
        },
        {
            id: 2,
            name: "IBM",
            position: "Intern",
            from: "2021 - Dec",
            to: "2023 - Jan",
            link: "https://trileotech.com/",
        }
    ]

    return {
        getAllWorks: works.slice()
    }
})