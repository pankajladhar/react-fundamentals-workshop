import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
    render() {
        return (
            <div className="ChildComponent">
                {this.props.title}<br />
                {this.props.subTitle}
            </div>
        );
    }
}

ChildComponent.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
};


class PropTypesComponent extends Component {
    render() {
        return (
            <div>
                Importance of PropTypes
                <hr />
                <ChildComponent title="Some title"
                    subTitle="some sub title`"/>
            </div>
        );
    }
}

export default PropTypesComponent;