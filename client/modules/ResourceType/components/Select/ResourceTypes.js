import './ResourceTypes.css';

import React, { Component } from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import ResourceType from '../Item/ResourceType';

class ResourceTypes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allResourceTypes: props.allResourceTypes,
            resourceType: props.resourceType
        }
    }
    render() {
        const resourceType = this.state.resourceType;
        const allResourceTypes = this.state.allResourceTypes;
        return (
            <SelectField value={resourceType} className="resource-types-select">
            {
                allResourceTypes.map(
                    (resourceType) => {
                        return
                        <MenuItem value={resourceType.name} primaryText={resourceType.name}>
                        </MenuItem>
                    }
                )
            }
            </SelectField>
        )
    }
}

ResourceTypes.propTypes = {
    resourceType: PropTypes.arrayOf(PropTypes.string).isRequired,
    allResourceTypes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string
    })).isRequired
}

export default ResourceTypes;
