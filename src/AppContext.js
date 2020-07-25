import React, {createContext, useReducer} from 'react';

import { reducer } from './reducers/Reducer';

export const AppContext = createContext();

export const initialState = {
    player1: 'Ant',
    player2: 'Felix',
    winner: null,
    showAlert: false,
    scores: {
        previous: [],
        current: {
            player1: 0,
            player2: 0
        },
        next: []
    }
};

export const AppProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {props.children}
        </AppContext.Provider>
    )
};
