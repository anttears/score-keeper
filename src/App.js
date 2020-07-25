import React from 'react';
import Box from '@material-ui/core/Container';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { makeStyles } from '@material-ui/core/styles';

import { AppProvider } from './AppContext';
import Header from './components/Header/Toolbar';
import Players from './components/Header/Players';
import Score from './components/Score/Score';
import Alert from './components/Score/Alert';

const useStyles = makeStyles({
    root: {
        display: 'flex', 
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: blueGrey[300],
        padding: '0'
    }
});

function App() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <AppProvider>
                <Header />
                <Players />
                <Score />
                <Alert />
            </AppProvider>
        </Box>
    );
}

export default App;
