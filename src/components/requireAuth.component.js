import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {
        // component just got rendered
        componentDidMount() {
            this.shouldRedirect();
        }

        // component just updated - new props
        componentDidUpdate() {
            this.shouldRedirect();
        }

        shouldRedirect() {
            if (!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render() {
            return (
                <ChildComponent {...this.props} />
            );
        }
    }

    const mapStateToProps = (state) => {
        return {
            auth: state.auth.authenticated
        };
    };

    return connect(mapStateToProps)(ComposedComponent);
};