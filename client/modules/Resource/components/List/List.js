import './List.css';

import React, { Component } from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import Theme from '../Item/Theme';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resources: props.resources,
            editing: props.editing || false
        }
    }
    delResource = (index) => {
        const resources = Array.from(this.state.resources).slice(index, 1);
        this.setState({resources: resources});
    }
    addResource = () => {
        this.setState((prevState) => {resources: [...prevState.resources, {}]});
    }
    render() {
        const resources = this.state.resources;
        const editing = this.props.editing;

        return (
            <table className="resources-list">
            {
                resources.map(
                    (resource, index) =>
                    <Resource key={resource.url}
                    editing={editing}
                    resource={resource}
                    remove={() => this.delResource(index)} />
                )
            }
            </SelectField>
        )
    }
}

List.propTypes = {
    resources: PropTypes.arrayOf(PropTypes.string).isRequired,
    editing: PropTypes.bool,
    allResources: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string
    })).isRequired
}

export default List;
