import './Solutions.css';

import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { NavLink } from 'react-router-dom';

class Solution extends Component {
    render() {
        const solution = this.props.solution;
        return (
            <Card>
            <CardHeader><CardTitle>{solution.title}</CardTitle></CardHeader>
            <CardMedia>{solution.media}</CardMedia>
            <CardText>{solution.description}</CardText>
            <CardActions>
                {
                    solution.resources.map(
                        (resource) =>
                        <FlatButton label={resource.type}>
                        <NavLink to={resource.url}/>
                        </FlatButton>
                    )
                }
            </CardActions>
            </Card>
        );
    }
}

class List extends Component {
    render() {
        const solutions = this.props.solutions || [];
        return (
            <div className="list-solution">
            <h1 className="title center">Solutions</h1>
            {
                solutions.map(
                (solution) =>
                <Solution solution={solution} />
            )}
            </div>
        );
    }
}

export default List;
