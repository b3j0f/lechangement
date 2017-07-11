import React, { Component } from 'react';
import './Provide.css';

class Provide extends Component {
    render() {
        return (
            <div className="provide col s12 m6">
            <h4>Vous avez des solutions ?</h4>
            <h5>Proposez-les pour ...</h5>
            <ul>
            <li>Gagner en visibilité</li>
            <li>Organiser des évènements (conférence, réunion de travail, etc.)</li>
            <li>Utiliser des outils de communication (forum, wiki, sondages, mailing-list, etc.)</li>
            <li>Partager ces outils avec les autres solutions afin d'être complémentaires</li>
            <li>Rester synchronisé avec <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.meetup.com/" target="_blank" rel="noopener noreferrer">Meetup</a>, <a href="http://democracyos.eu/">DemocracyOS</a>, <a href="http://communecter.org/" target="_blank" rel="noopener noreferrer">Communecter</a>, etc.</li>
            </ul>
            </div>
        );
    }
}


export default Provide;
