import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'fontsource-roboto';

ReactDOM.render(
    <React.StrictMode>
        <React.Fragment>
            <CssBaseline />
            <App />
        </React.Fragment>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.register();
