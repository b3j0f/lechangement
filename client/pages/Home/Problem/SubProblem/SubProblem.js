import './SubProblem.css';

import React, { Component } from 'react';

class SubProblem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }
    render() {
        const className = `subproblem col s12 m${this.props.col || 12}`;
        return (
            <div className={className}>
            <h5>{this.props.title}</h5>
            {this.props.subtitle}
            </div>
        );
    }
}

export default SubProblem;
