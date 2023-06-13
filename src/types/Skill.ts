export enum SkillType {
    Language,
    Library,
    Tool,
}

export interface Skill {
    name: string;
    progress: number;
    type: SkillType;
    favourite: boolean;
    active: boolean;
}