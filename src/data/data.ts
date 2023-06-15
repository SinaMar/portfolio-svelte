import type {Skill, CategoryType} from "../types/Skill";
import {Category} from "../types/Skill";
import type {Project} from "../types/Project";

const createSkill = (name: string, type: CategoryType, progress: number, favourite = false, active = false): Skill =>
    ({name, category: type, progress, favourite, active})


export const workSkills: Skill[] = [
    createSkill('Vite', Category.Tool, 40, true, true),
    createSkill('Firebase', Category.Tool, 80, true),
    createSkill('Typescript', Category.Language, 20, true, true),
    createSkill('RxJS', Category.Library, 10),
    createSkill('Docker', Category.Tool, 10),
    createSkill('Git', Category.Tool, 10),
    createSkill('Html', Category.Language, 10),
    createSkill('Css', Category.Language, 10),
    createSkill('NodeJS', Category.Tool, 40),
    createSkill('Python', Category.Language, 30, true),
]


export const personalSkills: Skill[] = [
    createSkill('Vite', Category.Tool, 0.4, true, true),
    createSkill('C#', Category.Language, 0.8, true),
    createSkill('Typescript', Category.Tool, 0.2, true, true),
    createSkill('MongoDB', Category.Tool, 0.1),
]


const createProject = (name: string, year: string, description: string, techs: string[], images: string[], ...responsibilities: string[]) =>
    ({name, year, description, techs, images,  responsibilities})

export const projects: Project[] = [
    createProject(
        "Tipico USA Sportsbook",
        "2019/2020",
        "Tipico USA Sportsbook is a sports betting website that allows users to place various types of bets, including single bets, accumulators, parlays, and more, on a wide selection of sports events. The platform also includes live score updates to keep users informed about ongoing matches. Alongside delivering an engaging betting experience, the project successfully met the challenge of adhering to rigorous compliance requirements, such as geolocation verification and other necessary measures.",
        ["Vite"],
        ["Sportsbook.png"],
        "Developing a sports betting portal for the US market from scratch, using a Microfrontend architecture.",
        "Collaborating with international backend teams to align and integrate APIs through contract-based communication.",
        "Implementing a code generator to automatically create a mock server based on an OpenAPI definition.",
        "Working in close collaboration with the product and design teams, utilizing Storybook to develop UI components.",
        "Facilitating the onboarding process for new team members, providing guidance and support."
    ),
    createProject(
        // "<span>Bundesliga 6</span>",
        // "<span style='white-space: nowrap; font-family: var(--font-heading)' >Bundesliga 6</span>",
        "<span class='nowrap'>Bundesliga 6</span>",
        "2018",
        "Tipico USA Sportsbook is a sports betting website that allows users to place various types of bets, including single bets, accumulators, parlays, and more, on a wide selection of sports events. The platform also includes live score updates to keep users informed about ongoing matches. Alongside delivering an engaging betting experience, the project successfully met the challenge of adhering to rigorous compliance requirements, such as geolocation verification and other necessary measures.",
        ["Vite"],
        ["Bundesliga6-1.png"],
        "Developing a sports betting portal for the US market from scratch, using a Microfrontend architecture.",
        "Collaborating with international backend teams to align and integrate APIs through contract-based communication.",
        "Implementing a code generator to automatically create a mock server based on an OpenAPI definition.",
        "Working in close collaboration with the product and design teams, utilizing Storybook to develop UI components.",
        "Facilitating the onboarding process for new team members, providing guidance and support."
    ),
    createProject(
        // "<span>Bundesliga 6</span>",
        // "<span style='white-space: nowrap; font-family: var(--font-heading)' >Bundesliga 6</span>",
        "<span class='nowrap'>Cashberry Slots</span>",
        "2018",
        "Tipico USA Sportsbook is a sports betting website that allows users to place various types of bets, including single bets, accumulators, parlays, and more, on a wide selection of sports events. The platform also includes live score updates to keep users informed about ongoing matches. Alongside delivering an engaging betting experience, the project successfully met the challenge of adhering to rigorous compliance requirements, such as geolocation verification and other necessary measures.",
        ["Vite"],
        ["Sportsbook.png"],
        "Developing a sports betting portal for the US market from scratch, using a Microfrontend architecture.",
        "Collaborating with international backend teams to align and integrate APIs through contract-based communication.",
        "Implementing a code generator to automatically create a mock server based on an OpenAPI definition.",
        "Working in close collaboration with the product and design teams, utilizing Storybook to develop UI components.",
        "Facilitating the onboarding process for new team members, providing guidance and support."
    ),
    createProject(
        // "<span>Bundesliga 6</span>",
        // "<span style='white-space: nowrap; font-family: var(--font-heading)' >Bundesliga 6</span>",
        "Roulette",
        "2017",
        "Tipico USA Sportsbook is a sports betting website that allows users to place various types of bets, including single bets, accumulators, parlays, and more, on a wide selection of sports events. The platform also includes live score updates to keep users informed about ongoing matches. Alongside delivering an engaging betting experience, the project successfully met the challenge of adhering to rigorous compliance requirements, such as geolocation verification and other necessary measures.",
        ["Vite"],
        ["img"],
        "Developing a sports betting portal for the US market from scratch, using a Microfrontend architecture.",
        "Collaborating with international backend teams to align and integrate APIs through contract-based communication.",
        "Implementing a code generator to automatically create a mock server based on an OpenAPI definition.",
        "Working in close collaboration with the product and design teams, utilizing Storybook to develop UI components.",
        "Facilitating the onboarding process for new team members, providing guidance and support."
    ),
    createProject(
        // "<span>Bundesliga 6</span>",
        // "<span style='white-space: nowrap; font-family: var(--font-heading)' >Bundesliga 6</span>",
        "Blackjack",
        "2017",
        "Tipico USA Sportsbook is a sports betting website that allows users to place various types of bets, including single bets, accumulators, parlays, and more, on a wide selection of sports events. The platform also includes live score updates to keep users informed about ongoing matches. Alongside delivering an engaging betting experience, the project successfully met the challenge of adhering to rigorous compliance requirements, such as geolocation verification and other necessary measures.",
        ["Vite"],
        ["img"],
        "Developing a sports betting portal for the US market from scratch, using a Microfrontend architecture.",
        "Collaborating with international backend teams to align and integrate APIs through contract-based communication.",
        "Implementing a code generator to automatically create a mock server based on an OpenAPI definition.",
        "Working in close collaboration with the product and design teams, utilizing Storybook to develop UI components.",
        "Facilitating the onboarding process for new team members, providing guidance and support."
    ),
    createProject(
        // "<span>Bundesliga 6</span>",
        // "<span style='white-space: nowrap; font-family: var(--font-heading)' >Bundesliga 6</span>",
        "Football Parkour",
        "2016",
        "Tipico USA Sportsbook is a sports betting website that allows users to place various types of bets, including single bets, accumulators, parlays, and more, on a wide selection of sports events. The platform also includes live score updates to keep users informed about ongoing matches. Alongside delivering an engaging betting experience, the project successfully met the challenge of adhering to rigorous compliance requirements, such as geolocation verification and other necessary measures.",
        ["Vite"],
        ["img"],
        "Developing a sports betting portal for the US market from scratch, using a Microfrontend architecture.",
        "Collaborating with international backend teams to align and integrate APIs through contract-based communication.",
        "Implementing a code generator to automatically create a mock server based on an OpenAPI definition.",
        "Working in close collaboration with the product and design teams, utilizing Storybook to develop UI components.",
        "Facilitating the onboarding process for new team members, providing guidance and support."
    ),
    createProject(
        // "<span>Bundesliga 6</span>",
        // "<span style='white-space: nowrap; font-family: var(--font-heading)' >Bundesliga 6</span>",
        "Corerona",
        "2015/2016",
        "Tipico USA Sportsbook is a sports betting website that allows users to place various types of bets, including single bets, accumulators, parlays, and more, on a wide selection of sports events. The platform also includes live score updates to keep users informed about ongoing matches. Alongside delivering an engaging betting experience, the project successfully met the challenge of adhering to rigorous compliance requirements, such as geolocation verification and other necessary measures.",
        ["Vite"],
        ["img"],
        "Developing a sports betting portal for the US market from scratch, using a Microfrontend architecture.",
        "Collaborating with international backend teams to align and integrate APIs through contract-based communication.",
        "Implementing a code generator to automatically create a mock server based on an OpenAPI definition.",
        "Working in close collaboration with the product and design teams, utilizing Storybook to develop UI components.",
        "Facilitating the onboarding process for new team members, providing guidance and support."
    ),
];
