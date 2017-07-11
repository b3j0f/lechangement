import './Add.css';

import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import ContentAdd from 'material-ui/svg-icons/content/add';

class Add extends Component {
    render() {
        return (
            <div className="reason-add">
            <form
            method="post"
            action="/reasons"
            encType="application/json"
            ref={(form) => { this.form = form; }}>
            <TextField name="message" label="raison" />
            <TextField name="username" label="pseudo" defaultValue={this.context.user.username} />
            <FloatingActionButton
            icon={<ContentAdd/>}
            onTouchTap={() => this.form.submit()}/>
            </form>
            </div>
        );
    }
}

export default Add;
