import './Problem.css';

import React, { Component } from 'react';

import SubProblem from './SubProblem/SubProblem';
import While from './While/While';
import Reasons from './Reasons/Reasons';

class Problem extends Component {
    render() {
        return (
            <div className="problem center">
            <h2>Démocratie en perte de vitesse ?</h2>
            <div className="row">
            <Reason />
            <SubProblem title=
            {'Croissance de l\'abstention et des non-inscrits'} subtitle={'Chaque nouvelle élection établie un nouveau record'} col={6}/>
            <SubProblem title={'Moins de 2 personnes sur 10 ont élu la majorité qui décide des lois pour les 8 autres'} subtitle=
            {<a href="https://www.interieur.gouv.fr/Elections/Les-resultats/Legislatives/elecresult__legislatives-2017/(path)/legislatives-2017/FE.html" target="_blank" rel="noopener noreferrer">43% des sièges à l'assemblée nationale ont été élu par 17% des inscrits sur les listes électorales</a>} col={6}/>
            <While title="Alors que ..." subtitle={<div><a href="http://www2.assemblee-nationale.fr/decouvrir-l-assemblee/role-et-pouvoirs-de-l-assemblee-nationale" target="_blank" rel="noopener noreferrer">"L'assemblée nationale est au coeur de notre démocratie"</a> car elle est élue par le peuple Français lors des législatives, vote les lois et contrôle l'action du gouvernement !<br/>Le président de la république n'a aucun pouvoir sans la majorité aux législatives !</div>}/>
            </div>
            </div>
        );
    }
}

export default Problem;
