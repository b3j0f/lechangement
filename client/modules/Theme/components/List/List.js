import './List.css';

import React, { Component } from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import Theme from '../Item/Item';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allthemes: props.allthemes,
            themes: props.themes
        }
    }
    render() {
        const themes = this.state.themes;
        const allthemes = this.state.allthemes;
        return (
            <div className="theme-list">
            <SelectField multiple={true} value={themes} className="themes-select">
            {
                allthemes.map(
                    (theme) => {
                        return
                        <MenuItem value={theme.name} primaryText={theme.name}>
                        <Theme theme={theme}/>
                        </MenuItem>
                    }
                )
            }
            </SelectField>
            </div>
        )
    }
}

List.propTypes = {
    themes: PropTypes.arrayOf(PropTypes.string).isRequired,
    allthemes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string
    })).isRequired
}

export default List;
