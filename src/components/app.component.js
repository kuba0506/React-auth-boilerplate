import React from 'react';
import Header from './header.component';

export default ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}