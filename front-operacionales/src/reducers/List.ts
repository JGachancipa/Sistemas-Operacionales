import { uid } from "uid";

import { Recomendations } from "../types/State";
import { TodoActionType, AppActions } from "types/actions/TodoActions";

const listRecomendations = (
  recomendations: Recomendations[],
  action: AppActions
) => {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      const { operationSystem, installationSteps } = action;

      return [
        ...recomendations,
        { uid: uid(), operationSystem, installationSteps },
      ];
    default:
      return recomendations;
  }
};

export default listRecomendations;
