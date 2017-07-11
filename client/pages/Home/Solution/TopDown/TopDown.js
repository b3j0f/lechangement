import React, { Component } from 'react';
import './TopDown.css';

class TopDown extends Component {
    render() {
        return (
            <div className="topdown">
            <h5>En suivant les règles du système politique actuel</h5>
            <p>Voter pour les solutions et former un parti politique qui comprenne un ensemble des solutions les plus votées et atteindre une masse critique de 12%* par commune, département, région et État.<br/>*pourcentage des votants pour LREM aux législatives sur le total des citoyens Français</p>
            <table className="responsive-table striped">
            <thead>
            <tr><th>Objectif</th><th>Masse critique</th></tr>
            </thead>
            <tbody>
            <tr><td>Commune de 1 000 d'habitants</td><td>120</td></tr>
            <tr><td>Commune de 10 000 d'habitants</td><td>1 200</td></tr>
            <tr><td>Département de 100 000 d'habitants</td><td>12 000</td></tr>
            <tr><td>Région de 1 000 000 d'habitants</td><td>120 000</td></tr>
            <tr><td>France : 66 000 000 habitants</td><td>7 920 000</td></tr>
            </tbody>
            </table>
            <p>Ou spécifiquement aux attentes du gouvernement</p>
            <table className="responsive-table striped">
            <thead>
            <tr><th>Objectif</th><th>Description</th></tr>
            </thead>
            <tbody>
            <tr><td>1 000 000 + 1 parlementaire</td><td><a target="_blank" rel="noopener noreferrer" href="https://www.referendum.interieur.gouv.fr/">{'Référendum d\'initiative partagé'}</a></td></tr>
            <tr><td>7 678 491</td><td>nombre de votants pour Mme. Marine Lepen au premier tour des présidentielles</td></tr>
            <tr><td>7 826 245</td><td>17% des inscrits et nombre de votants qui ont élu 44% des sièges à l'assemblée nationale et qui ont aujourd'hui la majorité pour décider des lois pour tout le monde</td></tr>
            <tr><td>8 656 346</td><td>nombre de votants pour Mr. Emmanuel Macron au premier tour des présidentielles.</td></tr>
            <tr><td>20 743 128</td><td>nombre de votants pour Mr. Emmanuel Macron au second tour des présidentielles.</td></tr>
            </tbody>
            </table>
            </div>
        );
    }
}

export default TopDown;
