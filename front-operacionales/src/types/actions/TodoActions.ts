import { InstallationSteps } from "types/State";

export enum TodoActionType {
    ADD_TODO = "ADD_TODO",
    VIEW_DETAILS = "VIEW_DETAILS"
}

export type AddTodo = {
    type: TodoActionType.ADD_TODO;
    operationSystem: string;
    installationSteps: InstallationSteps[];
};

export type AppActions = AddTodo ;
