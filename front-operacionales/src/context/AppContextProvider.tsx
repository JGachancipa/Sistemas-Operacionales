import React, { useReducer } from 'react';
import AppContext, { initialState } from 'context/AppContext';
import rootReducer from 'reducers';
import { useNavigate } from 'react-router-dom';
import { TodoActionType } from 'types/actions/TodoActions';
import { PAGES } from 'utils/Constants';

type ComponentProps = {
    children: React.ReactNode
};

export const AppContextProvider: React.FunctionComponent<ComponentProps> = ({ children }) => {

    const [state, dispatch] = useReducer(rootReducer, initialState)
    let navigate = useNavigate();

    const addTodo = (data: string) => {
        // dispatch({ type: TodoActionType.ADD_TODO, title: data.title, description: data.description });
        // dispatch({ type: FilterActionType.SHOW_INCOMPLETED });
        navigate(PAGES.HOME);
    }

    const providerValue = {
        state, dispatch, addTodo
    };

    return (
        <AppContext.Provider value={providerValue}>
            {children}
        </AppContext.Provider>
    );
}
