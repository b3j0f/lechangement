import './Reasons.css';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import SubProblem from '../SubProblem/SubProblem';
import ListReasons from '../../../../modules/Reason/components/List/List';
import AddReason from '../../../../modules/Reason/components/Add/Add';

class Reasons extends SubProblem {
    render() {
        const subtitle = (
            <div className="reasons">
            <AddReason />
            <ListReasons max={5}/>
            <NavLink to="/reasons">Voir toutes les raisons</NavLink>
            </div>
        );
        return <SubProblem title="Je me désintéresse de la politique parce que ..." subtitle={subtitle} />
    }
}

export default Reasons;
