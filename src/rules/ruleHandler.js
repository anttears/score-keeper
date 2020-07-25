import * as badmintonRules from './badminton'

const getRules = (game) => {
    // TODO add other game rules
    if (game) {
        return badmintonRules;
    }

    throw new Error('pass required rules');
};

export {
    getRules
}