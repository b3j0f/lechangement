import Reason from './models/reason';
import Solution from './models/solution';
import ResourceType from './models/resourceType';
import Theme from './models/theme';
import User from './models/user';

export default function () {

    Theme.count().exec((err, count) => {
        if (count > 0) {
            return;
        }
        const users = [{
            email: 'text@lechangement.now',
            username: 'test',
            password: 'test'
        }, {
            email: 'admin@lechangement.now',
            username: 'admin',
            password: 'admin',
            administrator: true
        }].map(user => new User(user));
        User.create(users, (error, ) => {
            if (error) {
                console.error(error);
            } else {
                console.log('Dummy users added');
            }
        });
    });

    Theme.count().exec((err, count) => {
        if (count > 0) {
            return;
        }
        const themes = [{
            name: 'gouvernance'
        }, {
            name: 'economie'
        }, {
            name: 'ecologie'
        }].map(theme => new Theme(theme));
        Theme.create(themes, (error, ) => {
            if (error) {
                console.error(error);
            } else {
                console.log('Dummy themes added');
            }
        });
    });

    ResourceType.count().exec((err, count) => {
        if (count > 0) {
            return;
        }
        const resourceTypes = [{
            name: 'Forum'
        }, {
            name: 'Facebook'
        }, {
            name: 'Website'
        }, {
            name: 'DemocracyOS'
        }, {
            name: 'Loomio'
        }, {
            name: 'Communecter'
        }, {
            name: 'Chat'
        }, {
            name: 'Wiki'
        }, {
            name: 'Twitter'
        }, {
            name: 'Youtube'
        }, {
            name: 'Google+'
        }].map(reason => new ResourceType(reason));
        ResourceType.create(resourceTypes, (error, ) => {
            if (error) {
                console.error(error);
            } else {
                console.log('Dummy resourceTypes added');
            }
        });
    });

    Solution.count().exec((err, count) => {
        if (count > 0) {
            return;
        }
        const solutions = [{
            title: 'le changement',
            website: 'https://lechangement.now/',
            description: 'Plateforme de mutualisation des solutions politiques'
        }, {
            title: 'démocratie directe',
            website: 'http://www.democratiedirecte.fr/'
        }, {
            title: 'démocratie liquide',
            website: 'https://framablog.org/2015/12/09/democratie-liquide/'
        }, {
            title: 'vote par notation',
            website: 'http://www.votedevaleur.org/co/voteParNotation.html'
        }, {
            title: 'revenu de base',
            website: 'http://www.revenudebase.info/'
        }, {
            title: 'inversion de la règle d\'or',
            website: 'https://www.youtube.com/watch?v=WLgi3Bs37nU'
        }, {
            title: 'monnaie libre',
            website: 'http://www.duniter.fr/'
        }, {
            title: 'réduction du temps de travail',
            website: 'http://www.mouvementpourundeveloppementhumain.fr/la-reduction-du-temps-de-travail-un-choix-de-societe-2/'
        }, {
            title: 'ateliers constituants',
            website: 'http://ateliersconstituants.org/'
        }, {
            title: 'salaire à vie',
            website: 'http://www.reseau-salariat.info/'
        }].map(solution => new Solution(solution));
        Solution.create(solutions, (error, ) => {
            if (error) {
                console.error(error);
            } else {
                console.log('Dummy solutions added');
            }
        });
    });

    Reason.count().exec((err, count) => {
        if (count > 0) {
            return;
        }
        const reasons = [{
            message: 'Trop de corruptions',
            pseudo: 'Bernard Tapis'
        }, {
            message: 'Trop compliqué pour moi',
            pseudo: 'Cédric Vilani'
        }, {
            message: 'Tous pourris',
            pseudo: 'MLP'
        }, {
            message: 'ça sert à rien',
            pseudo: 'H de Hawaï'
        }, {
            message: 'j\'ai des enfants à nourrir',
            pseudo: 'Jean-Marc M.'
        }].map(reason => new Reason(reason));
        Reason.create(reasons, (error, ) => {
            if (error) {
                console.error(error);
            } else {
                console.log('Dummy reasons added');
            }
        });
    });
}
