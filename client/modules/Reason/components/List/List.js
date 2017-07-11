import './List.css';

import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';

import Item from '../Item/Item';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reasons: props.reasons || []
        }
    }
    render() {
        const reasons = Array.from(this.props.reasons) || [];
        if (this.props.max) {
            reasons.splice(1, this.props.max);
        }
        return (
            <div className="reason-list">
            {
                reasons.map(
                    (reason, index) =>
                    <Item
                    key={reason.cuid}
                    reason={reason}
                    />
                )
            }
            </div>
        );
    }
}

export default List;
