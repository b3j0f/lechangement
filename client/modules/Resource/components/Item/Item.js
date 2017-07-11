import './Resource.css';

import React, { Component } from 'react';

import SelectResourceType from '../../ResourceType/components/Select';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';

class Resource extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.resource.url,
            type: props.resource.type,
            editing: props.editing || false,
            index: props.editing
        }
    }
    render() {
        const url = this.state.resource.url;
        const type = this.state.resource.type;
        const editing = this.state.editing;
        const index = this.state.index;

        return (
            <tr className="resource-item">
            (
                editing ?
                <td>
                <TextField name={`resource-name[${index}]`} label="Type" />
                </td>
                <td>
                <SelectResourceType name={`resource-type[${index}]`} resourceType={type} />
                </td>
                <td>
                <FloatingActionButton onTouchTap={this.props.remove}>
                <ContentRemove>
                </FloatingActionButton>
                </td>
                :
                <td>
                <a href={url} target="_blank">
                {type}
                </a>
                </td>
            )
            </tr>
        )
    }
}

Resource.propTypes = {
    resource: PropTypes.shape({
        url: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    }).isRequired,
    editing: PropTypes.bool,
    index: PropTypes.number.isRequired
}

export default Resource;
