import React, { Component } from 'react';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class Signin extends Component {
    onSubmit = (formProps) => {
        if (formProps.email && formProps.password) {
            this.props.signin(formProps, () => {
                this.props.history.push('/special');
            });
        }
    }
    render() {
        const { handleSubmit } = this.props; // redux-form adds this to props

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email:</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <fieldset>
                    <label>Password:</label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                {this.props.errorMessage && <div>{this.props.errorMessage}</div>}
                <button>Sign in!</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage
    };
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signin' })
)(Signin);