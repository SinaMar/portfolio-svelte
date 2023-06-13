import type {Skill, CategoryType} from "../types/Skill";
import {Category} from "../types/Skill";

const create = (name: string, type: CategoryType, progress: number, favourite = false, active = false): Skill =>
    ({name, category: type, progress, favourite, active})



export const workSkills: Skill[] = [
    create('Vite', Category.Tool, 40, true, true),
    create('Firebase', Category.Tool, 80, true),
    create('Typescript', Category.Language, 20, true, true),
    create('RxJS', Category.Library, 10 ),
]


export const personalSkills: Skill[] = [
    create('Vite', Category.Tool, 0.4, true, true),
    create('C#', Category.Language, 0.8, true),
    create('Typescript', Category.Tool, 0.2, true, true),
    create('MongoDB', Category.Tool, 0.1 ),
]