import React from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';
import { getItemsLocalStorage } from './localStorage';

const isAuthenticated = getItemsLocalStorage('isAuthenticated');

const PrivateRoute = ({ Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuthenticated
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/',
                state: { from: props.location }
            }} />
    )} />
);

export default PrivateRoute;