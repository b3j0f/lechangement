import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    render() {
        return (
            <div className="search col s12 m6">
            <h4>Vous cherchez des solutions ?</h4>
            <h5>Découvrez ici ...</h5>
            <ul>
            <li>des solutions par thème (gouvernance, économie, etc.)</li>
            <li>des discussions, des conférences, des réunions de travail et des évènements</li>
            </ul>
            <p>Et restez au courant des thèmes ou solutions qui vous intéressent</p>
            </div>
        );
    }
}


export default Search;
