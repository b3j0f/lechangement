import Config from '../config.js';
import agreements from './agreement';
import faqs from './faq';
import jobs from './job';
import notifications from './notification';
import notifieds from './notified';
import reasons from './reason';
import solutions from './solution';
import users from './user';
import votes from './vote';

console.log(Config.api);

function applyRoutes(app) {
    app.use(Config.api, agreements);
    app.use(Config.api, faqs);
    app.use(Config.api, jobs);
    app.use(Config.api, notifications);
    app.use(Config.api, notifieds);
    app.use(Config.api, reasons);
    app.use(Config.api, solutions);
    app.use(Config.api, users);
    app.use(Config.api, votes);
}

export default applyRoutes;
