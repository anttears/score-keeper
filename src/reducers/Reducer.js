import { getRules } from '../rules/ruleHandler'; 
import { initialState } from '../AppContext'; 

const updatePlayerScoreState = (state, player) => {
    const rules = getRules('badminton');
    const newScore = rules.updateScore(state.scores.current, player);
    
    if (newScore === null) {
        return state;
    }
    const current = { 
        ...state.scores.current,
        [player]: newScore
    }
    const winner = rules.getWinner(current);
    return {
        ...state,
        winner,
        showAlert: winner !== null,
        scores: {
            previous: [...state.scores.previous, {...state.scores.current}],
            current: current,
            next: []
        }
    }
};

function updatePlayerNameState(state, action) {
    if (!action.payload.name) {
        return state;
    }

    return {
        ...state,
        [action.payload.player]: action.payload.name
    };    
};

function undo(state) {
    if (!state.scores.previous.length) {
        return state;
    }
    const previous = [...state.scores.previous];
    const current = previous.pop();
    const next = [...state.scores.next, {...state.scores.current}]; 

    return {
        ...state,
        scores: {
            previous,
            current,
            next
        }
    };    
};

function redo(state) {
    if (!state.scores.next.length) {
        return state;
    }
    const next = [...state.scores.next];
    const current = next.pop();
    const previous = [...state.scores.previous, {...state.scores.current}]; 

    return {
        ...state,
        scores: {
            previous,
            current,
            next
        }
    };    
};

function closeAlert(state) {
    return {
        ...state,
        showAlert: false
    }
}

export function reducer(state, action) {
    switch (action.type) {
        case 'updateScore':
            return updatePlayerScoreState(state, action.payload);    
        case 'updatePlayerName':
            return updatePlayerNameState(state, action);   
        case 'reset':
            return  { ...initialState }
        case 'undo':
            return  undo(state)
        case 'redo':
            return  redo(state)
        case 'closeAlert':
            return  closeAlert(state)
        default:
            throw new Error();
    }
};