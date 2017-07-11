import './Item.css';

import React, { Component } from 'react';

import { Card, CardHeader } from 'material-ui/Card';

class Item extends Component {
    render() {
        const message = this.props.reason.message;
        const author = this.props.reason.author;
        return (
            <div className="reason-item">
            <Card>
            <CardHeader title={message} subtitle={author} />
            </Card>
            </div>
        );
    }
}

export default Item;
