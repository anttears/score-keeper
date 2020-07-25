import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

import blueGrey from '@material-ui/core/colors/blueGrey';
import { makeStyles } from '@material-ui/core/styles';

import { AppContext } from '../../AppContext';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex', 
        flexDirection: 'row'
    },
    textField: {
        flex: '1',
        marginRight: theme.spacing(1)
    },
    border: {
        borderBottom: `1px solid ${blueGrey[700]}`
    }
}));


function Players() {
    const classes = useStyles();
    const { state, dispatch } = useContext(AppContext);
    return (
        <Box p={2} bgcolor={blueGrey[500]} width={1} className={classes.border}>
            <form className={classes.form} noValidate autoComplete="off">
                <TextField id="player1" label="Player 1" value={state.player1} className={classes.textField} onChange={(e) => { dispatch({type: 'updatePlayerName', payload: { player: 'player1', name: e.target.value }}) }}/>
                <TextField id="player2" label="Player 2" value={state.player2} className={classes.textField} onChange={(e) => { dispatch({type: 'updatePlayerName', payload: { player: 'player2', name: e.target.value }}) }}/>
            </form>
        </Box>
    );
}

export default Players;

