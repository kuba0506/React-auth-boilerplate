import React, { Component } from "react";
import requireAuth from './requireAuth.component';

class Special extends Component {
    render() {
        return (
            <div>
                Special component
            </div>
        );
    }
}

export default requireAuth(Special);