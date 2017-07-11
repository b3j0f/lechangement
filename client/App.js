/**
* Root Component
*/
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import PropTypes from 'prop-types';

// Import Routes
import routes from './routes';

// Base stylesheet
import './main.css';

export default function App(props) {
    return (
        <Provider store={props.store}>
        <Router history={browserHistory}>
        {routes}
        </Router>
        </Provider>
    );
}

App.propTypes = {
    store: PropTypes.object.isRequired,
};
