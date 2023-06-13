// export enum SkillType {
//     Language,
//     Library,
//     Tool,
// }

export const Category = {
    Language: "Language",
    Library: "Library",
    Tool: "Tool"
} as const;

export type CategoryType = typeof Category[keyof typeof Category]

export interface Skill {
    name: string;
    progress: number;
    category: CategoryType;
    favourite: boolean;
    active: boolean;
}