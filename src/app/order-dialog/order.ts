import { INewViewProject } from '../project-builder/new-view-project';

export interface IOrder {
    name: string;
    email: string;
    message: string;
    orderedProject: INewViewProject
}