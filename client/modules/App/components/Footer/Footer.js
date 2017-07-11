import React, { Component } from 'react';

// Import Style
import './Footer.css';

import bg from '../../header-bk.png';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <p>
            <FormattedMessage id="twitterMessage" /> : <a href="https://twitter.com/@lechangement_io" target="_Blank">@lechangement</a>
            </p>
            </footer>
        );
    }
}

export default Footer;
