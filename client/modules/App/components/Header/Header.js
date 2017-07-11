import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

// Import Style
import './Header.css';

class Header extends Component {

    render() {
        return (
            <nav className="nav">
            <div>
            <h1 className={styles['site-title']}>
            <Link to="/" >Le changement</Link>
            </h1>
            </div>
            <div className={styles['language-switcher']}>
            <ul>
            <li><FormattedMessage id="switchLanguage" /></li>
            {this.languageNodes}
            </ul>
            </div>
            </nav>
        );
    }
}

Header.contextTypes = {
    router: PropTypes.object,
};

Header.propTypes = {
};

export default Header;
