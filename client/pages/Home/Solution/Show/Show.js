import React, { Component } from 'react';

import {Card, CardTitle} from 'material-ui/Card';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import './Show.css';

class Show extends Component {
    render() {
        return (
            <div className="solutions row">
            <p>
            (TODO: Remplacer cette partie par le résultat des votes)
            </p>
            {solutions.map(
                (solution) =>
                <div key={solution.title} className="col s6 m4 l3">
                <a href={solution.website} target="_blank" rel="noopener noreferrer">
                <Card><CardTitle title={solution.title} /></Card>
                </a>
                </div>
            )}
            <div className="col s6 m4 l3">
            <NavLink to="/solution">
            <FloatingActionButton>
            <ContentAdd />
            </FloatingActionButton>
            </NavLink>
            </div>
            </div>
        );
    }
}
