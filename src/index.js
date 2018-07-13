import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/app.component'
import Welcome from './components/welcome.component'
import Signup from './components/auth/signup.component'
import reducers from './reducers';
import Special from './components/special.component';
import Signout from './components/auth/signout.component';
import Signin from './components/auth/signin.component';

const store = createStore(
    reducers,
    { 
        auth: { authenticated: localStorage.getItem('token') } 
    },
    applyMiddleware(reduxThunk)
);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome} />
                <Route path="/signup" component={Signup} />
                <Route path="/special" component={Special} />
                <Route path="/signout" component={Signout} />
                <Route path="/signin" component={Signin} />
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);