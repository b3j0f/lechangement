import './While.css';

import React, { Component } from 'react';

import SubProblem from '../SubProblem/SubProblem';

class While extends SubProblem {
    render() {
        return (
            <div className="subproblem col s12">
            <h3>{this.props.title}</h3>
            {this.props.subtitle}
            </div>
        );
    }
}

export default While;
