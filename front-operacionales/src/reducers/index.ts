import { State } from "types/State";
import listRecomendations from "reducers/List";
import { AppActions } from "types/actions/TodoActions";

const rootReducer = (state: State, action: AppActions):State => {
  return {
    recomendations: listRecomendations(state.recomendations, action)
  };
};

export default rootReducer;