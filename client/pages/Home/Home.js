import './Home.css';
import React, { Component } from 'react';

import Title from './Title/Title';
import Problem from './Problem/Problem';
import Solution from './Solution/Solution';

import Divider from 'material-ui/Divider/Divider';

class Home extends Component {
    render() {
        return (
            <div className="home container">
            <Title />
            <Divider />
            <Problem />
            <Divider />
            <Solution />
            </div>
        );
    }
}

export default Home;
