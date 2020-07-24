import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import blueGrey from '@material-ui/core/colors/blueGrey';

import { AppContext } from '../../AppContext';

const defaultProps = {
    borderBottom: `1px solid ${blueGrey[800]}`,
    display: 'flex' 
};

function Toolbar() {
    const { dispatch } = useContext(AppContext);
    return (
        <Grid container justify="flex-start">
            <Box p={2 }bgcolor={blueGrey[700]} width={1} {...defaultProps}>
                <IconButton aria-label="refresh" onClick={ () => { dispatch({type: 'reset'}) }} >
                    <RefreshIcon />
                </IconButton>
                <IconButton aria-label="undo" onClick={ () => { dispatch({type: 'undo'}) }} >
                    <UndoIcon />
                </IconButton>
                <IconButton aria-label="redo" onClick={ () => { dispatch({type: 'redo'}) }} >
                    <RedoIcon />
                </IconButton>
            </Box>
        </Grid>
    );
}

export default Toolbar;

