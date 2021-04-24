import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from 'src/App';
import 'src/assets/scss/core.scss';
import './i18n';

ReactDOM.render(<React.StrictMode>
    <React.Suspense fallback="loading..."><App /></React.Suspense>
</React.StrictMode>,
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
