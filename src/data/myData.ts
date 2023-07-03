import type {CategoryType, Skill} from "../types/Skill";
import {Category} from "../types/Skill";

export const getTechImageSrc = (tech: string): string => {
    return `/assets/techs/${tech === 'C#' ? 'CSharp' : tech}.svg`;
}

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


