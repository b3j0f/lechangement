import './Search.css';

import React, { Component } from 'react';

import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reasons: props.reasons || []
        }
    }
    getReasons = () => {
        const query = {
            '$or': {
                message: {$contains: this.search.value},
                author: {$contains: this.search.value}
            }
        };
        fetch('get', '/api/reasons', query).then((data) => {
            this.setState({reasons: data});
        });
    }
    render() {
        const reasons = this.props.reasons || [];
        return (
            <div className="reason-search">
            <Toolbar>
            <TextField
            ref={(search) => { this.search = search; }} onChange={this.getReasons()} label="mots clefs" />
            <ActionSearch />
            </Toolbar>
            </div>
        );
    }
}

export default Search;
