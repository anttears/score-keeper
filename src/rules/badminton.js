// TODO Be a better person, this is awful.
const getPlayerOrder = (score) => {
    // TODO need something nicer than returning the string - player enum
    if (score.player1 > score.player2) {
        return ['player1', 'player2']; // It's late and I want this finished - TODO
    } else if (score.player1 < score.player2) {
        return ['player2', 'player1'];
    }
    return ['drawing'];
};

export const getWinner = (score) => {
    const playerOrder = getPlayerOrder(score);
    if (playerOrder[0] === 'drawing') {
        return null;
    }
    const hasTwoPointLead = score[playerOrder[0]] > 20 && score[playerOrder[0]] > score[playerOrder[1]] + 1;
    const playerHasThirty = score[playerOrder[0]] === 30;
    if (hasTwoPointLead || playerHasThirty) {
        return playerOrder[0];
    }
    return null;
};

const updateScore = (score, scorer) => {
    if (getWinner(score) !== null) {
        return null;
    }
    return score[scorer] + 1;
};

export {
    updateScore
}
    