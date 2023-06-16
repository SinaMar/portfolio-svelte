import type {Skill, CategoryType} from "../types/Skill";
import {Category} from "../types/Skill";
import type {Project} from "../types/Project";

const createSkill = (name: string, type: CategoryType, progress: number, favourite = false, active = false): Skill =>
    ({name, category: type, progress, favourite, active});


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
];


export const personalSkills: Skill[] = [
    createSkill('Vite', Category.Tool, 0.4, true, true),
    createSkill('C#', Category.Language, 0.8, true),
    createSkill('Typescript', Category.Tool, 0.2, true, true),
    createSkill('MongoDB', Category.Tool, 0.1),
]


const createProject = (name: string, year: string, description: string, techs: string[], images: string[], ...responsibilities: string[]) =>
    ({name, year, description, techs, images, responsibilities});

export const projects: Project[] = [
    createProject(
        "Tipico USA Sportsbook",
        "2019/2020",
        "Tipico USA Sportsbook is a sports betting website that allows users to place various types of bets, including single bets, accumulators, parlays, and more, on a wide selection of sports events. The platform also includes live score updates to keep users informed about ongoing matches. Alongside delivering an engaging betting experience, the project successfully met the challenge of adhering to rigorous compliance requirements, such as geolocation verification and other necessary measures.",
        ["Vite", "Docker"],
        ["Sportsbook.png"],
        "Developing a sports betting portal for the US market from scratch, using a Microfrontend architecture.",
        "Collaborating with international backend teams to align and integrate APIs through contract-based communication.",
        "Implementing a code generator to automatically create a mock server based on an OpenAPI definition.",
        "Working in close collaboration with the product and design teams, utilizing Storybook to develop UI components.",
        "Facilitating the onboarding process for new team members, providing guidance and support."
    ),
    createProject(
        "<span class='nowrap'>Bundesliga 6</span>",
        "2018",
        "Bundesliga Tippspiel App",
        ["React", "Redux", "RxJS", "Typescript", "Styled Components", "OpenAPI"],
        ["Bundesliga6-1.png"],
        "API Design in Zusammenarbeit mit dem Backend-Team",
        "Implementierung des UIs in Abstimmung mit dem Design-Team"
    ),
    createProject(
        "<span class='nowrap'>Cashberry Slots</span>",
        "2018",
        "Slot Machine Game, Swipe in",
        ["Phaser", "Typescript", "Html", "CSS", "Webpack", "Swagger"],
        ["Cashberry.png"],
        "Entwicklung von Blackjack-, Roulette- und Slot Machine-Spielen",
        "Prototyping mit verschiedenen WebGL-Technologien",
        "Entwurf der API in Zusammenarbeit mit dem Backend-Team",
        "Umsetzung der asynchronen Spiele-Logik und Visualisierung durch eine auf dem Command Pattern basierende Architektur",
        "Deployment auf AWS S3 Buckets unter Verwendung von Jenkins",
        "Planung, Koordination und Durchführung von Releases"
    ),
    createProject(
        "Roulette",
        "2017",
        "Roulette Game",
        ["Phaser", "Typescript", "Html", "CSS", "Webpack", "Swagger"],
        ["Blackjack.png"],
        "Entwicklung von Blackjack-, Roulette- und Slot Machine-Spielen",
        "Prototyping mit verschiedenen WebGL-Technologien",
        "Entwurf der API in Zusammenarbeit mit dem Backend-Team",
        "Umsetzung der asynchronen Spiele-Logik und Visualisierung durch eine auf dem Command Pattern basierende Architektur",
        "Deployment auf AWS S3 Buckets unter Verwendung von Jenkins",
        "Planung, Koordination und Durchführung von Releases"
    ),
    createProject(
        "Blackjack",
        "2017",
        "Tipico USA Sportsbook is a sports betting website that allows users to place various types of bets, including single bets, accumulators, parlays, and more, on a wide selection of sports events. The platform also includes live score updates to keep users informed about ongoing matches. Alongside delivering an engaging betting experience, the project successfully met the challenge of adhering to rigorous compliance requirements, such as geolocation verification and other necessary measures.",
        ["Vite"],
        ["Blackjack.png"],
        "Developing a sports betting portal for the US market from scratch, using a Microfrontend architecture.",
        "Collaborating with international backend teams to align and integrate APIs through contract-based communication.",
        "Implementing a code generator to automatically create a mock server based on an OpenAPI definition.",
        "Working in close collaboration with the product and design teams, utilizing Storybook to develop UI components.",
        "Facilitating the onboarding process for new team members, providing guidance and support."
    ),
    createProject(
        "Football Parkour",
        "2016",
        "A randomly generated track provides a new experience on every run and ensures a rich variety. Facebook Friends",
        ["Unit", "CSharp", "Photoshop", "Blender"],
        ["FootballParkour-1.webp"],
        "Prototypische Umsetzung von verschiedenen Spielideen",
        "Verantwortlich für das Software-Design und die Implementierung der Game-Logik"
    ),
    createProject(
        "Corerona",
        "2015/2016",
        "An innovative, colorful, sophisticated adventure for smartphones.",
        ["Unit", "CSharp", "Photoshop", "Blender"],
        ["Corerona-1.png"],
        "Developing a sports betting portal for the US market from scratch, using a Microfrontend architecture.",
        "Collaborating with international backend teams to align and integrate APIs through contract-based communication.",
        "Implementing a code generator to automatically create a mock server based on an OpenAPI definition.",
        "Working in close collaboration with the product and design teams, utilizing Storybook to develop UI components.",
        "Facilitating the onboarding process for new team members, providing guidance and support."
    ),
];