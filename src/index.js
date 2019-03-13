import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LogRocket from 'logrocket';
import * as Sentry from '@sentry/browser';

import packageJson from '../package.json';

Sentry.init({
    dsn: "https://16025aff21114f7b837f10da3f43ee77@sentry.io/1414258",
    release: packageJson.version,
});

LogRocket.identify('jstanbul-presentation/jstanbul-presentation', {
    name: 'James Morrison' + Math.random() * 1000,
    email: 'jamesmorrison@example.com',

    // Add your own custom user variables here, ie:
    subscriptionType: 'pro'
});

LogRocket.init('jstanbul-presentation/jstanbul-presentation');

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
