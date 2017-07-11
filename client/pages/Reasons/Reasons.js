import './Reasons.css';

import React, { Component } from 'react';

import Add from '../../modules/Reason/components/Add/Add';
import Search from '../../modules/Reason/components/Search/Search';
import List from '../../modules/Reason/components/List/List';

class Reasons extends Component {
    render() {
        return (
            <div className="reasons">
            <h1>Nos raisons du désintérêt pour la politique</h1>
            <Search />
            <Add />
            <List />
            </div>
        );
    }
}
