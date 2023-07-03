
export interface Project {
    name: string;
    year: string;
    description: string;
    responsibilities: string[];
    responsibilities2?: Responsibility[];
    images: string[];
    techs: string[] ;
    mobile: boolean;
}

export interface Responsibility {
    name: string,
    description: string,
    icon?: string;
}