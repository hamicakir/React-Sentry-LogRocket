import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LogRocket from 'logrocket';

LogRocket.identify('jstanbul-presentation/jstanbul-presentation', {
    name: 'James Morrison',
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
