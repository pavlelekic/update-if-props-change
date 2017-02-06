// @flow weak
import React, {Component} from 'react';

export default class UpdateIfPropsChange extends Component {
    static propTypes = {
        props: React.PropTypes.array.isRequired,
        children: React.PropTypes.element.isRequired
    };

    shouldComponentUpdate(nextProps) {
        for (var i = this.props.props.length - 1; i >= 0; i--) {
            if (this.props.props[i] !== nextProps.props[i]) {
                return true;
            }
        }

        return false;
    }

    render() {
        return this.props.children;
    }
}
