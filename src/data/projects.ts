import type {Project, Responsibility} from "../types/Project";

const createProject = (name: string, year: string, description: string, techs: string[], images: string[], responsibilities: string[], responsibilities2: Responsibility[], mobile = false) =>
    ({name, year, description, techs, images, responsibilities, responsibilities2, mobile});

const swipeResponsibilities: Responsibility[] = [
    {name: "Prototyping", description: "API Design of multiple"},
    {name: "API Design", description: "Rest API Design of multiple"},
    {name: "Visualization & Animations", description: "Interpreting REST API responses"},
    {name: "UI System", description: "Developed reusable UI Components within Phaser for building Game Interfaces."},
    {name: "Release-Management", description: "API Design of multiple"},
]

export const projects: Project[] = [
    createProject(
        "Tipico USA Sportsbook",
        "2019/2020",
        "Tipico USA Sportsbook is a sports betting website that allows users to place various types of bets, including single bets, accumulators, parlays, and more, on a wide selection of sports events. The platform also includes live score updates to keep users informed about ongoing matches. Alongside delivering an engaging betting experience, the project successfully met the challenge of adhering to rigorous compliance requirements, such as geolocation verification and other necessary measures.",
        ["Vite", "Docker"],
        ["Sportsbook-1.png", "Sportsbook-2.png", "Sportsbook-3.png", "Sportsbook-4.png", "Sportsbook-5.png", "Sportsbook-6.png",],
        ["Developing a sports betting portal for the US market from scratch, using a Microfrontend architecture.",
            "Collaborating with international backend teams to align and integrate APIs through contract-based communication.",
            "Implementing a code generator to automatically create a mock server based on an OpenAPI definition.",
            "Working in close collaboration with the product and design teams, utilizing Storybook to develop UI components.",
            "Facilitating the onboarding process for new team members, providing guidance and support."],
        [
            {name: "API Design", description: "API Design of multiple"},
            {name: "Code Generation", description: "Developed an auto-generated mock server based on OpenAPI Files to decouple from Backend dependency. "},
            {name: "UI Components", description: "Developing reusable UI Components in collaboration with the UI/UX team, utilizing Storybook. "},
            {name: "Betslip", description: "asd"},
            {name: "Scrum Master", description: "Organizing Scrum Meetings like Dailys and Retrospective "},



        ],
        true
    ),
    createProject(
        "<span class='nowrap'>Bundesliga 6</span>",
        "2018",
        "The Bundesliga 6 app provided users with the ability to make predictions on upcoming games of the Bundesliga and compete for a place on the highscore leaderboard. It offered the potential to win cash prizes for those who secured top positions on the leaderboard.  ",
        ["React", "Redux", "RxJS", "Typescript", "Styled Components"],
        // ["Bundesliga6-1.png", "Bundesliga6-1.png", "Bundesliga6-1.png"],
        ["Sportsbook-1.png", "Sportsbook-2.png", "Sportsbook-3.png", "Sportsbook-4.png", "Sportsbook-5.png", "Sportsbook-6.png",],
        ["API Design in Zusammenarbeit mit dem Backend-Team",
            "Implementierung des UIs in Abstimmung mit dem Design-Team"],
        [
            {name: "UI Components", description: "Developing reusable UI Components in collaboration with the UI/UX team, utilizing Storybook. "},
            {name: "API Design", description: "API Design of multiple"},
            {name: "Scrum Master", description: "Organizing Scrum Meetings like Dailys and Retrospective "},
        ],
        true
    ),
    createProject(
        "<span class='nowrap'>Cashberry Slots</span>",
        "2018",
        "Slot Machine Game, Swipe in",
        ["Phaser", "Typescript", "Html", "CSS", "Webpack"],
        ["Cashberry.png", "Cashberry.png", "Cashberry.png"],
        ["Entwicklung von Blackjack-, Roulette- und Slot Machine-Spielen",
            "Prototyping of different WebGL technologies",
            "Entwurf der API in Zusammenarbeit mit dem Backend-Team",
            "Umsetzung der asynchronen Spiele-Logik und Visualisierung durch eine auf dem Command Pattern basierende Architektur",
            "Deployment auf AWS S3 Buckets unter Verwendung von Jenkins",
            "Planung, Koordination und Durchführung von Releases"],
        swipeResponsibilities,
        true
    ),
    createProject(
        "Roulette",
        "2017",
        "Roulette Game",
        ["Typescript", "Html", "CSS", "Phaser", "Webpack"],
        ["Blackjack.png", "Blackjack.png", "Blackjack.png"],
        ["Entwicklung von Blackjack-, Roulette- und Slot Machine-Spielen",
            "Prototyping mit verschiedenen WebGL-Technologien",
            "Entwurf der API in Zusammenarbeit mit dem Backend-Team",
            "Umsetzung der asynchronen Spiele-Logik und Visualisierung durch eine auf dem Command Pattern basierende Architektur",
            "Deployment auf AWS S3 Buckets unter Verwendung von Jenkins",
            "Planung, Koordination und Durchführung von Releases"],
        swipeResponsibilities,
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
        swipeResponsibilities,
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
        [
            {name: "Prototyping", description: "Protoyping of different ideas"},
            {name: "Software Design", description: "API Design of multiple"},
            {name: "3D Controls", description: "API Design of multiple"},
            {name: "3D Assets", description: "API Design of multiple"},
        ],
        true
    ),
    createProject(
        "Corerona",
        "2015/2016",
        "An innovative, colorful, sophisticated adventure for smartphones.",
        ["Unity", "C#", "Photoshop", "Blender"],
        ["Corerona-1.png", "Corerona-2.png", "Corerona-3.png", "Corerona-4.png", "Corerona-5.png"],
        ["Developing a sports betting portal for the US market from scratch, using a Microfrontend architecture.",
            "Collaborating with international backend teams to align and integrate APIs through contract-based communication.",
            "Implementing a code generator to automatically create a mock server based on an OpenAPI definition.",
            "Working in close collaboration with the product and design teams, utilizing Storybook to develop UI components.",
            "Facilitating the onboarding process for new team members, providing guidance and support."],
        [
            {name: "Particle Effects", description: "API Design of multiple"},
            {name: "Level Editor", description: "Developing a specialized Level Editor within Unity, including secting different Fligt Pattern, Timeline"},
            {name: "Interface", description: "Developing a specialized Level Editor within Unity, including secting different Fligt Pattern, Timeline"},
            {name: "Game Logic", description: "Developing a specialized Level Editor within Unity, including secting different Fligt Pattern, Timeline"},

        ],
        true
    ),
];