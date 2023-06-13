import type {Skill} from "../types/Skill";
import {SkillType} from "../types/Skill";

const create = (name: string, type: SkillType, progress: number, favourite = false, active = false): Skill =>
    ({name, type, progress, favourite, active})



export const workSkills: Skill[] = [
    create('Vite', SkillType.Tool, 0.4, true, true),
    create('C#', SkillType.Language, 0.8, true),
    create('Typescript', SkillType.Tool, 0.2, true, true),
    create('MongoDB', SkillType.Tool, 0.1 ),
]

export const personalSkills: Skill[] = [
    create('Vite', SkillType.Tool, 0.4, true, true),
    create('C#', SkillType.Language, 0.8, true),
    create('Typescript', SkillType.Tool, 0.2, true, true),
    create('MongoDB', SkillType.Tool, 0.1 ),
]