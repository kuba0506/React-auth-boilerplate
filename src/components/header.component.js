import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {
    renderLinks() {
        if (this.props.authenticated) {
            return (
                <div>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/signout">Sign out</NavLink></li>
                    <li><NavLink to="/special">Special page</NavLink></li>
                </div>
            );
        } else {
            return (
                <div>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/signup">Sign up</NavLink></li>
                    <li><NavLink to="/signin">Sign in</NavLink></li>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderLinks()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(Header);