export interface INewViewProject {
    id: string;
    totalCost: number;
    title: string;
    image: string;
    features: IFeature[];
}

export interface IFeature {
    id: number;
    title: string;
    description: string;
    totalCost: number;
    options: IOption[];
    added: boolean;
}

export interface IOption {
    description: string;
    quantity: number;
    multi: boolean;
    value: number;
    subOptions: ISubOption[];
    selected: boolean;
}

export interface ISubOption {
    description: string;
    quantity: number;
    multi: boolean;
    value: number;
    selected: boolean;
    applyAll: boolean;
}