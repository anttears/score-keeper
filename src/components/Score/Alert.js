import React, { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { AppContext } from '../../AppContext'; 

function Alert() {

    const {state, dispatch} = useContext(AppContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch({type: 'closeAlert'});
    };

    return (
        <Snackbar open={state.showAlert} autoHideDuration={12000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <MuiAlert severity="success" onClose={handleClose}>{`${state[state.winner]} WINS`}</MuiAlert>
        </Snackbar>
    );
}

export default Alert;