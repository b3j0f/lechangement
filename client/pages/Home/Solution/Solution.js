import './Solution.css';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardTitle} from 'material-ui/Card';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import TopDown from './TopDown/TopDown';
import BottomUp from './BottomUp/BottomUp';
import Search from './Search/Search';
import Provide from './Provide/Provide';
import Show from './Show/Show';

class Solution extends Component {
    render() {
        return (
            <div className="solution center">
            <h2>
            Des solutions existent !
            </h2>
            <Show />
            <h3>Unissons-nous ...</h3>
            <div className="row">
            <Search />
            <Provide />
            </div>
            <h3>... et instaurons-les !</h3>
            <Tabs>
            <Tab label="Par le haut">
            <TopDown />
            </Tab>
            <Tab label="Par le bas">
            <BottomUp />
            </Tab>
            </Tabs>
            </div>
        );
    }
}

export default Solution;
