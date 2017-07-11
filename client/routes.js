/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute, Switch } from 'react-router';
import App from './modules/App/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
    require.ensure = function requireModule(deps, callback) {
        callback(require);
    };
}

// get pages with options
const pages = [
    {path: '/', file: 'Home/Home', props: {exact: true}},
    {path: '/about', file: 'About/About'},
    {path: '/contribute', file: 'Contribute/Contribute'},
    {path: '/faq', file: 'FAQ/FAQ'},
    {path: '/reasons', file: 'Reasons/Reasons'},
    {path: '/solutions', file: 'Solutions/Solutions'},
    {path: '/account', file: 'Account/Account'},
    {path: '*', file: '404/404'},
];
pages.forEach((page) => { page.file = `./pages/${page.file}` });

/* Workaround for async react routes to work with react-hot-reloader till
https://github.com/reactjs/react-router/issues/2182 and
https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
*/
if (process.env.NODE_ENV !== 'production') {
    // Require async routes only in development for react-hot-reloader to work.
    pages.forEach((page) => require(page.file));
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
    <Route path="/" component={App}>
    <Switch>
    {
        pages.map(
            (page) => {
                const path = `/${page.path}`;
                const props = page.props || {};
                return <Route {...props}
                path={path}
                getComponent={
                    (nextState, cb) => {
                        require.ensure([], require => {
                            cb(null, require(page.file).default);
                        });
                    }
                }
                />
            }
        )
    }
    </Switch>
    </Route>
);
