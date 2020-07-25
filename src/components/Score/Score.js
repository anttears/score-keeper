import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';

import blueGrey from '@material-ui/core/colors/blueGrey';
import { makeStyles } from '@material-ui/core/styles';

import { AppContext } from '../../AppContext'; 

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex', 
        flexDirection: 'row',
        flexGrow: '1'
    },
    score: {
        flex: '1',
        fontSize: '3rem'
    }
}));


function Score() {
    const classes = useStyles();
    const {state, dispatch} = useContext(AppContext);
    return (
        <Box p={2} bgcolor={blueGrey[300]} width={1} className={classes.root}>
            <Box className={classes.score} onClick={() => { dispatch({type: 'updateScore', payload: 'player1' }) }} >{state.scores.current.player1}</Box>
            <Box className={classes.score} onClick={() => { dispatch({type: 'updateScore', payload: 'player2' }) }} >{state.scores.current.player2}</Box>
        </Box>
    );
}

export default Score;