import './List.css';

import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { NavLink } from 'react-router-dom';

class List extends Component {
    render() {
        const solutions = this.props.solutions || [];
        return (
            <div className="solution-list">
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
