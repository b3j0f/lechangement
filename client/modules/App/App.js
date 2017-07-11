// Import libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { IndexRoute, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Import Style
import './App.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Import Actions
import {
    toggleAddVote, toggleAddReason, toggleAddUser,
    toggleAddSolution,
} from './actions';

const muiTheme = getMuiTheme({
    palette: {
    },
}, {
    avatar: {
        borderColor: null,
    },
    //userAgent: req.headers['user-agent'],
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isMounted: false };
    }

    componentDidMount() {
        this.setState({isMounted: true}); // eslint-disable-line
    }

    render() {
        return (
            <div>
            {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
            <Helmet
            title="Le changement"
            titleTemplate="%s"
            meta={[
                { charset: 'utf-8' },
                {
                    'http-equiv': 'X-UA-Compatible',
                    content: 'IE=edge',
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
            ]}
            />
            <MuiThemeProvider muiTheme={muiTheme}>
            <div className="body">
            <header className="header">
            <Header />
            </header>
            <main className="main">
            <div className="container">
            {this.props.children}
            </div>
            </main>
            <footer className="footer"><Footer /></footer>
            </div>
            </MuiThemeProvider>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default App;
