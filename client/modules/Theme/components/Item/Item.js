import './Item.css';

import React, { Component } from 'react';

class Item extends Component {
    render() {
        const name = this.props.theme.name;
        const img = this.props.theme.img;
        const props = this.props.props;
        return (
            <div className="theme-item">
            <Chip ...props>
            <Avatar src={img} />
            {name}
            </Chip>
            </div>
        )
    }
}

Item.propTypes = {
    theme: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string
    }).isRequired,
    props: PropTypes.func.isRequired
}

export default Item;
