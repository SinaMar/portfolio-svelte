import type {Skill, CategoryType} from "../types/Skill";
import {Category} from "../types/Skill";
import type {Project} from "../types/Project";

const createSkill = (name: string, type: CategoryType, progress: number, workExperience = false,  favourite = false, active = false): Skill =>
    ({name, category: type, progress, workExperience, favourite, active});


export const allSkills: Skill[] = [
    //Languages
    createSkill('Typescript', Category.Language, 70, true, true, true),
    createSkill('JavaScript', Category.Language, 60, true),
    createSkill('Html', Category.Language, 80, true),
    createSkill('CSS', Category.Language, 60, true),
    createSkill('C#', Category.Language, 40, true, true),
    createSkill('Python', Category.Language, 20, false),
    createSkill('Java', Category.Language, 20, false),

    // Libraries & Frameworks
    createSkill('React', Category.Library, 70, true),
    createSkill('Svelte', Category.Library, 60, false, true, true),
    createSkill('Redux', Category.Library, 60, true),
    createSkill('Chakra UI', Category.Library, 60, false),
    createSkill('RxJS', Category.Library, 50, true, true),
    createSkill('Firebase', Category.Library, 20),
    createSkill('MongoDB', Category.Library, 20),
    createSkill('Unity', Category.Library, 60, true),

    createSkill('NodeJS', Category.Library, 20, true),
    createSkill('Phaser', Category.Library, 80, true),
    createSkill('Jest', Category.Library, 40, true),
    createSkill('Styled Components', Category.Library, 70, true),

    // Tools
    createSkill('Vite', Category.Tool, 40, false, true, true),
    createSkill('Webpack', Category.Tool, 40, true),
    createSkill('Docker', Category.Tool, 20, false, false, true),
    createSkill('Git', Category.Tool, 60, true),
    createSkill('Atlassian', Category.Tool, 50, true),

    // Software
    createSkill('WebStorm', Category.Software, 80, true),
    createSkill('Photoshop', Category.Software, 90, true),
    createSkill('Figma', Category.Software, 80, false, true),
    createSkill('Blender', Category.Software, 40, true),
    createSkill('Illustrator', Category.Software, 40, false),
    createSkill('Affinity Designer', Category.Software, 60, false),

];


export const personalSkills: Skill[] = [
    createSkill('Vite', Category.Tool, 0.4, true, true),
    createSkill('C#', Category.Language, 0.8, true),
    createSkill('Typescript', Category.Tool, 0.2, true, true),
    createSkill('MongoDB', Category.Tool, 0.1),
]


const createProject = (name: string, year: string, description: string, techs: string[], images: string[],  responsibilities: string[], mobile = false) =>
    ({name, year, description, techs, images, responsibilities, mobile});

export const projects: Project[] = [
    createProject(
        "Tipico USA Sportsbook",
        "2019/2020",
        "Tipico USA Sportsbook is a sports betting website that allows users to place various types of bets, including single bets, accumulators, parlays, and more, on a wide selection of sports events. The platform also includes live score updates to keep users informed about ongoing matches. Alongside delivering an engaging betting experience, the project successfully met the challenge of adhering to rigorous compliance requirements, such as geolocation verification and other necessary measures.",
        ["Vite", "Docker"],
        ["Sportsbook-1.png", "Sportsbook-2.png", "Sportsbook-3.png", "Sportsbook-4.png", "Sportsbook-5.png", "Sportsbook-6.png", ],
        ["Developing a sports betting portal for the US market from scratch, using a Microfrontend architecture.",
        "Collaborating with international backend teams to align and integrate APIs through contract-based communication.",
        "Implementing a code generator to automatically create a mock server based on an OpenAPI definition.",
        "Working in close collaboration with the product and design teams, utilizing Storybook to develop UI components.",
        "Facilitating the onboarding process for new team members, providing guidance and support."],
        true
    ),
    createProject(
        "<span class='nowrap'>Bundesliga 6</span>",
        "2018",
        "The Bundesliga 6 app provided users with the ability to make predictions on upcoming games of the Bundesliga and compete for a place on the highscore leaderboard. It offered the potential to win cash prizes for those who secured top positions on the leaderboard.  ",
        ["React", "Redux", "RxJS", "Typescript", "Styled Components" ],
        ["Bundesliga6-1.png", "Bundesliga6-1.png", "Bundesliga6-1.png"],
        ["API Design in Zusammenarbeit mit dem Backend-Team",
        "Implementierung des UIs in Abstimmung mit dem Design-Team"]
    ),
    createProject(
        "<span class='nowrap'>Cashberry Slots</span>",
        "2018",
        "Slot Machine Game, Swipe in",
        ["Phaser", "Typescript", "Html", "CSS", "Webpack" ],
        ["Cashberry.png", "Cashberry.png", "Cashberry.png"],
        ["Entwicklung von Blackjack-, Roulette- und Slot Machine-Spielen",
        "Prototyping of different WebGL technologies",
        "Entwurf der API in Zusammenarbeit mit dem Backend-Team",
        "Umsetzung der asynchronen Spiele-Logik und Visualisierung durch eine auf dem Command Pattern basierende Architektur",
        "Deployment auf AWS S3 Buckets unter Verwendung von Jenkins",
        "Planung, Koordination und Durchführung von Releases"],
        true
    ),
    createProject(
        "Roulette",
        "2017",
        "Roulette Game",
        ["Phaser", "Typescript", "Html", "CSS", "Webpack"],
        ["Blackjack.png", "Blackjack.png", "Blackjack.png"],
        ["Entwicklung von Blackjack-, Roulette- und Slot Machine-Spielen",
        "Prototyping mit verschiedenen WebGL-Technologien",
        "Entwurf der API in Zusammenarbeit mit dem Backend-Team",
        "Umsetzung der asynchronen Spiele-Logik und Visualisierung durch eine auf dem Command Pattern basierende Architektur",
        "Deployment auf AWS S3 Buckets unter Verwendung von Jenkins",
        "Planung, Koordination und Durchführung von Releases"],
        true
    ),
    createProject(
        "Blackjack",
        "2017",
        "Tipico USA Sportsbook is a sports betting website that allows users to place various types of bets, including single bets, accumulators, parlays, and more, on a wide selection of sports events. The platform also includes live score updates to keep users informed about ongoing matches. Alongside delivering an engaging betting experience, the project successfully met the challenge of adhering to rigorous compliance requirements, such as geolocation verification and other necessary measures.",
        ["Vite"],
        ["Blackjack.png", "Blackjack.png", "Blackjack.png"],
        ["Developing a sports betting portal for the US market from scratch, using a Microfrontend architecture.",
        "Collaborating with international backend teams to align and integrate APIs through contract-based communication.",
        "Implementing a code generator to automatically create a mock server based on an OpenAPI definition.",
        "Working in close collaboration with the product and design teams, utilizing Storybook to develop UI components.",
        "Facilitating the onboarding process for new team members, providing guidance and support."],
        true
    ),
    createProject(
        "Football Parkour",
        "2016",
        "A randomly generated track provides a new experience on every run and ensures a rich variety. Facebook Friends",
        ["Unity", "Photoshop", "Blender"],
        ["FootballParkour-1.webp", "FootballParkour-2.webp"],
        ["Prototypische Umsetzung von verschiedenen Spielideen",
        "Verantwortlich für das Software-Design und die Implementierung der Game-Logik"],
        true
    ),
    createProject(
        "Corerona",
        "2015/2016",
        "An innovative, colorful, sophisticated adventure for smartphones.",
        ["Unity", "C#", "Photoshop", "Blender"],
        ["Corerona-1.png", "Corerona-2.png","Corerona-3.png","Corerona-4.png","Corerona-5.png"],
        ["Developing a sports betting portal for the US market from scratch, using a Microfrontend architecture.",
        "Collaborating with international backend teams to align and integrate APIs through contract-based communication.",
        "Implementing a code generator to automatically create a mock server based on an OpenAPI definition.",
        "Working in close collaboration with the product and design teams, utilizing Storybook to develop UI components.",
        "Facilitating the onboarding process for new team members, providing guidance and support."]
    ),
];