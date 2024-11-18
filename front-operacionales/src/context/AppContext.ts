import React from "react";
import { State } from "types/State";

export const initialState: State = { recomendations:[
    { uid: "aaaaa", operationSystem: "Windows", installationSteps:[{id: 1, description:"Descargar"}] },
    { uid: "bbbbb", operationSystem: "Linux", installationSteps:[{id: 1, description:"Descargar"}] },
    { uid: "ccccc", operationSystem: "MacOs", installationSteps:[{id: 1, description:"Descargar"}]},
  ],
};

export type AppContextType = {
    state:State;
    // dispatch: ( action:AppActions ) => void;
    // generate: ( data:NewTodo ) => void;
  }

export default React.createContext<Partial<AppContextType>>({})