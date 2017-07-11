import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { Card, CardTitle, CardHeader, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';

import Themes from '../../Theme/components/List/List';
import EditThemes from '../../Theme/components/Edit/Edit';

import Resources from '../../Resource/components/List/List';
import EditResources from '../../Resource/components/Edit/Edit';

// Import Style
import './Item.css';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign(
            {
                expanded: false,
                canEdit; true,
                edited: false,
                editing: false
            },
            props
        );
    }
    updateSolution = (props) => {
        this.setState({
            ...props,
            edited: true
        );
    };
    setForm = (form) => {
        this.form = form;
    };
    saveSolution = () => {
        this.form.submit();
    };
    selectTheme = (theme) => {
        this.props.filter({
            theme: theme.props.theme.name
        })
    };
    render() {
        const name = this.state.solution.name;
        const description = this.state.solution.description;
        const themes = this.state.solution.themes;
        const resources = this.state.solution.resources;
        const media = this.state.solution.media;
        const canEdit = this.state.canEdit;
        const edited = this.state.edited;
        const expanded = this.state.expanded;

        const editing = this.state.editing;

        <CardText
        expandable={true}
        expanded={detailing}>
        (editing ?
            <TextField
            name="name"
            label="Nom"
            value={name} /> :
            <CardTitle
            title={name}
            subtitle={<ShowThemes themes={themess} />}
            />)
        (editing ?
            <EditThemes themes={themes} />)
        <TextField name="description" label="Description" value={description} disabled={!editing} fullWidth={true} multiLine={true} />
        <h5>Resources</h5>
        <table>
        </table>
        </CardText>

        const cardTextContent =
            (editing ?
                (
                    <TextField
                    name="name"
                    label="Nom"
                    value={name} />
                    <EditThemes themes={themes}/>
                    <TextField
                    name="description"
                    label="Description"
                    value={description}
                    disabled={!editing}
                    fullWidth={true}
                    multiLine={true} />
                    <EditResources resources={resources} />
                ) :
                (
                    <CardTitle
                    title={name}
                    subtitle={<Themes themes/>}
                    />
                )
                <TextField
                name="description"
                label="Description"
                value={description}
                disabled={!editing}
                fullWidth={true}
                multiLine={true} />
            );

        return (
            <div className="solution-item">
            <form name="/solutions" encType="application/json" method="put" rel={this.setForm} />

            <Card showExpandableButton={true}>

            <CardMedia expandable={true} expanded={summaring}
            overlay={
                <CardTitle
                title={name}
                subtitle={<ShowThemes themes={themes}/>}
            >
            <img src={media} />
            </CardMedia>

            <CardText
            expandable={true}
            expanded={detailing}>
            (editing ?
                <TextField
                name="name"
                label="Nom"
                value={name} /> :
                <CardTitle
                title={name}
                subtitle={<ShowThemes themes={themess} />}
                />)
            (editing ?
                <EditThemes themes={themes} />)
            <TextField name="description" label="Description" value={description} disabled={!editing} fullWidth={true} multiLine={true} />
            <h5>Resources</h5>
            <table>
            </table>
            </CardText>

            <CardActions>
            { canEdit ? <RaisedButton label="Sauvegarder" enabled={edited} onTouchTap={}/> : null }
            { canEdit ? <RaisedButton label="Sauvegarder" enabled={edited} onTouchTap={}/> : null }
            </CardActions>

            </Card>
            </form>
            </div>
        );
    }
}

export default Item;
